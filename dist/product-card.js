import { LitElement as u, css as m, html as d } from "lit";
import { property as l } from "lit/decorators.js";
var g = Object.defineProperty, p = (s, t, r, a) => {
  for (var e = void 0, i = s.length - 1, c; i >= 0; i--)
    (c = s[i]) && (e = c(t, r, e) || e);
  return e && g(t, r, e), e;
};
const n = class n extends u {
  async connectedCallback() {
    var r, a, e;
    super.connectedCallback();
    const t = (e = (a = (r = this.config) == null ? void 0 : r.product) == null ? void 0 : a[0]) == null ? void 0 : e.value;
    if (!t) {
      console.error('Product card config is not valid, you must provide `config="{...}"!');
      return;
    }
    await window.Salla.onReady(), this.product = await window.Salla.product.api.getDetails(t).then((i) => i.data);
  }
  handleAddToCart() {
    var t;
    window.Salla.log("Adding to cart:", { product: this.product }), window.Salla.success(`Added ${(t = this.product) == null ? void 0 : t.name} to cart!`);
  }
  renderPlaceholder() {
    return d`
      <div class="product-card">
        <div class="skeleton-image"></div>
        <div class="skeleton-title"></div>
        <div class="skeleton-price"></div>
        <div class="skeleton-button"></div>
      </div>
    `;
  }
  render() {
    var t, r;
    return this.product ? d`
      <div class="product-card">
        <img
          class="product-image"
          src="${(t = this.product.image) == null ? void 0 : t.url}"
          alt="${(r = this.product.image) == null ? void 0 : r.alt}"
        />
        <h3 class="product-title">${this.product.name}</h3>
        <div>
          <span class="price-tag">${window.Salla.money(this.product.price)}</span>
          ${this.product.discount ? d`<span class="discount">${window.Salla.money(this.product.discount)}</span>` : ""}
        </div>
        <button class="add-to-cart" @click="${this.handleAddToCart}">
          ${window.Salla.lang.get("pages.cart.add_to_cart")}
        </button>
      </div>
    ` : this.renderPlaceholder();
  }
};
n.styles = m`
    .product-card {
      width: 250px;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s;
      background: white;
      margin: 1rem;
    }
    .product-card:hover {
      transform: translateY(-5px);
    }
    .product-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 4px;
    }
    .product-title {
      margin: 0.5rem 0;
      color: #333;
      font-size: 1.1rem;
    }
    .price-tag {
      font-size: 1.2rem;
      color:var(--primary);
      font-weight: bold;
    }
    .discount {
      background: #ff4444;
      color: white;
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      font-size: 0.9rem;
      margin-left: 0.5rem;
    }
    .add-to-cart {
      width: 100%;
      padding: 0.8rem;
      margin-top: 1rem;
      border: none;
      border-radius: 4px;
      background: var(--primary);
      color: white;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.2s;
    }
    .add-to-cart:hover {
      background: var(--primary-100);
    }
    
    /* Skeleton loading styles */
    @keyframes pulse {
      0% { opacity: 0.6; }
      50% { opacity: 0.8; }
      100% { opacity: 0.6; }
    }
    
    .skeleton-image {
      width: 100%;
      height: 200px;
      background-color: #e0e0e0;
      border-radius: 4px;
      margin-bottom: 0.5rem;
      animation: pulse 1.5s infinite ease-in-out;
    }
    
    .skeleton-title {
      width: 80%;
      height: 20px;
      background-color: #e0e0e0;
      border-radius: 4px;
      margin: 0.5rem 0;
      animation: pulse 1.5s infinite ease-in-out;
    }
    
    .skeleton-price {
      width: 40%;
      height: 24px;
      background-color: #e0e0e0;
      border-radius: 4px;
      margin: 0.5rem 0;
      animation: pulse 1.5s infinite ease-in-out;
    }
    
    .skeleton-button {
      width: 100%;
      height: 40px;
      background-color: #e0e0e0;
      border-radius: 4px;
      margin-top: 1rem;
      animation: pulse 1.5s infinite ease-in-out;
    }
  `;
let o = n;
p([
  l({ type: Object })
], o.prototype, "config");
p([
  l({ type: Object })
], o.prototype, "product");
typeof o < "u" && o.registerSallaComponent("salla-product-card");
export {
  o as default
};
