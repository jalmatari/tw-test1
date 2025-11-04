import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";

export default class GettingStartedGuide extends LitElement {
  @property({ type: Boolean })
  private isRtl: boolean = false;

  connectedCallback() {
    super.connectedCallback();
    
      this.isRtl = Salla.config.get('theme.is_rtl', true);
      Salla.lang.addBulk({
        "blocks.guide.title": { ar: "مرحباً بك في Twilight Bundles!", en: "Welcome to Twilight Bundles!" },
        "blocks.guide.subtitle": { ar: "رحلتك لبناء مكونات Salla المذهلة تبدأ من هنا", en: "Your journey to building amazing Salla components starts here" },
        "blocks.guide.dev_commands": { ar: "أوامر التطوير", en: "Development Commands" },
        "blocks.guide.dev_start": { ar: "تشغيل خادم التطوير مع إعادة التحميل التلقائي", en: "Start development server with hot reload" },
        "blocks.guide.build": { ar: "بناء الحزم للإنتاج", en: "Build bundles for production" },
        "blocks.guide.create_component": { ar: "إنشاء مكون جديد", en: "Create a new component" },
        "blocks.guide.delete_component": { ar: "حذف مكون موجود", en: "Delete an existing component" },
        "blocks.guide.shortcuts": { ar: "اختصارات لوحة المفاتيح (في وضع التطوير)", en: "Keyboard Shortcuts (in dev mode)" },
        "blocks.guide.quit": { ar: "إيقاف الخادم بأمان", en: "Quit the dev server safely" },
        "blocks.guide.restart": { ar: "إعادة تشغيل الخادم", en: "Restart the dev server" },
        "blocks.guide.open_browser": { ar: "فتح في المتصفح", en: "Open in browser" },
        "blocks.guide.force_stop": { ar: "إيقاف قسري لخادم التطوير", en: "Force stop the development server" },
        "blocks.guide.project_structure": { ar: "هيكل المشروع", en: "Project Structure" },
        "blocks.guide.components_folder": { ar: "مكونات الحزمة موجودة هنا", en: "Your bundle components live here" },
        "blocks.guide.example_components": { ar: "المكونات الموجودة هي أمثلة فقط - يمكنك حذفها يدوياً أو باستخدام tw-delete-component", en: "Existing components are examples - remove them manually or use tw-delete-component" },
        "blocks.guide.bundle_config": { ar: "إعدادات الحزمة ومخططات المكونات", en: "Bundle configuration and component schemas" },
        "blocks.guide.build_config": { ar: "إعدادات البناء", en: "Build configuration" },
        "blocks.guide.readme": { ar: "نظرة عامة على المشروع والتوثيق", en: "Project overview and documentation" },
        "blocks.guide.pro_tips": { ar: "نصائح احترافية", en: "Pro Tips" },
        "blocks.guide.tip_hot_reload": { ar: "عدّل الملفات في src/ لرؤية التغييرات فوراً مع إعادة التحميل التلقائي", en: "Edit files in src/ to see changes instantly with hot reload" },
        "blocks.guide.tip_typescript": { ar: "استخدم TypeScript للحصول على أمان أفضل للأنواع ودعم IDE", en: "Use TypeScript for better type safety and IDE support" },
        "blocks.guide.tip_config": { ar: "راجع twilight-bundle.json لتكوين حقول المكونات والإعدادات", en: "Check twilight-bundle.json to configure component fields and settings" },
        "blocks.guide.tip_folder": { ar: "يجب أن يكون كل مكون في مجلد خاص به مع ملف index.ts", en: "Each component should be in its own folder with an index.ts file" },
        "blocks.guide.tip_lit": { ar: "استخدم Lit لبناء مكونات الويب مع الخصائص التفاعلية", en: "Use Lit for building web components with reactive properties" },
        "blocks.guide.footer": { ar: "برمجة سعيدة! ابنِ شيئاً مذهلاً!", en: "Happy Coding! Build something amazing!" }
      });
  }
  static styles = css`
    :host {
      display: block;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    }

    .guide-container {
      max-width: 1400px;
      margin: 2rem auto;
      padding: 2rem;
      background: linear-gradient(34deg, #bbf3e5 -50%, #034d5c 100%);
      border-radius: 16px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
      color: white;
    }

    .guide-header {
      text-align: center;
      margin-bottom: 2rem;
      padding-bottom: 1.5rem;
      border-bottom: 2px solid rgba(255, 255, 255, 0.2);
      grid-column: 1 / -1;
    }

    .sections-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
      align-items: stretch;
    }

    .guide-title {
      font-size: 2.5rem;
      font-weight: bold;
      margin: 0 0 0.5rem 0;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .guide-subtitle {
      font-size: 1.1rem;
      opacity: 0.9;
      margin: 0;
    }

    .section {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 12px;
      padding: 1.5rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
      display: flex;
      flex-direction: column;
    }

    .section.full-width {
      grid-column: 1 / -1;
    }

    .section-title {
      font-size: 1.3rem;
      font-weight: 600;
      margin: 0 0 1rem 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .section-icon {
      font-size: 1.5rem;
    }

    .command-list,
    .tip-list,
    .shortcut-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .command-item,
    .tip-item,
    .shortcut-item {
      padding: 0.75rem;
      margin-bottom: 0.5rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      border-left: 3px solid rgba(255, 255, 255, 0.5);
      transition: all 0.2s;
    }

    .command-item:hover,
    .tip-item:hover,
    .shortcut-item:hover {
      background: rgba(255, 255, 255, 0.15);
      border-left-color: white;
    }

    .command-item.ltr:hover,
    .tip-item.ltr:hover,
    .shortcut-item.ltr:hover {
      transform: translateX(5px);
    }

    .command-item.rtl:hover,
    .tip-item.rtl:hover,
    .shortcut-item.rtl:hover {
      transform: translateX(-5px);
    }

    .rtl .command-item,
    .rtl .tip-item,
    .rtl .shortcut-item {
      border-left: none;
      border-right: 3px solid rgba(255, 255, 255, 0.5);
    }

    .rtl .command-item:hover,
    .rtl .tip-item:hover,
    .rtl .shortcut-item:hover {
      border-right-color: white;
    }

    .command-code {
      font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
      background: rgba(0, 0, 0, 0.3);
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      font-size: 0.85rem;
      display: inline;
      direction: ltr;
      white-space: nowrap;
    }

    .command-separator {
      opacity: 0.7;
      margin: 0 0.3rem;
    }

    .command-description {
      font-size: 0.9rem;
      opacity: 0.9;
      display: inline;
    }

    .shortcut-key {
      background: rgba(0, 0, 0, 0.3);
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      font-family: monospace;
      font-weight: bold;
    }

    .ltr .shortcut-key {
      margin-right: 0.5rem;
    }

    .rtl .shortcut-key {
      margin-left: 0.5rem;
    }

    .footer {
      text-align: center;
      margin-top: 1.5rem;
      padding-top: 1.5rem;
      border-top: 2px solid rgba(255, 255, 255, 0.2);
      grid-column: 1 / -1;
    }

    .footer-text {
      font-size: 1.2rem;
      margin: 0;
    }

    .emoji {
      font-size: 1.2em;
    }

    .ltr .emoji {
      margin-right: 0.3rem;
    }

    .rtl .emoji {
      margin-left: 0.3rem;
    }

    /* Tablet and up: 2 columns */
    @media (min-width: 768px) {
      .sections-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    /* Large screens: optimize spacing */
    @media (min-width: 1200px) {
      .guide-container {
        padding: 3rem;
      }

      .sections-grid {
        gap: 2rem;
      }
    }

    /* Mobile: single column, compact spacing */
    @media (max-width: 767px) {
      .guide-container {
        margin: 1rem;
        padding: 1.5rem;
      }

      .guide-title {
        font-size: 2rem;
      }

      .section {
        padding: 1rem;
      }

      .sections-grid {
        gap: 1rem;
      }
    }
  `;

