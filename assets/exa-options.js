(function () {
  'use strict';
  if (window.__exaOptionsMounted) return;
  var cfg = window.EXA_OPTIONS;
  if (!cfg || !cfg.controls || !cfg.controls.length) return;
  window.__exaOptionsMounted = true;

  var LOGO = '<svg class="lg" viewBox="0 0 1659 290" aria-label="Exasite" role="img"> <path d="M516.064 56.9334C501.504 48.8181 484.917 44.7591 466.297 44.7591C446.965 44.7591 429.777 48.9361 414.74 57.2899C399.941 65.6437 388.365 77.5794 380.011 93.0941C371.896 108.37 367.837 126.153 367.837 146.44C367.837 166.726 372.013 184.63 380.367 200.144C388.96 215.421 400.657 227.353 415.453 235.949C430.49 244.302 447.437 248.479 466.292 248.479C489.444 248.479 508.777 242.75 524.291 231.294C540.045 219.597 550.905 204.681 556.873 186.541H512.836C503.766 204.919 488.251 214.11 466.292 214.11C451.016 214.11 438.126 209.335 427.624 199.788C417.123 190.241 411.273 177.59 410.08 161.836H560.811C561.766 155.869 562.243 149.185 562.243 141.785C562.243 122.692 558.184 105.863 550.069 91.3031C541.953 76.5043 530.616 65.0486 516.055 56.9334H516.064ZM410.445 128.898C412.354 113.622 418.322 101.569 428.346 92.7376C438.37 83.6679 450.423 79.1317 464.506 79.1317C480.021 79.1317 493.029 83.6679 503.53 92.7376C514.032 101.807 519.401 113.861 519.643 128.898H410.445Z" fill="currentColor"/> <path d="M978.42 76.625C971.498 67.5553 962.19 60.0352 950.493 54.0702C939.037 47.8638 925.549 44.762 910.034 44.762C892.85 44.762 877.096 49.0596 862.775 57.652C848.692 66.0058 837.475 77.8208 829.121 93.0969C821.005 108.373 816.946 125.917 816.946 145.727C816.946 165.536 821.003 183.319 829.121 199.072C837.475 214.587 848.692 226.761 862.775 235.592C876.858 244.185 892.372 248.482 909.319 248.482C924.595 248.482 938.201 245.38 950.133 239.174C962.069 232.968 971.495 225.212 978.417 215.903V245.262H1019.59V47.9873H978.417V76.6306L978.42 76.625ZM969.828 182.244C964.337 192.268 957.059 199.906 947.989 205.158C938.919 210.41 929.134 213.035 918.63 213.035C908.367 213.035 898.579 210.41 889.271 205.158C880.201 199.667 872.802 191.791 867.072 181.528C861.582 171.265 858.836 159.33 858.836 145.724C858.836 132.118 861.582 120.424 867.072 110.638C872.802 100.614 880.201 93.0941 889.271 88.0835C898.34 82.8314 908.126 80.2068 918.63 80.2068C929.134 80.2068 938.919 82.8314 947.989 88.0835C957.059 93.3355 964.34 100.973 969.828 110.998C975.557 121.022 978.42 132.837 978.42 146.442C978.42 160.048 975.557 171.981 969.828 182.247V182.244Z" fill="currentColor"/> <path d="M1176.44 142.504C1167.37 138.445 1155.67 134.507 1141.35 130.689C1130.61 127.587 1122.5 125.081 1117.01 123.172C1111.51 121.024 1106.86 118.158 1103.04 114.579C1099.23 111 1097.31 106.582 1097.31 101.333C1097.31 94.6492 1100.18 89.2792 1105.91 85.2202C1111.64 81.1612 1119.87 79.1345 1130.61 79.1345C1141.59 79.1345 1150.3 81.7591 1156.75 87.0111C1163.19 92.2631 1166.77 99.3033 1167.49 108.134H1208.3C1207.35 88.5634 1199.95 73.1667 1186.1 61.9496C1172.5 50.4939 1154.48 44.7647 1132.04 44.7647C1117.01 44.7647 1103.64 47.2714 1091.94 52.2821C1080.49 57.2955 1071.65 64.2177 1065.45 73.0488C1059.24 81.6412 1056.14 91.188 1056.14 101.692C1056.14 114.582 1059.48 124.963 1066.17 132.839C1073.09 140.716 1081.2 146.563 1090.51 150.383C1099.82 154.201 1111.87 158.139 1126.67 162.198C1141.95 166.496 1153.05 170.434 1159.97 174.013C1167.13 177.592 1170.71 183.083 1170.71 190.482C1170.71 197.405 1167.49 203.134 1161.04 207.667C1154.84 211.965 1146.01 214.112 1134.55 214.112C1123.57 214.112 1114.38 211.367 1106.98 205.876C1099.82 200.147 1095.88 193.107 1095.17 184.753H1052.92C1053.4 196.689 1057.22 207.547 1064.38 217.335C1071.54 226.882 1081.2 234.52 1093.38 240.249C1105.79 245.74 1119.75 248.485 1135.27 248.485C1150.54 248.485 1163.79 245.978 1175.01 240.968C1186.46 235.954 1195.3 229.032 1201.5 220.201C1207.71 211.37 1210.81 201.346 1210.81 190.126C1210.57 177.475 1207.11 167.333 1200.43 159.695C1193.74 152.057 1185.75 146.327 1176.44 142.51V142.504Z" fill="currentColor"/> <path d="M1245.01 47.9844H1285.82V245.26H1245.01V47.9844Z" fill="currentColor"/> <path d="M1456.71 81.2791V47.9844H1397.17H1328.95H1310.34V81.2791H1328.95H1363.12V245.257H1403.93V81.2791H1456.71Z" fill="currentColor"/> <path d="M1654.11 141.788C1654.11 122.695 1650.06 105.866 1641.94 91.306C1633.83 76.5071 1622.49 65.0514 1607.93 56.9362C1593.37 48.821 1576.78 44.762 1558.16 44.762C1538.83 44.762 1521.64 48.9389 1506.6 57.2927C1491.8 65.6466 1480.23 77.5822 1471.87 93.0969C1463.76 108.373 1459.7 126.156 1459.7 146.442C1459.7 166.729 1463.88 184.633 1472.23 200.147C1480.82 215.423 1492.52 227.356 1507.32 235.951C1522.35 244.305 1539.3 248.482 1558.15 248.482C1581.31 248.482 1600.64 242.753 1616.15 231.297C1631.91 219.6 1642.77 204.683 1648.74 186.544H1604.7C1595.63 204.922 1580.11 214.112 1558.15 214.112C1542.88 214.112 1529.99 209.338 1519.49 199.791C1508.99 190.244 1503.14 177.592 1501.94 161.839H1652.67C1653.63 155.871 1654.11 149.188 1654.11 141.788H1654.11ZM1502.31 128.898C1504.22 113.622 1510.19 101.569 1520.21 92.7376C1530.24 83.6679 1542.29 79.1317 1556.37 79.1317C1571.89 79.1317 1584.9 83.6679 1595.4 92.7376C1605.9 101.807 1611.27 113.861 1611.51 128.898H1502.31Z" fill="currentColor"/> <path d="M661.323 107.983L574.371 39.3078V89.9473L632.185 135.63C637.822 139.428 637.822 147.725 632.185 151.523L574.371 197.205V247.845L661.323 179.17C672.865 170.99 679.726 157.724 679.726 143.576C679.726 129.429 672.865 116.163 661.323 107.983Z" fill="currentColor"/> <path d="M695.888 143.397C695.888 157.52 702.773 170.763 714.356 178.929L801.648 247.486V196.934L743.596 151.33C737.939 147.539 737.939 139.255 743.596 135.464L801.648 89.8602V39.3078L714.356 107.864C702.773 116.03 695.888 129.274 695.888 143.397Z" fill="currentColor"/> <path d="M150.936 145.658C150.936 164.386 160.065 181.948 175.425 192.776L291.182 283.688V206.801L222.047 155.488C214.546 150.461 214.546 142.785 222.047 137.757L291.182 84.5142V7.62677L175.425 98.5387C160.065 109.367 150.936 126.929 150.936 145.658Z" fill="#A5CDEA"/> <path d="M144.495 145.658C144.495 164.386 135.366 181.948 120.005 192.776L4.2489 283.688V206.801L73.3842 155.488C80.8853 150.461 80.8853 142.785 73.3842 137.757L4.2489 84.5142V7.62677L120.005 98.5387C135.366 109.367 144.495 126.929 144.495 145.658Z" fill="#A9B5F2"/> <path d="M143.813 145.658C143.813 161.651 138.271 176.999 128.659 187.141L42.1645 288V240.924C42.1645 240.924 44.1034 221.004 48.2598 211.103C51.8369 202.582 61.9532 189.296 61.9532 189.296L97.0569 154.854C102.406 150.106 102.406 142.997 97.0569 138.267L61.5972 102.31C61.5972 102.31 52.4687 92.0442 47.5753 79.5514C43.0933 68.1091 42.1645 45.7382 42.1645 45.7382V3.31509L128.659 104.174C138.271 114.316 143.813 129.664 143.813 145.658Z" fill="#A9B5F2"/> <path d="M150.936 145.658C150.936 161.651 156.477 176.999 166.089 187.141L252.584 288V240.924C252.584 240.924 250.645 221.004 246.488 211.103C242.911 202.582 232.795 189.296 232.795 189.296L197.691 154.854C192.342 150.106 192.342 142.997 197.691 138.267L233.151 102.31C233.151 102.31 242.279 92.0442 247.173 79.5514C251.655 68.1091 252.584 45.7382 252.584 45.7382V3.31509L166.089 104.174C156.477 114.316 150.936 129.664 150.936 145.658Z" fill="#A5CDEA"/> <path d="M140.453 166.83C142.645 160.202 143.813 152.998 143.813 145.658C143.813 138.317 142.645 131.113 140.453 124.485C136.371 114.183 129.338 105.118 120.005 98.5387L42.1645 37.4046V45.7382C42.1645 45.7382 43.0933 68.1091 47.5753 79.5514C52.4687 92.0442 61.5972 102.31 61.5972 102.31L97.0569 138.267C102.406 142.997 102.406 150.106 97.0569 154.854L61.9532 189.296C61.9532 189.296 51.8369 202.582 48.2598 211.103C44.1034 221.004 42.1645 240.924 42.1645 240.924V253.91L120.005 192.776C129.338 186.197 136.371 177.132 140.453 166.83Z" fill="#695CE4"/> <path d="M252.584 37.9407L175.425 98.5387C160.065 109.367 150.936 126.929 150.936 145.658C150.936 164.386 160.065 181.948 175.425 192.776L252.584 253.374V240.924C252.584 240.924 250.645 221.004 246.488 211.103C242.911 202.582 232.795 189.296 232.795 189.296L197.691 154.854C192.342 150.106 192.342 142.997 197.691 138.267L233.151 102.31C233.151 102.31 242.279 92.0442 247.173 79.5514C251.655 68.1091 252.584 45.7382 252.584 45.7382V37.9407Z" fill="#558AED"/> </svg>';
  var CH = '<svg viewBox="0 0 12 12" width="16" height="16" aria-hidden="true"><path d="M2.5 7.5 6 4l3.5 3.5" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>';
  var X = '<svg viewBox="0 0 12 12" width="16" height="16" aria-hidden="true"><path d="M3 3l6 6M9 3 3 9" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>';

  var CSS = [
    ':host{all:initial;position:fixed;z-index:2147483000;right:calc(24px + env(safe-area-inset-right,0px));bottom:0;',
    '--bg:#ffffff;--ink:#191815;--word:#191815;--mute:#6e6b80;--line:#e7e5f3;--soft:#f4f3fd;--sel:#695ce4;--selbg:#f1effe;--on:#695ce4;--sh:0 18px 40px -22px rgba(45,35,140,.42)}',
    
    '.A{font:500 16px/1.4 "Inter","Inter Tight",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;letter-spacing:-.006em;color:var(--ink);text-align:left;text-transform:none;font-style:normal;-webkit-font-smoothing:antialiased}',
    '*{box-sizing:border-box;margin:0;padding:0}',
    'button,input{font:inherit;color:inherit;letter-spacing:inherit}',
    'button{background:none;border:0;cursor:pointer;text-align:left}',
    'a{color:inherit;text-decoration:none}',
    'button:focus-visible,a:focus-visible,input:focus-visible{outline:2px solid var(--on);outline-offset:1px}',
    '.lg{display:block;width:103px;height:18px;flex:none;color:var(--word)}',
    '.lbl{font-size:12.5px;font-weight:600;line-height:1.2;letter-spacing:.06em;text-transform:uppercase;color:var(--mute);white-space:nowrap}',
    '.ttl{font-weight:600;font-size:16.5px;white-space:nowrap}',
    '.seg{display:flex;flex-wrap:wrap;gap:4px}',
    '.seg button,.seg a{display:inline-flex;align-items:center;min-height:38px;padding:7px 14px;color:var(--mute);border-radius:5px;white-space:nowrap;font-variant-numeric:tabular-nums}',
    '.seg button:hover,.seg a:hover{color:var(--ink);background:var(--soft)}',
    '.seg [aria-pressed=true],.seg [aria-current=page]{color:var(--ink);background:var(--selbg);box-shadow:inset 0 -3px 0 var(--sel)}',
    '.th{display:flex;flex-wrap:wrap;gap:10px}',
    '.th button{width:96px;aspect-ratio:4/3;border-radius:5px;background:var(--soft) center/cover no-repeat;outline:1px solid var(--line);outline-offset:-1px}',
    '.th button:hover{outline-color:var(--sel)}',
    '.th button[aria-pressed=true]{outline:3px solid var(--sel);outline-offset:3px}',
    '.cap{font-size:14.5px;color:var(--mute);margin-top:10px}.cap b{color:var(--ink);font-weight:600}',
    '.mini{width:32px;height:23px;border-radius:3px;background:var(--soft) center/cover;outline:1px solid var(--line);outline-offset:-1px;flex:none}',
    '.sw{width:40px;height:23px;border-radius:6px;background:var(--line);position:relative;flex:none;transition:background .15s}',
    '.sw::after{content:"";position:absolute;top:2px;left:2px;width:19px;height:19px;border-radius:4px;background:#fff;transition:transform .15s}',
    '[aria-checked=true] .sw{background:var(--on)}[aria-checked=true] .sw::after{transform:translateX(17px)}',
    '.swl{display:flex;align-items:center;gap:12px;min-height:38px}.swl span:last-child{color:var(--mute)}',
    '.rg{display:flex;align-items:center;gap:14px;min-height:38px}.rg input{flex:1;min-width:200px;height:24px;accent-color:var(--sel)}.rg output{font-variant-numeric:tabular-nums;min-width:4ch}',
    '.A{display:flex;flex-direction:column;width:max-content;max-width:calc(100vw - 40px);background:var(--bg);border:1px solid var(--line);border-bottom:0;border-radius:10px 10px 0 0;box-shadow:var(--sh)}',
    '.bar{display:flex;align-items:stretch;height:62px}',
    '.it{display:flex;align-items:center;gap:10px;padding:0 18px;border-left:1px solid var(--line);white-space:nowrap}',
    '.bar>.it:first-child{border-left:0;padding:0 22px}',
    'button.it:hover{background:var(--soft)}',
    '.it .seg button{min-height:40px;padding:6px 12px}',
    '.opt{font-weight:600;font-size:16.5px;white-space:nowrap}',
    '.val{font-weight:600;font-variant-numeric:tabular-nums}',
    '.more{display:flex;align-items:stretch;max-width:0;overflow:hidden;transition:max-width .36s cubic-bezier(.2,.7,.2,1) .7s}',
    '.A:hover .more,.A:focus-within .more,.A[data-open=true] .more{max-width:1600px;transition-delay:0s}',
    '.chev{padding:0 20px;color:var(--mute)}.chev svg{transition:transform .2s}',
    '.A[data-open=true] .chev svg{transform:rotate(180deg)}',
    '.sheet{border-bottom:1px solid var(--line);overflow:auto;max-height:min(78vh,860px);overscroll-behavior:contain}',
    '.hd{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:20px 24px 14px}',
    '.hd .x{display:none;width:44px;height:44px;place-items:center;color:var(--mute);border-radius:6px}',
    '.row{display:grid;grid-template-columns:190px 1fr;gap:20px;padding:16px 24px;border-top:1px solid var(--line);align-items:start}',
    '.row>.lbl{padding-top:12px}',
    '@media (hover:none){.A:hover .more{max-width:0}}',
    '@media (max-width:639px){',
    ':host{right:calc(12px + env(safe-area-inset-right,0px))}',
    ':host([data-open=true]){left:0;right:0}',
    '.A{max-width:100vw}',
    ':host([data-open=true]) .A{width:100%;border-radius:10px 10px 0 0;border-left:0;border-right:0}',
    '.more,.A:hover .more,.A:focus-within .more,.A[data-open=true] .more{display:none}',
    '.bar{height:56px}.bar>.it:first-child{padding:0 18px;padding-bottom:env(safe-area-inset-bottom,0px)}',
    ':host([data-open=true]) .bar{display:none}',
    '.sheet{max-height:78vh;border-bottom:0;padding-bottom:env(safe-area-inset-bottom,0px)}',
    '.hd .x{display:grid}',
    '.row{grid-template-columns:1fr;gap:10px;padding:14px 18px}.row>.lbl{padding-top:0}.hd{padding:16px 18px 10px}.th button{width:calc((100vw - 66px) / 4);max-width:110px}',
    '}',
    '@media (prefers-reduced-motion:reduce){*{transition:none!important}}',
    '@media print{:host{display:none}}'
  ].join('');

  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var LS = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  var store = 'exa:' + (cfg.store || location.pathname.replace(/[^/]*$/, '')) + ':';
  var controls = cfg.controls;
  var values = {}, hooks = {}, open = false;
  var root, host;

  function find(key) { for (var i = 0; i < controls.length; i++) if (controls[i].key === key) return controls[i]; return null; }
  function opt(c, v) { var o = c.options || []; for (var i = 0; i < o.length; i++) if (String(o[i].v) === String(v)) return o[i]; return o[0] || {}; }
  function shortOf(c) { return c.short || c.label; }
  function shown(c, v) {
    if (c.type === 'toggle') return v ? 'увімк.' : 'вимк.';
    if (c.type === 'range') return v + (c.unit || '');
    var o = opt(c, v); return o.short || o.label;
  }
  function text(c, v) { return c.type === 'toggle' ? (v ? 'on' : 'off') : String(v); }

  
  function apply(c, v, init) {
    var html = document.documentElement, key = c.key;
    if (c.type === 'range') html.style.setProperty(c.cssVar || '--' + key, v + (c.unit || ''));
    else if (c.type !== 'links') {
      var s = text(c, v), attr = 'data-' + key;
      html.setAttribute(attr, s);
      document.querySelectorAll('[' + attr + ']').forEach(function (el) { el.setAttribute(attr, s); });
      document.querySelectorAll('[data-vary^="' + key + ':"]').forEach(function (el) { el.hidden = el.getAttribute('data-vary') !== key + ':' + s; });
      if (c.type === 'images' && c.target) {
        var o = opt(c, v), src = o.full || o.src;
        document.querySelectorAll(c.target).forEach(function (el) {
          if (el.tagName === 'IMG') { el.removeAttribute('srcset'); el.src = src; if (o.pos) el.style.objectPosition = o.pos; }
          else { el.style.backgroundImage = 'url("' + src + '")'; if (o.pos) el.style.backgroundPosition = o.pos; }
        });
      }
    }
    (hooks[key] || []).forEach(function (fn) { try { fn(v, init); } catch (e) {} });
    document.dispatchEvent(new CustomEvent('exa:option', { detail: { key: key, value: v, init: !!init } }));
  }

  function set(key, v, init) {
    var c = find(key); if (!c) return;
    if (c.type === 'links') { var o = opt(c, v); if (o.href && !init) location.href = o.href; return; }
    if (c.type === 'toggle') v = v === true || v === 'on' || v === '1' || v === 'true';
    if (c.type === 'range') v = Math.min(c.max, Math.max(c.min, Number(v)));
    values[key] = v;
    if (!init) LS.set(store + key, text(c, v));
    apply(c, v, init);
    if (root) render();
  }

  
  function full(c) {
    var v = values[c.key], k = esc(c.key);
    if (c.type === 'links') return '<div class="seg">' + c.options.map(function (o) { return '<a href="' + esc(o.href || '#') + '"' + (String(o.v) === String(v) ? ' aria-current="page"' : '') + '>' + esc(o.label) + '</a>'; }).join('') + '</div>';
    if (c.type === 'choice') return '<div class="seg">' + c.options.map(function (o) { return '<button type="button" data-k="' + k + '" data-v="' + esc(o.v) + '" aria-pressed="' + (String(o.v) === String(v)) + '">' + esc(o.label) + '</button>'; }).join('') + '</div>';
    if (c.type === 'images') {
      var cur = opt(c, v);
      return '<div class="th">' + c.options.map(function (o) { return '<button type="button" data-k="' + k + '" data-v="' + esc(o.v) + '" aria-pressed="' + (String(o.v) === String(v)) + '" aria-label="' + esc(o.label) + '" title="' + esc(o.label) + '" style="background-image:url(&quot;' + esc(o.src) + '&quot;)"></button>'; }).join('') +
        '</div><p class="cap"><b>' + esc(cur.label) + '</b>' + (cur.note ? ' · ' + esc(cur.note) : '') + '</p>';
    }
    if (c.type === 'toggle') return '<button type="button" class="swl" role="switch" data-k="' + k + '" aria-checked="' + !!v + '"><span class="sw"></span><span>' + (v ? 'увімкнено' : 'вимкнено') + '</span></button>';
    if (c.type === 'range') return '<label class="rg"><input type="range" data-k="' + k + '" min="' + c.min + '" max="' + c.max + '" step="' + (c.step || 1) + '" value="' + v + '" aria-label="' + esc(c.label) + '"><output>' + esc(shown(c, v)) + '</output></label>';
    return '';
  }
  function compact(c) {
    var v = values[c.key], k = esc(c.key), lb = '<span class="lbl">' + esc(shortOf(c)) + '</span>';
    if (c.type === 'choice' && c.options.length <= 4) return '<div class="it">' + lb + '<div class="seg">' + c.options.map(function (o) { return '<button type="button" data-k="' + k + '" data-v="' + esc(o.v) + '" aria-pressed="' + (String(o.v) === String(v)) + '" title="' + esc(o.label) + '">' + esc(o.short || o.label) + '</button>'; }).join('') + '</div></div>';
    if (c.type === 'toggle') return '<button type="button" class="it" role="switch" data-k="' + k + '" aria-checked="' + !!v + '" aria-label="' + esc(c.label) + '">' + lb + '<span class="sw"></span></button>';
    if (c.type === 'images') { var o = opt(c, v); return '<button type="button" class="it" data-act="open">' + lb + '<i class="mini" style="background-image:url(&quot;' + esc(o.src) + '&quot;)"></i><span class="val">' + esc(o.short || o.label) + '</span></button>'; }
    return '<button type="button" class="it" data-act="open">' + lb + '<span class="val">' + esc(shown(c, v)) + '</span></button>';
  }
  function render() {
    var onBar = controls.filter(function (c) { return c.bar !== false; }).slice(0, 5);
    var meta = [cfg.project, cfg.kind].filter(Boolean).map(esc).join(' · ');
    var sheet = open ? '<div class="sheet" role="dialog" aria-label="Опції відображення"><div class="hd"><span class="ttl">Опції відображення</span><span class="lbl">' + meta + '</span>' +
      '<button type="button" class="x" data-act="toggle" aria-label="Згорнути">' + X + '</button></div>' +
      controls.map(function (c) { return '<div class="row"><span class="lbl">' + esc(c.label) + '</span><div>' + full(c) + '</div></div>'; }).join('') + '</div>' : '';
    var bar = '<div class="bar"><button type="button" class="it" data-act="toggle" aria-expanded="' + open + '" title="Опції відображення">' + LOGO + '<span class="opt">Опції</span></button>' +
      '<div class="more">' + onBar.map(compact).join('') +
      '<button type="button" class="it chev" data-act="toggle" aria-expanded="' + open + '" aria-label="' + (open ? 'Згорнути' : 'Розгорнути') + '">' + CH + '</button></div></div>';
    root.innerHTML = '<style>' + CSS + '</style><div class="A" data-open="' + open + '">' + sheet + bar + '</div>';
    host.setAttribute('data-open', String(open));
  }
  function toggle(state) { open = state == null ? !open : state; render(); }

  function mount() {
    host = document.createElement('div');
    host.setAttribute('data-exa-options', '');
    host.setAttribute('role', 'region');
    host.setAttribute('aria-label', 'Опції відображення');
    root = host.attachShadow({ mode: 'open' });
    document.body.appendChild(host);
    render();
    root.addEventListener('click', function (e) {
      var t = e.target.closest('button,a'); if (!t) return;
      if (t.dataset.act === 'toggle') return toggle();
      if (t.dataset.act === 'open') return toggle(true);
      if (t.dataset.k == null) return;
      var c = find(t.dataset.k); if (!c) return;
      set(c.key, c.type === 'toggle' ? !values[c.key] : t.dataset.v);
    });
    root.addEventListener('input', function (e) {
      var t = e.target; if (t.type !== 'range') return;
      var c = find(t.dataset.k); values[c.key] = Number(t.value); apply(c, values[c.key]);
      t.nextElementSibling.textContent = shown(c, values[c.key]);
    });
    root.addEventListener('change', function (e) { var t = e.target; if (t.type === 'range') set(t.dataset.k, t.value); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && open) toggle(false); });
    document.addEventListener('click', function (e) { if (open && e.composedPath().indexOf(host) < 0) toggle(false); });
  }

  
  var q = null; try { q = new URLSearchParams(location.search); } catch (e) {}
  controls.forEach(function (c) {
    if (c.type === 'links') { values[c.key] = c.value; return; }
    var v = (q && q.get(c.key)) || LS.get(store + c.key);
    if (v == null) v = c.value;
    if (c.type === 'choice' || c.type === 'images') { if (!c.options.some(function (o) { return String(o.v) === String(v); })) v = c.value; }
    set(c.key, v, true);
  });

  cfg.set = function (key, v) { set(key, v); };
  cfg.on = function (key, fn) { (hooks[key] = hooks[key] || []).push(fn); fn(values[key], true); };
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
})();
