import { LitElement as a, css as f, html as d } from "lit";
import { property as p } from "lit/decorators.js";
var c = Object.defineProperty, m = (n, r, e, g) => {
  for (var i = void 0, o = n.length - 1, s; o >= 0; o--)
    (s = n[o]) && (i = s(r, e, i) || i);
  return i && c(r, e, i), i;
};
const l = class l extends a {
  render() {
    return this.config ? d`
      <div class="grid">
        ${Object.entries(this.config).map(([r, e]) => this.renderValue(r, e))}
      </div>
    ` : d`<div style="color: red;">Configuration is required</div>`;
  }
  renderValue(r, e) {
    return typeof e == "object" && (e = JSON.stringify(e)), d`
      <div class="label">${r}</div>
      <code class="value">${e}</code>
    `;
  }
};
l.styles = f`
    .grid {
      display: grid;
      grid-template-columns: 20% 75%;
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
m([
  p({ type: Object })
], t.prototype, "config");
typeof t < "u" && t.registerSallaComponent("salla-basic-inputs");
export {
  t as default
};