  render() {
    const t = (key: string) => typeof Salla !== 'undefined' ? Salla.lang.get(key) : key;
    const dirClass = this.isRtl ? 'rtl' : 'ltr';

    return html`
      <div class="guide-container ${dirClass}">
        <div class="guide-header">
          <h1 class="guide-title">🚀 ${t('blocks.guide.title')}</h1>
          <p class="guide-subtitle">${t('blocks.guide.subtitle')}</p>
        </div>

        <div class="sections-grid">
          <div class="section">
          <h2 class="section-title">
            <span class="section-icon">🔧</span>
            ${t('blocks.guide.dev_commands')}
          </h2>
          <ul class="command-list">
            <li class="command-item ${dirClass}">
              <span class="command-code">pnpm dev</span>
              <span class="command-separator"> - </span>
              <span class="command-description">${t('blocks.guide.dev_start')}</span>
            </li>
            <li class="command-item ${dirClass}">
              <span class="command-code">pnpm build</span>
              <span class="command-separator"> - </span>
              <span class="command-description">${t('blocks.guide.build')}</span>
            </li>
            <li class="command-item ${dirClass}">
              <span class="command-code">tw-create-component</span>
              <span class="command-separator"> - </span>
              <span class="command-description">${t('blocks.guide.create_component')}</span>
            </li>
            <li class="command-item ${dirClass}">
              <span class="command-code">tw-delete-component</span>
              <span class="command-separator"> - </span>
              <span class="command-description">${t('blocks.guide.delete_component')}</span>
            </li>
          </ul>
        </div>

        <div class="section">
          <h2 class="section-title">
            <span class="section-icon">⌨️</span>
            ${t('blocks.guide.shortcuts')}
          </h2>
          <ul class="shortcut-list">
            <li class="shortcut-item ${dirClass}">
              <span class="shortcut-key">q + Enter</span>
              <span>${t('blocks.guide.quit')}</span>
            </li>
            <li class="shortcut-item ${dirClass}">
              <span class="shortcut-key">r + Enter</span>
              <span>${t('blocks.guide.restart')}</span>
            </li>
            <li class="shortcut-item ${dirClass}">
              <span class="shortcut-key">o + Enter</span>
              <span>${t('blocks.guide.open_browser')}</span>
            </li>
            <li class="shortcut-item ${dirClass}">
              <span class="shortcut-key">Ctrl+C</span>
              <span>${t('blocks.guide.force_stop')}</span>
            </li>
          </ul>
        </div>

        <div class="section">
          <h2 class="section-title">
            <span class="section-icon">📚</span>
            ${t('blocks.guide.project_structure')}
          </h2>
          <ul class="tip-list">
            <li class="tip-item ${dirClass}">
              <strong>src/components/</strong> - ${t('blocks.guide.components_folder')}
            </li>
            <li class="tip-item ${dirClass}" style="opacity: 0.85; font-size: 0.85rem;">
              💡 ${t('blocks.guide.example_components')}
            </li>
            <li class="tip-item ${dirClass}">
              <strong>twilight-bundle.json</strong> - ${t('blocks.guide.bundle_config')}
            </li>
            <li class="tip-item ${dirClass}">
              <strong>vite.config.ts</strong> - ${t('blocks.guide.build_config')}
            </li>
            <li class="tip-item ${dirClass}">
              <strong>README.md</strong> - ${t('blocks.guide.readme')}
            </li>
          </ul>
        </div>

        <div class="section">
          <h2 class="section-title">
            <span class="section-icon">💡</span>
            ${t('blocks.guide.pro_tips')}
          </h2>
          <ul class="tip-list">
            <li class="tip-item ${dirClass}">
              <span class="emoji">⚡</span>
              ${t('blocks.guide.tip_hot_reload')}
            </li>
            <li class="tip-item ${dirClass}">
              <span class="emoji">🎨</span>
              ${t('blocks.guide.tip_typescript')}
            </li>
            <li class="tip-item ${dirClass}">
              <span class="emoji">🔍</span>
              ${t('blocks.guide.tip_config')}
            </li>
            <li class="tip-item ${dirClass}">
              <span class="emoji">📦</span>
              ${t('blocks.guide.tip_folder')}
            </li>
            <li class="tip-item ${dirClass}">
              <span class="emoji">🎯</span>
              ${t('blocks.guide.tip_lit')}
            </li>
          </ul>
        </div>
        </div>

        <div class="footer">
          <p class="footer-text">🚀 ${t('blocks.guide.footer')} 🎉</p>
        </div>
      </div>
    `;
  }
}
