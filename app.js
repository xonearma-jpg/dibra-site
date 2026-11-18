
/* Design Tokens & Variables */
:root {
  --bg-primary: #09090b;
  --bg-surface: #121215;
  --bg-surface-hover: #18181c;
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-highlight: rgba(99, 102, 241, 0.45);
  
  --text-primary: #fafafa;
  --text-secondary: #a1a1aa;
  --text-muted: #71717a;
  
  --accent-primary: #6366f1;
  --accent-hover: #4f46e5;
  --accent-glow: rgba(99, 102, 241, 0.25);
  --success: #10b981;
  
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Reset & Base with Scroll Offset for Sticky Header */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px; /* Prevents sticky header from overlapping section headings */
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

.container {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Ambient Background Glow */
.ambient-glow {
  position: fixed;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 850px;
  height: 520px;
  background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
  pointer-events: none;
  z-index: -1;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  transition: var(--transition);
}

.btn-lg {
  padding: 14px 26px;
  font-size: 1rem;
  border-radius: var(--radius-md);
}

.btn-primary {
  background-color: var(--accent-primary);
  color: #fff;
  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.35);
}

.btn-primary:hover {
  background-color: var(--accent-hover);
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: var(--bg-surface);
  color: var(--text-primary);
  border-color: var(--border-subtle);
}

.btn-secondary:hover {
  background-color: var(--bg-surface-hover);
  border-color: rgba(255, 255, 255, 0.2);
}

.btn-ghost {
  color: var(--text-secondary);
}

.btn-ghost:hover {
  color: var(--text-primary);
}

/* Navigation */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(9, 9, 11, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border-subtle);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  font-size: 1.15rem;
  letter-spacing: 0.05em;
  color: var(--text-primary);
  text-decoration: none;
}

.brand-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent-primary);
  box-shadow: 0 0 12px var(--accent-primary);
}

.nav-links {
  display: flex;
  gap: 32px;
}

.nav-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.92rem;
  font-weight: 500;
  transition: var(--transition);
}

.nav-links a:hover {
  color: var(--text-primary);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}

.mobile-toggle span {
  width: 22px;
  height: 2px;
  background: var(--text-primary);
  transition: var(--transition);
}

/* Hero Section */
.hero {
  padding: 84px 0 40px;
  text-align: center;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 999px;
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  font-size: 0.82rem;
  color: var(--text-secondary);
  margin-bottom: 24px;
}

.badge-pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--success);
  box-shadow: 0 0 8px var(--success);
}

.hero-title {
  font-size: clamp(2.4rem, 5.5vw, 4.1rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.035em;
  margin-bottom: 20px;
}

.text-gradient {
  background: linear-gradient(135deg, #ffffff 20%, #818cf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  max-width: 620px;
  margin: 0 auto 36px;
  font-size: 1.125rem;
  color: var(--text-secondary);
}

.hero-cta {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 52px;
  flex-wrap: wrap;
}

/* Metrics Proof Strip */
.metrics-strip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 18px 36px;
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  flex-wrap: wrap;
}

.metric-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.metric-value {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.metric-label {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.metric-divider {
  width: 1px;
  height: 32px;
  background: var(--border-subtle);
}

/* Sections & Bento Grid */
.features {
  padding: 56px 0;
}

.section-header {
  text-align: center;
  max-width: 580px;
  margin: 0 auto 44px;
}

.section-header h2 {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  margin-bottom: 10px;
}

.section-header p {
  color: var(--text-secondary);
  font-size: 0.96rem;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.bento-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 32px;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.bento-card:hover {
  border-color: var(--border-highlight);
  background: var(--bg-surface-hover);
  transform: translateY(-4px);
}

.featured-card {
  border-color: rgba(99, 102, 241, 0.3);
  background: linear-gradient(180deg, rgba(99, 102, 241, 0.06) 0%, var(--bg-surface) 100%);
}

.bento-large {
  grid-column: span 2;
}

.card-top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.pill-tag {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(99, 102, 241, 0.15);
  color: #a5b4fc;
  border: 1px solid rgba(99, 102, 241, 0.3);
}

.card-icon {
  font-size: 1.75rem;
  margin-bottom: 16px;
}

.bento-card h3 {
  font-size: 1.25rem;
  margin-bottom: 10px;
}

.bento-card p {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

/* Selected Work Cards */
.work-card {
  padding: 0;
  overflow: hidden;
}

.work-preview {
  height: 165px;
  padding: 16px;
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid var(--border-subtle);
}

.preview-fintech {
  background: radial-gradient(circle at top right, rgba(99, 102, 241, 0.4), #121215 75%);
}

.preview-saas {
  background: radial-gradient(circle at top left, rgba(16, 185, 129, 0.28), #121215 75%);
}

.preview-creator {
  background: radial-gradient(circle at bottom right, rgba(168, 85, 247, 0.32), #121215 75%);
}

.work-tag {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 6px;
  background: rgba(9, 9, 11, 0.75);
  backdrop-filter: blur(8px);
  border: 1px solid var(--border-subtle);
  color: var(--text-primary);
}

.work-info {
  padding: 24px;
}

/* FAQ Accordion */
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.faq-item {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 20px 24px;
  transition: var(--transition);
}

.faq-item[open] {
  border-color: var(--border-highlight);
}

.faq-item summary {
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-item summary::after {
  content: "+";
  font-size: 1.25rem;
  color: var(--accent-primary);
  font-weight: 500;
}

.faq-item[open] summary::after {
  content: "−";
}

.faq-item p {
  margin-top: 12px;
  color: var(--text-secondary);
  font-size: 0.94rem;
}

/* CTA Banner & Form */
.cta-banner {
  padding: 40px 0 84px;
}

.cta-box {
  background: linear-gradient(180deg, var(--bg-surface) 0%, rgba(99, 102, 241, 0.08) 100%);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 52px 24px;
  text-align: center;
}

.cta-box h2 {
  font-size: 1.9rem;
  margin-bottom: 10px;
}

.cta-box p {
  color: var(--text-secondary);
  margin-bottom: 28px;
}

.cta-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 480px;
  margin: 0 auto;
}

.cta-form input,
.cta-select {
  width: 100%;
  padding: 13px 16px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-subtle);
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: 0.95rem;
  outline: none;
  transition: var(--transition);
}

.cta-form input:focus,
.cta-select:focus {
  border-color: var(--accent-primary);
}

.cta-select {
  cursor: pointer;
}

.form-feedback {
  margin-top: 14px;
  font-size: 0.88rem;
  color: var(--success);
  min-height: 20px;
}

/* Footer */
.footer {
  border-top: 1px solid var(--border-subtle);
  padding: 40px 0;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
}

.footer-brand p {
  font-weight: 400;
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-left: 12px;
}

.footer-links {
  display: flex;
  gap: 24px;
}

.footer-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.88rem;
}

.footer-links a:hover {
  color: var(--text-primary);
}

/* Responsive Breakpoints */
@media (max-width: 860px) {
  .bento-grid {
    grid-template-columns: 1fr;
  }
  .bento-large {
    grid-column: span 1;
  }
  .metric-divider {
    display: none;
  }
  .nav-links, .nav-actions .btn-ghost {
    display: none;
  }
  .nav-links.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background: var(--bg-primary);
    padding: 24px;
    border-bottom: 1px solid var(--border-subtle);
  }
  .mobile-toggle {
    display: flex;
  }
}
