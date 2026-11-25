// Textbook Figure & Schema Atlas Renderer (`1. SÁCH SINH LÝ 2025.pdf`)
(function () {
  function esc(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  const TONES = {
    blue:   { fill: '#dbeafe', stroke: '#2563eb', text: '#1e3a8a', accent: '#3b82f6' },
    red:    { fill: '#fee2e2', stroke: '#dc2626', text: '#7f1d1d', accent: '#ef4444' },
    green:  { fill: '#dcfce7', stroke: '#16a34a', text: '#14532d', accent: '#22c55e' },
    amber:  { fill: '#fef3c7', stroke: '#d97706', text: '#78350f', accent: '#f59e0b' },
    purple: { fill: '#f3e8ff', stroke: '#9333ea', text: '#581c87', accent: '#a855f7' },
    teal:   { fill: '#ccfbf1', stroke: '#0d9488', text: '#134e4a', accent: '#14b8a6' },
    slate:  { fill: '#f1f5f9', stroke: '#64748b', text: '#1e293b', accent: '#94a3b8' },
  };

  function getTone(name) {
    return TONES[name] || TONES.blue;
  }

  function wrapLines(text, maxChars) {
    const words = String(text || '').split(/\s+/);
    const lines = [];
    let cur = '';
    for (const w of words) {
      if (!cur) {
        cur = w;
      } else if ((cur + ' ' + w).length <= maxChars) {
        cur += ' ' + w;
      } else {
        lines.push(cur);
        cur = w;
      }
    }
    if (cur) lines.push(cur);
    return lines.slice(0, 3);
  }

  function renderSvgText(x, y, text, maxChars, fill, fontSize, weight, anchor) {
    const lines = wrapLines(text, maxChars || 20);
    const lineH = (fontSize || 12) * 1.25;
    const startY = y - ((lines.length - 1) * lineH) / 2;
    return lines
      .map((ln, idx) => {
        const dy = startY + idx * lineH;
        return `<text x="${x}" y="${dy.toFixed(1)}" text-anchor="${anchor || 'middle'}" dominant-baseline="central" fill="${fill}" font-size="${fontSize || 12}" font-weight="${weight || 600}" font-family="Inter, system-ui, sans-serif">${esc(ln)}</text>`;
      })
      .join('');
  }

  function svgDefs(uid) {
    return `
      <defs>
        <marker id="arr-${uid}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#475569"/>
        </marker>
        <marker id="arr-red-${uid}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#dc2626"/>
        </marker>
        <marker id="arr-blue-${uid}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#2563eb"/>
        </marker>
        <marker id="arr-green-${uid}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#16a34a"/>
        </marker>
      </defs>`;
  }

  function renderFlowSvg(spec, uid) {
    const nodes = spec.nodes || [];
    const n = nodes.length || 1;
    const W = 680;
    const H = n > 5 ? 360 : 300;
    const cols = n <= 4 ? n : Math.ceil(n / 2);
    const rows = n <= 4 ? 1 : 2;
    const padX = 28;
    const gapX = 22;
    const boxW = Math.min(176, (W - padX * 2 - gapX * (cols - 1)) / cols);
    const totalW = cols * boxW + (cols - 1) * gapX;
    const startX = (W - totalW) / 2;
    const boxH = rows === 1 ? 104 : 84;
    const rowY = rows === 1 ? [H / 2 - boxH / 2] : [54, 198];

    const positions = nodes.map((nd, idx) => {
      const r = rows === 1 ? 0 : Math.floor(idx / cols);
      const rawC = idx % cols;
      // Snake layout on row 1 so flow moves seamlessly right -> down -> left
      const c = r % 2 === 1 ? cols - 1 - rawC : rawC;
      const x = startX + c * (boxW + gapX);
      const y = rowY[r];
      return { x, y, w: boxW, h: boxH, r, c };
    });

    let edgesSvg = '';
    for (let i = 0; i < positions.length - 1; i++) {
      const a = positions[i];
      const b = positions[i + 1];
      let x1, y1, x2, y2;
      if (a.r === b.r) {
        if (b.x > a.x) {
          x1 = a.x + a.w + 2;
          y1 = a.y + a.h / 2;
          x2 = b.x - 4;
          y2 = b.y + b.h / 2;
        } else {
          x1 = a.x - 2;
          y1 = a.y + a.h / 2;
          x2 = b.x + b.w + 4;
          y2 = b.y + b.h / 2;
        }
      } else {
        x1 = a.x + a.w / 2;
        y1 = a.y + a.h + 2;
        x2 = b.x + b.w / 2;
        y2 = b.y - 4;
      }
      const edgeLabel = (nodes[i] && nodes[i].edge) ? `<text x="${(x1 + x2) / 2}" y="${(y1 + y2) / 2 - 8}" text-anchor="middle" fill="#475569" font-size="10.5" font-weight="600">${esc(nodes[i].edge)}</text>` : '';
      edgesSvg += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#475569" stroke-width="2.2" marker-end="url(#arr-${uid})"/>${edgeLabel}`;
    }

    if (spec.feedback) {
      edgesSvg += `<path d="M ${positions[positions.length - 1].x + boxW / 2} ${positions[positions.length - 1].y + boxH + 4} Q ${W / 2} ${H - 12} ${positions[0].x + boxW / 2} ${positions[0].y + boxH + 4}" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#arr-red-${uid})"/>
      <text x="${W / 2}" y="${H - 18}" text-anchor="middle" fill="#dc2626" font-size="11" font-weight="700">${esc(spec.feedback)}</text>`;
    }

    const boxesSvg = nodes.map((nd, idx) => {
      const p = positions[idx];
      const t = getTone(nd.tone);
      const titleY = nd.sub ? p.y + p.h * 0.36 : p.y + p.h * 0.5;
      const subSvg = nd.sub ? renderSvgText(p.x + p.w / 2, p.y + p.h * 0.72, nd.sub, Math.floor(p.w / 6.8), '#334155', 10.5, 500) : '';
      return `
        <rect x="${p.x}" y="${p.y}" width="${p.w}" height="${p.h}" rx="12" fill="${t.fill}" stroke="${t.stroke}" stroke-width="2"/>
        ${renderSvgText(p.x + p.w / 2, titleY, nd.title, Math.floor(p.w / 7.2), t.text, 12.5, 700)}
        ${subSvg}
      `;
    }).join('');

    return `<svg class="diagram-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(spec.alt || 'Sơ đồ quy trình')}">
      ${svgDefs(uid)}
      <rect x="0" y="0" width="${W}" height="${H}" rx="14" fill="#f8fafc"/>
      ${spec.banner ? `<text x="${W / 2}" y="24" text-anchor="middle" fill="#0f172a" font-size="13" font-weight="700">${esc(spec.banner)}</text>` : ''}
      ${edgesSvg}
      ${boxesSvg}
    </svg>`;
  }

  function renderCycleSvg(spec, uid) {
    const steps = spec.steps || [];
    const W = 680;
    const H = 340;
    const cx = W / 2;
    const cy = H / 2 + 6;
    const rx = 215;
    const ry = 108;
    const n = steps.length || 4;

    const nodes = steps.map((st, idx) => {
      const ang = -Math.PI / 2 + (idx * 2 * Math.PI) / n;
      const x = cx + Math.cos(ang) * rx;
      const y = cy + Math.sin(ang) * ry;
      return { x, y, st };
    });

    let arrows = '';
    for (let i = 0; i < n; i++) {
      const a = nodes[i];
      const b = nodes[(i + 1) % n];
      const mx = (a.x + b.x) / 2;
      const my = (a.y + b.y) / 2;
      const dx = mx - cx;
      const dy = my - cy;
      const len = Math.hypot(dx, dy) || 1;
      const ctrlX = cx + (dx / len) * (rx * 0.96);
      const ctrlY = cy + (dy / len) * (ry * 0.96);
      arrows += `<path d="M ${a.x} ${a.y} Q ${ctrlX} ${ctrlY} ${b.x} ${b.y}" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="5 3"/>`;
    }

    const centerTone = getTone(spec.centerTone || 'teal');
    const centerSvg = `
      <ellipse cx="${cx}" cy="${cy}" rx="86" ry="44" fill="${centerTone.fill}" stroke="${centerTone.stroke}" stroke-width="2.2"/>
      ${renderSvgText(cx, spec.centerSub ? cy - 9 : cy, spec.centerTitle || 'Chu trình', 18, centerTone.text, 13, 700)}
      ${spec.centerSub ? renderSvgText(cx, cy + 14, spec.centerSub, 22, '#334155', 10.5, 500) : ''}
    `;

    const boxes = nodes.map(({ x, y, st }) => {
      const t = getTone(st.tone);
      const bw = 152;
      const bh = 62;
      return `
        <rect x="${x - bw / 2}" y="${y - bh / 2}" width="${bw}" height="${bh}" rx="11" fill="${t.fill}" stroke="${t.stroke}" stroke-width="2"/>
        ${renderSvgText(x, st.detail ? y - 10 : y, st.label, 20, t.text, 12, 700)}
        ${st.detail ? renderSvgText(x, y + 12, st.detail, 24, '#334155', 10, 500) : ''}
      `;
    }).join('');

    return `<svg class="diagram-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(spec.alt || 'Sơ đồ chu trình')}">
      ${svgDefs(uid)}
      <rect x="0" y="0" width="${W}" height="${H}" rx="14" fill="#f8fafc"/>
      ${arrows}
      ${centerSvg}
      ${boxes}
    </svg>`;
  }

  function renderCurveSvg(spec, uid) {
    const W = 680;
    const H = 330;
    const pL = 72;
    const pR = 36;
    const pT = 36;
    const pB = 56;
    const gW = W - pL - pR;
    const gH = H - pT - pB;

    const toX = (px) => pL + (px / 100) * gW;
    const toY = (py) => pT + ((100 - py) / 100) * gH;

    // Grid lines
    let grid = '';
    for (let v = 20; v <= 80; v += 20) {
      const gx = toX(v);
      const gy = toY(v);
      grid += `<line x1="${gx}" y1="${pT}" x2="${gx}" y2="${pT + gH}" stroke="#e2e8f0" stroke-width="1"/>`;
      grid += `<line x1="${pL}" y1="${gy}" x2="${pL + gW}" y2="${gy}" stroke="#e2e8f0" stroke-width="1"/>`;
    }

    const zones = (spec.zones || []).map((z) => {
      const x1 = toX(z.x1);
      const x2 = toX(z.x2);
      const yTop = toY(z.y2 !== undefined ? z.y2 : 100);
      const yBot = toY(z.y1 !== undefined ? z.y1 : 0);
      const t = getTone(z.tone || 'blue');
      return `<rect x="${x1}" y="${yTop}" width="${x2 - x1}" height="${yBot - yTop}" fill="${t.fill}" opacity="0.45"/>
              ${z.label ? `<text x="${(x1 + x2) / 2}" y="${yTop + 16}" text-anchor="middle" fill="${t.text}" font-size="11" font-weight="700">${esc(z.label)}</text>` : ''}`;
    }).join('');

    const hLines = (spec.hLines || []).map((hl) => {
      const yy = toY(hl.y);
      return `<line x1="${pL}" y1="${yy}" x2="${pL + gW}" y2="${yy}" stroke="${hl.color || '#64748b'}" stroke-width="1.5" stroke-dasharray="5 4"/>
              <text x="${pL + gW - 4}" y="${yy - 5}" text-anchor="end" fill="${hl.color || '#475569'}" font-size="10.5" font-weight="600">${esc(hl.label)}</text>`;
    }).join('');

    const vLines = (spec.vLines || []).map((vl) => {
      const xx = toX(vl.x);
      return `<line x1="${xx}" y1="${pT}" x2="${xx}" y2="${pT + gH}" stroke="${vl.color || '#64748b'}" stroke-width="1.5" stroke-dasharray="5 4"/>
              <text x="${xx + 4}" y="${pT + 14}" text-anchor="start" fill="${vl.color || '#475569'}" font-size="10.5" font-weight="600">${esc(vl.label)}</text>`;
    }).join('');

    const curves = (spec.curves || []).map((c, idx) => {
      const pts = c.pts || [];
      if (pts.length < 2) return '';
      let d = `M ${toX(pts[0][0]).toFixed(1)} ${toY(pts[0][1]).toFixed(1)}`;
      for (let i = 1; i < pts.length; i++) {
        const prev = pts[i - 1];
        const curr = pts[i];
        const mx = (prev[0] + curr[0]) / 2;
        d += ` C ${toX(mx).toFixed(1)} ${toY(prev[1]).toFixed(1)}, ${toX(mx).toFixed(1)} ${toY(curr[1]).toFixed(1)}, ${toX(curr[0]).toFixed(1)} ${toY(curr[1]).toFixed(1)}`;
      }
      const last = pts[pts.length - 1];
      const lx = Math.min(toX(last[0]), pL + gW - 10);
      const ly = Math.max(toY(last[1]) - 8, pT + 14);
      const col = c.color || ['#2563eb', '#dc2626', '#16a34a', '#9333ea'][idx % 4];
      return `<path d="${d}" fill="none" stroke="${col}" stroke-width="3" ${c.dashed ? 'stroke-dasharray="7 4"' : ''} stroke-linecap="round"/>
              ${c.name ? `<text x="${lx}" y="${ly}" text-anchor="end" fill="${col}" font-size="11.5" font-weight="700">${esc(c.name)}</text>` : ''}`;
    }).join('');

    const xTicks = (spec.xTicks || []).map((t) => `<text x="${toX(t.x)}" y="${pT + gH + 18}" text-anchor="middle" fill="#475569" font-size="10.5" font-weight="600">${esc(t.label)}</text>`).join('');
    const yTicks = (spec.yTicks || []).map((t) => `<text x="${pL - 8}" y="${toY(t.y)}" text-anchor="end" dominant-baseline="central" fill="#475569" font-size="10.5" font-weight="600">${esc(t.label)}</text>`).join('');

    return `<svg class="diagram-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(spec.alt || 'Đồ thị sinh lý')}">
      ${svgDefs(uid)}
      <rect x="0" y="0" width="${W}" height="${H}" rx="14" fill="#f8fafc"/>
      ${zones}
      ${grid}
      <line x1="${pL}" y1="${pT}" x2="${pL}" y2="${pT + gH}" stroke="#0f172a" stroke-width="2"/>
      <line x1="${pL}" y1="${pT + gH}" x2="${pL + gW}" y2="${pT + gH}" stroke="#0f172a" stroke-width="2"/>
      ${hLines}
      ${vLines}
      ${curves}
      ${xTicks}
      ${yTicks}
      <text x="${pL + gW / 2}" y="${H - 12}" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="700">${esc(spec.xLabel || '')}</text>
      <text x="18" y="${pT + gH / 2}" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="700" transform="rotate(-90 18 ${pT + gH / 2})">${esc(spec.yLabel || '')}</text>
    </svg>`;
  }

  function renderMembraneSvg(spec, uid) {
    const W = 680;
    const H = 320;
    const topLabel = spec.topLabel || 'Khoang ngoài / Lòng ống';
    const bottomLabel = spec.bottomLabel || 'Nội bào / Mạch máu';
    const channels = spec.channels || [];
    const chCount = channels.length || 1;
    const memY = 122;
    const memH = 74;

    const slots = channels.map((ch, i) => {
      const cx = (W / (chCount + 1)) * (i + 1);
      const t = getTone(ch.tone || 'blue');
      const dir = ch.dir || 'down';
      const arrowCol = ch.tone === 'red' ? '#dc2626' : ch.tone === 'green' ? '#16a34a' : '#2563eb';
      const marker = ch.tone === 'red' ? `arr-red-${uid}` : ch.tone === 'green' ? `arr-green-${uid}` : `arr-blue-${uid}`;
      let arrowSvg = '';
      if (dir === 'down') {
        arrowSvg = `<line x1="${cx}" y1="54" x2="${cx}" y2="262" stroke="${arrowCol}" stroke-width="2.6" marker-end="url(#${marker})"/>`;
      } else if (dir === 'up') {
        arrowSvg = `<line x1="${cx}" y1="262" x2="${cx}" y2="54" stroke="${arrowCol}" stroke-width="2.6" marker-end="url(#${marker})"/>`;
      } else if (dir === 'both') {
        arrowSvg = `<line x1="${cx - 12}" y1="56" x2="${cx - 12}" y2="260" stroke="#2563eb" stroke-width="2.4" marker-end="url(#arr-blue-${uid})"/>
                    <line x1="${cx + 12}" y1="260" x2="${cx + 12}" y2="56" stroke="#dc2626" stroke-width="2.4" marker-end="url(#arr-red-${uid})"/>`;
      }
      return `
        <rect x="${cx - 58}" y="${memY - 8}" width="116" height="${memH + 16}" rx="14" fill="${t.fill}" stroke="${t.stroke}" stroke-width="2.2"/>
        ${arrowSvg}
        <rect x="${cx - 54}" y="${memY + 12}" width="108" height="${memH - 24}" rx="8" fill="#ffffff" fill-opacity="0.9"/>
        ${renderSvgText(cx, ch.sub ? memY + 30 : memY + memH / 2, ch.label, 16, t.text, 11.5, 700)}
        ${ch.sub ? renderSvgText(cx, memY + 48, ch.sub, 18, '#475569', 9.5, 600) : ''}
        ${ch.top ? `<text x="${cx}" y="44" text-anchor="middle" fill="#0f172a" font-size="11.5" font-weight="700">${esc(ch.top)}</text>` : ''}
        ${ch.bottom ? `<text x="${cx}" y="286" text-anchor="middle" fill="#0f172a" font-size="11.5" font-weight="700">${esc(ch.bottom)}</text>` : ''}
      `;
    }).join('');

    return `<svg class="diagram-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(spec.alt || 'Sơ đồ vận chuyển qua màng')}">
      ${svgDefs(uid)}
      <rect x="0" y="0" width="${W}" height="${memY}" fill="#eff6ff"/>
      <rect x="0" y="${memY}" width="${W}" height="${memH}" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
      <rect x="0" y="${memY + memH}" width="${W}" height="${H - memY - memH}" fill="#f0fdf4"/>
      <text x="16" y="22" fill="#1e3a8a" font-size="12.5" font-weight="700">${esc(topLabel)}</text>
      <text x="16" y="306" fill="#14532d" font-size="12.5" font-weight="700">${esc(bottomLabel)}</text>
      ${spec.memLabel ? `<text x="${W - 14}" y="${memY + memH - 8}" text-anchor="end" fill="#92400e" font-size="10.5" font-weight="700">${esc(spec.memLabel)}</text>` : ''}
      ${slots}
    </svg>`;
  }

  function renderCompareSvg(spec, uid) {
    const panels = spec.panels || [];
    const W = 680;
    const H = 310;
    const count = panels.length || 2;
    const gap = 18;
    const pad = 22;
    const pw = (W - pad * 2 - gap * (count - 1)) / count;
    const ph = H - 36;

    const colsSvg = panels.map((p, i) => {
      const x = pad + i * (pw + gap);
      const y = 18;
      const t = getTone(p.tone || (i === 0 ? 'blue' : i === 1 ? 'red' : 'green'));
      const bullets = (p.bullets || []).slice(0, 5).map((b, bi) => {
        const by = y + 76 + bi * 38;
        return `<circle cx="${x + 16}" cy="${by}" r="4" fill="${t.stroke}"/>
                ${renderSvgText(x + 28, by, b, Math.floor((pw - 36) / 6.2), '#1e293b', 11, 500, 'start')}`;
      }).join('');
      return `
        <rect x="${x}" y="${y}" width="${pw}" height="${ph}" rx="12" fill="#ffffff" stroke="${t.stroke}" stroke-width="2"/>
        <rect x="${x}" y="${y}" width="${pw}" height="52" rx="12" fill="${t.fill}"/>
        <rect x="${x}" y="${y + 40}" width="${pw}" height="12" fill="${t.fill}"/>
        ${renderSvgText(x + pw / 2, p.subtitle ? y + 20 : y + 26, p.title, Math.floor(pw / 7.5), t.text, 13, 700)}
        ${p.subtitle ? `<text x="${x + pw / 2}" y="${y + 40}" text-anchor="middle" fill="#475569" font-size="10.5" font-weight="600">${esc(p.subtitle)}</text>` : ''}
        ${bullets}
      `;
    }).join('');

    return `<svg class="diagram-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(spec.alt || 'Sơ đồ so sánh')}">
      ${svgDefs(uid)}
      <rect x="0" y="0" width="${W}" height="${H}" rx="14" fill="#f8fafc"/>
      ${colsSvg}
    </svg>`;
  }

  function renderAnatomySvg(spec, uid) {
    const W = 680;
    const H = 330;
    const regions = spec.regions || [];
    const links = spec.links || [];

    const linksSvg = links.map((lk) => {
      const col = lk.color || '#475569';
      return `
        <line x1="${lk.x1}" y1="${lk.y1}" x2="${lk.x2}" y2="${lk.y2}" stroke="${col}" stroke-width="2.2" ${lk.dashed ? 'stroke-dasharray="5 4"' : ''} marker-end="url(#arr-${uid})"/>
        ${lk.label ? `<rect x="${(lk.x1 + lk.x2) / 2 - 42}" y="${(lk.y1 + lk.y2) / 2 - 11}" width="84" height="18" rx="6" fill="#ffffff" fill-opacity="0.9"/><text x="${(lk.x1 + lk.x2) / 2}" y="${(lk.y1 + lk.y2) / 2 - 1}" text-anchor="middle" fill="${col}" font-size="10.5" font-weight="700">${esc(lk.label)}</text>` : ''}
      `;
    }).join('');

    const regSvg = regions.map((r) => {
      const t = getTone(r.tone || 'blue');
      const x = r.x;
      const y = r.y;
      const w = r.w;
      const h = r.h;
      return `
        <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r.rx !== undefined ? r.rx : 14}" fill="${t.fill}" stroke="${t.stroke}" stroke-width="2"/>
        ${renderSvgText(x + w / 2, r.sub ? y + h * 0.38 : y + h / 2, r.label, Math.floor(w / 6.8), t.text, 12, 700)}
        ${r.sub ? renderSvgText(x + w / 2, y + h * 0.72, r.sub, Math.floor(w / 6.5), '#334155', 10, 500) : ''}
      `;
    }).join('');

    return `<svg class="diagram-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(spec.alt || 'Sơ đồ giải phẫu chức năng')}">
      ${svgDefs(uid)}
      <rect x="0" y="0" width="${W}" height="${H}" rx="14" fill="#f8fafc"/>
      ${regSvg}
      ${linksSvg}
    </svg>`;
  }

  function renderSvgByKind(svgSpec, uid) {
    if (!svgSpec) return '';
    switch (svgSpec.kind) {
      case 'flow': return renderFlowSvg(svgSpec, uid);
      case 'cycle': return renderCycleSvg(svgSpec, uid);
      case 'curve': return renderCurveSvg(svgSpec, uid);
      case 'membrane': return renderMembraneSvg(svgSpec, uid);
      case 'compare': return renderCompareSvg(svgSpec, uid);
      case 'anatomy': return renderAnatomySvg(svgSpec, uid);
      default: return renderFlowSvg(svgSpec, uid);
    }
  }

  function getAllFiguresForLesson(lessonId) {
    const p1 = window.DIAGRAMS_PART1 || {};
    const p2 = window.DIAGRAMS_PART2 || {};
    const p3 = window.DIAGRAMS_PART3 || {};
    return p1[lessonId] || p2[lessonId] || p3[lessonId] || [];
  }

  function renderPinsHtml(pins, figIndex, activePin) {
    return (pins || [])
      .filter((p) => typeof p.x === 'number' && typeof p.y === 'number')
      .map((p) => {
        const isActive = activePin === p.n ? ' active' : '';
        return `<button type="button" class="diagram-pin${isActive}" data-fig="${figIndex}" data-pin="${p.n}" style="left:${p.x}%;top:${p.y}%;" title="${esc(p.title)}" aria-label="Chú thích ${p.n}: ${esc(p.title)}">${p.n}</button>`;
      })
      .join('');
  }

  function openLightbox(fig) {
    let modal = document.getElementById('diagramLightbox');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'diagramLightbox';
      modal.className = 'diagram-lightbox hidden';
      modal.innerHTML = `
        <div class="diagram-lightbox-backdrop"></div>
        <div class="diagram-lightbox-dialog" role="dialog" aria-modal="true">
          <div class="diagram-lightbox-head">
            <div>
              <span class="diagram-fig-badge" id="lbCode"></span>
              <h3 id="lbTitle"></h3>
            </div>
            <button type="button" class="diagram-lightbox-close" id="lbClose" aria-label="Đóng">✕</button>
          </div>
          <div class="diagram-lightbox-body">
            <div class="diagram-stage diagram-stage-lg" id="lbStage"></div>
            <div class="diagram-legend" id="lbLegend"></div>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
      modal.querySelector('.diagram-lightbox-backdrop').addEventListener('click', () => modal.classList.add('hidden'));
      document.getElementById('lbClose').addEventListener('click', () => modal.classList.add('hidden'));
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
          modal.classList.add('hidden');
        }
      });
    }
    document.getElementById('lbCode').textContent = fig.code + (fig.page ? ' • ' + fig.page : '');
    document.getElementById('lbTitle').textContent = fig.title;
    const stageEl = document.getElementById('lbStage');
    const visual = fig.imgSrc
      ? `<img src="${esc(fig.imgSrc)}" alt="${esc(fig.title)}" />`
      : renderSvgByKind(fig.svg, 'lb-' + fig.code.replace(/\W+/g, ''));
    stageEl.innerHTML = visual + renderPinsHtml(fig.pins, 'lb', null);

    const legendEl = document.getElementById('lbLegend');
    legendEl.innerHTML = (fig.pins || []).map((p) => `
      <div class="pin-legend-item" data-pin="${p.n}">
        <span class="pin-num">${p.n}</span>
        <div>
          <strong>${esc(p.title)}</strong>
          <p>${esc(p.desc)}</p>
        </div>
      </div>
    `).join('');

    stageEl.querySelectorAll('.diagram-pin').forEach((btn) => {
      btn.addEventListener('click', () => {
        const num = btn.dataset.pin;
        stageEl.querySelectorAll('.diagram-pin').forEach((b) => b.classList.toggle('active', b.dataset.pin === num));
        legendEl.querySelectorAll('.pin-legend-item').forEach((row) => row.classList.toggle('active', row.dataset.pin === num));
      });
    });
    legendEl.querySelectorAll('.pin-legend-item').forEach((row) => {
      row.addEventListener('click', () => {
        const num = row.dataset.pin;
        stageEl.querySelectorAll('.diagram-pin').forEach((b) => b.classList.toggle('active', b.dataset.pin === num));
        legendEl.querySelectorAll('.pin-legend-item').forEach((r) => r.classList.toggle('active', r.dataset.pin === num));
      });
    });

    modal.classList.remove('hidden');
  }

  function render(lessonId, container) {
    if (!container) return;
    const allFigs = getAllFiguresForLesson(lessonId);
    if (!allFigs.length) {
      container.innerHTML = `<div class="diagram-empty">Chưa có dữ liệu hình/sơ đồ cho bài này.</div>`;
      return;
    }

    const mediaCount = allFigs.filter((f) => !!f.imgSrc).length;
    const svgCount = allFigs.length - mediaCount;
    let activeFilter = 'all';

    function draw() {
      const filtered = allFigs.filter((f) => {
        if (activeFilter === 'media') return !!f.imgSrc;
        if (activeFilter === 'svg') return !f.imgSrc;
        return true;
      });

      const chipsHtml = filtered.map((f, idx) => `
        <button type="button" class="diagram-chip" data-target="fig-card-${lessonId}-${idx}">
          <span>${esc(f.code)}</span>${f.imgSrc ? ' 📸' : ''}
        </button>
      `).join('');

      const cardsHtml = filtered.map((f, idx) => {
        const uid = `L${lessonId}F${idx}`;
        const visualHtml = f.imgSrc
          ? `<img src="${esc(f.imgSrc)}" alt="${esc(f.title)}" loading="lazy" />`
          : renderSvgByKind(f.svg, uid);
        const sourceTag = f.imgSrc
          ? `<span class="diagram-source-tag media">Ảnh Y khoa + Chú thích (${esc(f.source || 'Wikimedia Commons / OpenStax')})</span>`
          : `<span class="diagram-source-tag svg">Sơ đồ SGK Vector Hóa</span>`;

        const pinsLegendHtml = (f.pins || []).map((p) => `
          <div class="pin-legend-item" data-fig="${idx}" data-pin="${p.n}">
            <span class="pin-num">${p.n}</span>
            <div class="pin-text">
              <strong>${esc(p.title)}</strong>
              <p>${esc(p.desc)}</p>
            </div>
          </div>
        `).join('');

        return `
          <article class="diagram-card" id="fig-card-${lessonId}-${idx}">
            <div class="diagram-card-head">
              <div class="diagram-card-title-wrap">
                <span class="diagram-fig-badge">${esc(f.code)}</span>
                ${f.page ? `<span class="diagram-page-badge">${esc(f.page)}</span>` : ''}
                ${sourceTag}
                <h4>${esc(f.title)}</h4>
              </div>
              <button type="button" class="diagram-zoom-btn" data-fig-code="${esc(f.code)}" title="Phóng to hình">🔍 Phóng to</button>
            </div>
            ${f.summary ? `<p class="diagram-summary">${esc(f.summary)}</p>` : ''}
            <div class="diagram-body">
              <div class="diagram-stage" data-fig="${idx}">
                ${visualHtml}
                ${renderPinsHtml(f.pins, idx, null)}
              </div>
              <div class="diagram-legend" data-fig="${idx}">
                <div class="diagram-legend-title">Chạm vào số ①②③ trên hình hoặc bên dưới để xem giải thích:</div>
                ${pinsLegendHtml}
              </div>
            </div>
            ${f.takeaway ? `<div class="diagram-takeaway"><strong>💡 Điểm cốt lõi / Mẹo thi:</strong> ${esc(f.takeaway)}</div>` : ''}
          </article>
        `;
      }).join('');

      container.innerHTML = `
        <div class="diagram-atlas">
          <div class="diagram-toolbar">
            <div class="diagram-stats">
              <strong>📚 Bộ Hình &amp; Sơ Đồ Chuẩn SGK 2025:</strong>
              <span>Tổng cộng <b>${allFigs.length}</b> hình (${mediaCount} ảnh y khoa đối chiếu + ${svgCount} sơ đồ minh họa chú thích tiếng Việt)</span>
            </div>
            <div class="diagram-filters" role="tablist">
              <button type="button" class="diagram-filter-btn ${activeFilter === 'all' ? 'active' : ''}" data-filter="all">Tất cả (${allFigs.length})</button>
              ${mediaCount > 0 ? `<button type="button" class="diagram-filter-btn ${activeFilter === 'media' ? 'active' : ''}" data-filter="media">Ảnh Y khoa (${mediaCount})</button>` : ''}
              <button type="button" class="diagram-filter-btn ${activeFilter === 'svg' ? 'active' : ''}" data-filter="svg">Sơ đồ SGK (${svgCount})</button>
            </div>
          </div>
          <div class="diagram-chips" aria-label="Đi nhanh tới hình">${chipsHtml}</div>
          <div class="diagram-grid">${cardsHtml}</div>
        </div>
      `;

      // Bind filter pills
      container.querySelectorAll('.diagram-filter-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          activeFilter = btn.dataset.filter;
          draw();
        });
      });

      // Bind quick jump chips
      container.querySelectorAll('.diagram-chip').forEach((chip) => {
        chip.addEventListener('click', () => {
          const el = document.getElementById(chip.dataset.target);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });

      // Bind bidirectional pin highlighting
      container.querySelectorAll('.diagram-pin').forEach((btn) => {
        btn.addEventListener('click', () => {
          const figIdx = btn.dataset.fig;
          const pinNum = btn.dataset.pin;
          const card = container.querySelector(`#fig-card-${lessonId}-${figIdx}`);
          if (!card) return;
          card.querySelectorAll('.diagram-pin').forEach((b) => b.classList.toggle('active', b.dataset.pin === pinNum));
          card.querySelectorAll('.pin-legend-item').forEach((r) => r.classList.toggle('active', r.dataset.pin === pinNum));
        });
      });

      container.querySelectorAll('.pin-legend-item').forEach((row) => {
        row.addEventListener('click', () => {
          const figIdx = row.dataset.fig;
          const pinNum = row.dataset.pin;
          const card = container.querySelector(`#fig-card-${lessonId}-${figIdx}`);
          if (!card) return;
          card.querySelectorAll('.diagram-pin').forEach((b) => b.classList.toggle('active', b.dataset.pin === pinNum));
          card.querySelectorAll('.pin-legend-item').forEach((r) => r.classList.toggle('active', r.dataset.pin === pinNum));
        });
      });

      // Bind zoom modal
      container.querySelectorAll('.diagram-zoom-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const fig = allFigs.find((x) => x.code === btn.dataset.figCode);
          if (fig) openLightbox(fig);
        });
      });
    }

    draw();
  }

  window.TextbookDiagrams = {
    render,
    getAllFiguresForLesson,
  };
})();
