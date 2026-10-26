
import { useState } from 'react'
import navbarLogo from './assets/shopnow4u-logo-navbar.png'
import shopNowLogo from './assets/shopnow4u-logo.png'
import './App.css'

const policySections = [
  {
    id: 'introduction',
    title: '1. Introduction',
    paragraphs: [
      'This Privacy Policy explains how Talentrise Technokrate Pvt. Ltd., associated with Shop Now 4 U, collects, uses, processes, and protects information when you access our website or use our services.',
      'This policy is intended to help you understand our privacy practices. Please review it carefully before using the platform.',
    ],
  },
  {
    id: 'information-we-collect',
    title: '2. Information We Collect',
    paragraphs: [
      'Depending on how you interact with our platform, we may collect information you provide directly, information related to your transactions and customer support requests, and certain technical information generated when you use the website.',
    ],
    bullets: [
      'Personal information such as your name, contact details, and email address when provided.',
      'Account and profile details submitted during registration or while using our services.',
      'Order, transaction, and customer support information where applicable.',
      'Technical information such as browser, device, and website usage data, where collected.',
    ],
  },
  {
    id: 'how-we-use-information',
    title: '3. How We Use Your Information',
    paragraphs: [
      'Information may be used for legitimate operational purposes connected with providing and improving our services, subject to applicable law and the way the information was collected.',
    ],
    bullets: [
      'To operate and maintain the platform.',
      'To respond to questions, requests, and customer support enquiries.',
      'To manage relevant account and transaction-related activities.',
      'To maintain website security and investigate suspected misuse.',
      'To meet applicable legal and regulatory obligations.',
    ],
  },
  {
    id: 'legal-basis-and-consent',
    title: '4. Consent and Applicable Law',
    paragraphs: [
      'Where consent is required by applicable law, we will seek consent before processing information for the relevant purpose. Other processing may take place where permitted by applicable law.',
      'You may contact us to ask questions about the processing of your personal information or to withdraw consent where withdrawal is available. Withdrawal does not affect processing that took place lawfully before withdrawal.',
    ],
  },
  {
    id: 'sharing-information',
    title: '5. Sharing of Information',
    paragraphs: [
      'Information may be shared where reasonably necessary to operate the platform, provide requested services, respond to lawful requests, protect rights and safety, or comply with legal obligations.',
      'Where third-party service providers are used, their access should be limited to what is needed for their assigned services and subject to appropriate arrangements.',
    ],
  },
  {
    id: 'payments-and-transactions',
    title: '6. Payments and Transactions',
    paragraphs: [
      'Where payment services are offered, payment information may be handled by the relevant payment service provider. The information collected and the way payments are processed depend on the payment methods and providers actually used by the platform.',
      'Please confirm the payment providers and payment-data practices with the company before publishing this section as a final policy.',
    ],
  },
  {
    id: 'cookies-and-technology',
    title: '7. Cookies and Similar Technologies',
    paragraphs: [
      'The website may use cookies or similar technologies for essential functionality, preferences, security, and website analytics where these technologies are implemented.',
      'The actual cookies, their purposes, and the available controls should be documented according to the technologies used on the live website.',
    ],
  },
  {
    id: 'data-retention',
    title: '8. Data Retention',
    paragraphs: [
      'Personal information should be retained only for as long as necessary for the purposes for which it was collected, subject to applicable legal, accounting, security, and operational requirements.',
      'Specific retention periods should be confirmed with the company and its operational teams.',
    ],
  },
  {
    id: 'data-security',
    title: '9. Data Security',
    paragraphs: [
      'Appropriate technical and organisational measures should be used to protect personal information against unauthorised access, loss, misuse, alteration, or disclosure.',
      'No method of electronic transmission or storage can be guaranteed to be completely secure. The company should document the safeguards it actually maintains.',
    ],
  },
  {
    id: 'your-rights',
    title: '10. Your Privacy Rights',
    paragraphs: [
      'Depending on applicable law, you may have rights relating to your personal information, including requesting access to information, correction of inaccurate information, deletion, or withdrawal of consent where applicable.',
      'Requests can be directed to the company using the contact details provided in this policy. Additional verification may be needed before a request can be processed.',
    ],
  },
  {
    id: 'third-party-services',
    title: '11. Third-Party Websites and Services',
    paragraphs: [
      'The platform may contain links to third-party websites or use third-party services. Those parties may have their own privacy notices and practices.',
      'Please review the applicable third-party privacy information before providing personal information to those services.',
    ],
  },
  {
    id: 'children-privacy',
    title: '12. Children’s Privacy',
    paragraphs: [
      'The company should handle information relating to children in accordance with applicable law and the age-related requirements relevant to the services offered.',
      'If you believe that personal information has been submitted inappropriately, please contact the company so that the matter can be reviewed.',
    ],
  },
  {
    id: 'policy-changes',
    title: '13. Changes to This Privacy Policy',
    paragraphs: [
      'This Privacy Policy may be updated to reflect changes in the platform, business practices, or applicable legal requirements.',
      'When changes are published, the updated policy should display an appropriate revision date. Please review this page periodically.',
    ],
  },
  {
    id: 'contact-information',
    title: '14. Contact Information',
    paragraphs: [
      'For questions, concerns, or requests relating to this Privacy Policy, you may contact the company using the contact details confirmed below.',
    ],
    contact: true,
  },
  {
    id: 'important-notice',
    title: '15. Important Information',
    paragraphs: [
      'This webpage presents a draft privacy-policy structure for review. The company should verify the actual information collected, purposes of processing, payment arrangements, cookies, retention periods, third-party services, and applicable legal requirements before approving and publishing the policy.',
    ],
  },
]

