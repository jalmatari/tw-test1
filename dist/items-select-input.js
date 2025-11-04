import { LitElement as f, css as p, html as d } from "lit";
import { property as c } from "lit/decorators.js";
var m = Object.defineProperty, g = (s, r, e, n) => {
  for (var i = void 0, o = s.length - 1, a; o >= 0; o--)
    (a = s[o]) && (i = a(r, e, i) || i);
  return i && m(r, e, i), i;
};
const l = class l extends f {
  render() {
    return this.config ? d`
      <div class="grid">
        ${Object.entries(this.config).map(([r, e]) => this.renderValue(r, e))}
      </div>
    ` : d`<div style="color: red;">Configuration is required</div>`;
  }
  renderValue(r, e) {
    return e = typeof e == "object" ? e.map((n) => n.label).join(", ") : e, d`<div class="label">${r}</div><code class="value">${e}</code>`;
  }
};
l.styles = p`
    .grid {
      display: grid;
      grid-template-columns: 35% 60%;
      gap: 0.5rem 1rem;
      align-items: center;
    }
    .label { 
      font-weight: bold; 
      font-size: 0.9rem; 
      text-align: left;
    }
    .value { 
      background: #f5f5f5;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-family: monospace;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      direction: ltr;
    }
  `;
let t = l;
g([
  c({ type: Object })
], t.prototype, "config");
typeof t < "u" && t.registerSallaComponent("salla-items-select-input");
export {
  t as default
};
