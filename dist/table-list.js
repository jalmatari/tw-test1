import { LitElement as p, css as c, html as d } from "lit";
import { property as m } from "lit/decorators.js";
var f = Object.defineProperty, b = (a, t, i, o) => {
  for (var e = void 0, s = a.length - 1, n; s >= 0; s--)
    (n = a[s]) && (e = n(t, i, e) || e);
  return e && f(t, i, e), e;
};
const l = class l extends p {
  render() {
    var t, i;
    return d`
      <div class="table-list">
        ${(i = (t = this.config) == null ? void 0 : t.items) == null ? void 0 : i.map(
      (o) => d`
            <div class="table-item">
              <div class="item-content">
                <h3 class="item-title">${o.title}</h3>
                <p class="item-description">${o.description}</p> 
              </div>
            </div>
          `
    )}
      </div>
    `;
  }
};
l.styles = c`
    .table-list {
      width: 100%;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    .table-item {
      display: flex;
      padding: 1rem;
      background: white;
      border-bottom: 1px solid #eee;
      align-items: center;
      transition: background 0.2s;
    }
    .table-item:hover {
      background: #f8f9fa;
    }
    .item-content {
      flex: 1;
    }
    .item-title {
      font-weight: 500;
      color: #2c3e50;
      margin: 0;
    }
    .item-description {
      color: #666;
      font-size: 0.9rem;
      margin: 4px 0 0;
    }
  `;
let r = l;
b([
  m({ type: Object })
], r.prototype, "config");
typeof r < "u" && r.registerSallaComponent("salla-table-list");
export {
  r as default
};