function App() {
  const [search, setSearch] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  const visibleSections = policySections.filter((section) => {
    const searchableText = [
      section.title,
      ...section.paragraphs,
      ...(section.bullets || []),
    ]
      .join(' ')
      .toLowerCase()

    return searchableText.includes(search.toLowerCase())
  })

  return (
    <div className="site-shell min-h-screen text-slate-800">
      <header className="site-header">
        <div className="site-header-inner">
          <a href="#top" className="brand-link" aria-label="Shop Now 4 U home">
            <span className="brand-logo-frame">
            <img
              src={navbarLogo}
              alt="Shop Now 4 U"
              className="brand-logo"
            />
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <a className="nav-link" href="#top">
              Home
            </a>
            <a
              className="nav-link active"
              href="#policy-content"
              aria-current="page"
            >
              Privacy Policy
            </a>
            <a
              className="nav-link"
              href="#contact-information"
            >
              Contact
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
            <span>{menuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>

        {menuOpen && (
          <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
            <a onClick={() => setMenuOpen(false)} className="mobile-nav-link" href="#top">
              Home
            </a>
            <a
              onClick={() => setMenuOpen(false)}
              className="mobile-nav-link active"
              href="#policy-content"
              aria-current="page"
            >
              Privacy Policy
            </a>
            <a
              onClick={() => setMenuOpen(false)}
              className="mobile-nav-link"
              href="#contact-information"
            >
              Contact
            </a>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-card">
              <div className="hero-content">
                <div className="breadcrumb">
                <a href="#top">
                  Home
                </a>
                <span aria-hidden="true">/</span>
                <span aria-current="page">Privacy Policy</span>
              </div>

              <p className="hero-eyebrow">
                SHOP NOW 4 U <span aria-hidden="true">·</span> PRIVACY &amp; DATA PROTECTION
              </p>

              <h1 className="hero-title">
                Privacy Policy
              </h1>

              <p className="hero-description">
                This policy describes how information may be handled when you
                visit or use Shop Now 4 U. Please read the sections below to
                understand the privacy practices relevant to our services.
              </p>

              <div className="hero-meta">
                <span className="meta-item">
                  <strong>
                    Organisation:
                  </strong>{' '}
                  Talentrise Technokrate Pvt. Ltd.
                </span>
                <span className="meta-divider" aria-hidden="true" />
                <span className="meta-item">
                  <strong>
                    Last updated:
                  </strong>{' '}
                  23 October 2026
                </span>
              </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="policy-content"
          className="policy-layout"
        >
          <aside className="policy-aside">
            <h2 className="aside-title">
              In this policy
            </h2>
            <p className="aside-description">
              Browse the topics covered in this document.
            </p>

            <div className="aside-divider" />

            <nav className="contents-nav" aria-label="Policy sections">
              {policySections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="contents-link"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="policy-main">
            <div className="search-panel">
              <label
                htmlFor="policy-search"
                className="search-label"
              >
                Search this policy
              </label>
              <input
                id="policy-search"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search a topic, for example data security..."
                className="search-input"
              />
              <p className="search-count" aria-live="polite">
                Showing {visibleSections.length} of {policySections.length}{' '}
                sections
              </p>
            </div>

            <div className="policy-cards">
              {visibleSections.map((section) => (
                <article
                  key={section.id}
                  id={section.id}
                  className="policy-card"
                >
                  <h2 className="policy-card-title">
                    {section.title}
                  </h2>

                  <div className="policy-content">
                    {section.paragraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}

                    {section.bullets && (
                      <ul className="policy-list">
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}

                    {section.contact && (
                      <div className="contact-details">
                        <p className="contact-company">
                          Talentrise Technokrate Pvt. Ltd.
                        </p>
                        <p>Nagpur, Maharashtra, India</p>
                        <p>
                          Email:{' '}
                          <a
                            className="contact-link"
                            href="mailto:info@shopnow4u"
                          >
                            info@shopnow4u
                          </a>
                        </p>
                        <p>
                          Support:{' '}
                          <a
                            className="contact-link"
                            href="mailto:support@shopnow4u"
                          >
                            support@shopnow4u
                          </a>
                        </p>
                        <p>Phone: 98232 08362</p>
                      </div>
                    )}
                  </div>
                </article>
              ))}

              {visibleSections.length === 0 && (
                <div className="empty-state">
                  <h2>
                    No matching sections
                  </h2>
                  <p>
                    Try another search term.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSearch('')}
                    className="brand-button"
                  >
                    Clear search
                  </button>
                </div>
              )}
            </div>

            <div className="contact-callout">
              <h2>
                Questions about this policy?
              </h2>
              <p>
                Contact Talentrise Technokrate Pvt. Ltd. using the verified
                contact information supplied by the company.
              </p>
              <a
                href="mailto:info@shopnow4u"
                className="brand-button"
              >
                Contact the team
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <div className="footer-brand">
            <span className="brand-logo-frame footer-logo-frame">
              <img src={shopNowLogo} alt="Shop Now 4 U" className="brand-logo" />
            </span>
            <p className="footer-company">
              Talentrise Technokrate Pvt. Ltd.
            </p>
          </div>

          <div className="footer-meta">
            <a href="#policy-content">Privacy Policy</a>
            <p>
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
