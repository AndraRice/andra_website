import React from "react";

// ─────────────────────────────────────────────────────────────────────────────
//  App.js – React conversion of the provided index.html template
//  ---------------------------------------------------------------------------
//  • External CSS (Bootstrap, icons, theme) should be referenced from
//    public/index.html or imported here if you copy them into src/.
//  • Third‑party JS (jQuery, Magnific‑Popup, etc.) should be installed via
//    npm (or added as <script> in public/index.html) and initialised from a
//    useEffect hook if you still need them.  All original IDs / classes and
//    data‑bs‑* attributes have been preserved so the template JS continues to
//    work once those libraries are loaded.
//  • The markup below is a direct JSX translation of the <body> of your
//    original file.  Attribute changes:
//       •  class   → className
//       •  for     → htmlFor (inside <label>)
//       •  self‑closed imgs / inputs
//  ---------------------------------------------------------------------------
//  Feel free to break this monster component into smaller ones once you have
//  everything rendering.
// ─────────────────────────────────────────────────────────────────────────────

function App() {
  return (
    <>
      {/* ────────────────────────── Pre‑loader ─────────────────────────── */}
      <section className="preloader">
        <div className="spinner">
          <span className="spinner-rotate" />
        </div>
      </section>

      {/* ───────────────────────────── Navbar ───────────────────────────── */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <a href="index.html" className="navbar-brand mx-auto mx-lg-0">
            Andra Rice
          </a>

          {/* <div className="d-flex align-items-center d-lg-none">
            <i className="navbar-icon bi-telephone-plus me-3" />
            <a className="custom-btn btn" href="#section_5">
              120-240-9600
            </a>
          </div> */}

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-lg-5">
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_1">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_2">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_3">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_4">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_5">
                  Contact
                </a>
              </li>
            </ul>

            {/* <div className="d-lg-flex align-items-center d-none ms-auto">
              <i className="navbar-icon bi-telephone-plus me-3" />
              <a className="custom-btn btn" href="#section_5">
                120-240-9600
              </a>
            </div> */}
          </div>
        </div>
      </nav>

      {/* ───────────────────────────── Main ─────────────────────────────── */}
      <main>
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section
          className="hero d-flex justify-content-center align-items-center"
          id="section_1"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-12">
                <div className="hero-text">
                  <div className="hero-title-wrap d-flex align-items-center mb-4">
                    <img
                      src="images/happy-bearded-young-man.jpg"
                      className="avatar-image avatar-image-large img-fluid"
                      alt="happy bearded young man"
                    />
                    <h1 className="hero-title ms-3 mb-0">Hello there!</h1>
                  </div>

                  <h2 className="mb-4">I’m available for freelance work.</h2>
                  <p className="mb-4">
                    <a className="custom-btn btn custom-link" href="#section_2">
                      Let's begin
                    </a>
                  </p>
                </div>
              </div>

              <div className="col-lg-5 col-12 position-relative">
                <div className="hero-image-wrap" />
                <img
                  src="images/portrait-happy-excited-man-holding-laptop-computer.png"
                  className="hero-image img-fluid"
                  alt="excited man with laptop"
                />
              </div>
            </div>
          </div>

          {/* Decorative SVG wave */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#535da1"
              fillOpacity="1"
              d="M0,160L24,160C48,160,96,160,144,138.7C192,117,240,75,288,64C336,53,384,75,432,106.7C480,139,528,181,576,208C624,235,672,245,720,240C768,235,816,213,864,186.7C912,160,960,128,1008,133.3C1056,139,1104,181,1152,202.7C1200,224,1248,224,1296,197.3C1344,171,1392,117,1416,90.7L1440,64L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
            />
          </svg>
        </section>

        {/* ── About ────────────────────────────────────────────────────── */}
        <section className="about section-padding" id="section_2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <img
                  src="images/couple-working-from-home-together-sofa.jpg"
                  className="about-image img-fluid"
                  alt="couple working from home"
                />
              </div>

              <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                <div className="about-thumb">
                  <div className="section-title-wrap d-flex justify-content-end align-items-center mb-4">
                    <h2 className="text-white me-4 mb-0">My Story</h2>
                    <img
                      src="images/happy-bearded-young-man.jpg"
                      className="avatar-image img-fluid"
                      alt="happy bearded young man"
                    />
                  </div>

                  <h3 className="pt-2 mb-3">a little bit about Joshua</h3>

                  <p>
                    This one-page HTML portfolio is provided by{' '}
                    <a href="https://templatemo.com" target="_blank" rel="noreferrer">
                      TemplateMo
                    </a>
                    . This layout is based on Bootstrap v5.1.3 CSS and JS libraries.
                    Image credits go to{' '}
                    <a href="https://unsplash.com" target="_blank" rel="noreferrer">
                      Unsplash
                    </a>{' '}
                    and{' '}
                    <a href="https://freepik.com" target="_blank" rel="noreferrer">
                      FreePik
                    </a>{' '}
                    for images used in this page.
                  </p>

                  <p>
                    You are allowed to use this template for your websites. You are not
                    allowed to redistribute the template ZIP file on any other website.
                    Please{' '}
                    <a href="https://templatemo.com/contact" target="_blank" rel="noreferrer">
                      contact us
                    </a>{' '}
                    for more info.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Featured Info ────────────────────────────────────────────── */}
        <section className="featured section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="profile-thumb">
                  <div className="profile-title">
                    <h4 className="mb-0">Information</h4>
                  </div>

                  <div className="profile-body">
                    <p>
                      <span className="profile-small-title">Name</span>
                      <span>Joshua Morgan</span>
                    </p>
                    <p>
                      <span className="profile-small-title">Birthday</span>
                      <span>Aug 12, 1986</span>
                    </p>
                    <p>
                      <span className="profile-small-title">Phone</span>
                      <span>
                        <a href="tel:305-240-9671">120-240-9600</a>
                      </span>
                    </p>
                    <p>
                      <span className="profile-small-title">Email</span>
                      <span>
                        <a href="mailto:hello@josh.design">hello@josh.design</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                <div className="about-thumb">
                  <div className="row">
                    <div className="col-lg-6 col-6 featured-border-bottom py-2">
                      <strong className="featured-numbers">20+</strong>
                      <p className="featured-text">Years of Experiences</p>
                    </div>
                    <div className="col-lg-6 col-6 featured-border-start featured-border-bottom ps-5 py-2">
                      <strong className="featured-numbers">245</strong>
                      <p className="featured-text">Happy Customers</p>
                    </div>
                    <div className="col-lg-6 col-6 pt-4">
                      <strong className="featured-numbers">640</strong>
                      <p className="featured-text">Project Finished</p>
                    </div>
                    <div className="col-lg-6 col-6 featured-border-start ps-5 pt-4">
                      <strong className="featured-numbers">72+</strong>
                      <p className="featured-text">Digital Awards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Clients ──────────────────────────────────────────────────── */}
        <section className="clients section-padding">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-12">
                <h3 className="text-center mb-5">Companies I've had worked</h3>
              </div>

              {[
                'cachet.svg',
                'guitar-center.svg',
                'tokico.svg',
                'shopify.svg',
                'profil-rejser.svg',
              ].map((logo, idx) => (
                <div
                  key={logo}
                  className={`col-lg-2 col-4 ${idx === 0 ? 'ms-auto' : ''} ${
                    idx === 4 ? 'me-auto' : ''
                  } clients-item-height`}
                >
                  <img
                    src={`images/clients/${logo}`}
                    className="clients-image img-fluid"
                    alt={logo.replace(/\.svg$/, '')}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services ─────────────────────────────────────────────────── */}
        <section className="services section-padding" id="section_3">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-12 mx-auto">
                <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                  <img
                    src="images/handshake-man-woman-after-signing-business-contract-closeup.jpg"
                    className="avatar-image img-fluid"
                    alt="handshake"
                  />
                  <h2 className="text-white ms-4 mb-0">Services</h2>
                </div>

                <div className="row pt-lg-5">
                  {/* Each service card */}
                  {[
                    { title: 'Websites', price: '$2,400', icon: 'bi-globe', copy: 'You may want to explore Too CSS for great collection of free HTML CSS templates.' },
                    { title: 'Branding', price: '$1,200', icon: 'bi-lightbulb', copy: 'You can explore more CSS templates on TemplateMo website by browsing through different tags.', up: true },
                    { title: 'Ecommerce', price: '$3,600', icon: 'bi-phone', copy: 'If you need a customized ecommerce website for your business, feel free to discuss with me.' },
                    { title: 'SEO', price: '$1,450', icon: 'bi-google', copy: 'To list your website first on any search engine, we will work together. First Portfolio is one-page CSS Template for free download.', up: true },
                  ].map(({ title, price, icon, copy, up }, i) => (
                    <div key={title} className="col-lg-6 col-12">
                      <div className={`services-thumb ${up ? 'services-thumb-up' : ''}`}>
                        <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                          <h3 className="mb-0">{title}</h3>
                          <div className="services-price-wrap ms-auto">
                            <p className="services-price-text mb-0">{price}</p>
                            <div className="services-price-overlay" />
                          </div>
                        </div>
                        <p>{copy}</p>
                        <a href="#" className="custom-btn custom-border-btn btn mt-3">
                          Discover More
                        </a>
                        <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                          <i className={`services-icon ${icon}`} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Projects ─────────────────────────────────────────────────── */}
        <section className="projects section-padding" id="section_4">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-12 ms-auto">
                <div className="section-title-wrap d-flex justify-content-center align-items-center mb-4">
                  <img
                    src="images/white-desk-work-study-aesthetics.jpg"
                    className="avatar-image img-fluid"
                    alt="white desk"
                  />
                  <h2 className="text-white ms-4 mb-0">Projects</h2>
                </div>
              </div>
              <div className="clearfix" />

              {[
                { tag: 'Branding', title: 'Zoik agency', img: 'nikhil-KO4io-eCAXA-unsplash.jpg' },
                { tag: 'Photography', title: 'The Watch', img: 'the-5th-IQYR7N67dhM-unsplash.jpg' },
                { tag: 'Website', title: 'Polo', img: 'true-agency-9Bjog5FZ-oc-unsplash.jpg' },
              ].map(({ tag, title, img }) => (
                <div key={title} className="col-lg-4 col-md-6 col-12">
                  <div className="projects-thumb">
                    <div className="projects-info">
                      <small className="projects-tag">{tag}</small>
                      <h3 className="projects-title">{title}</h3>
                    </div>
                    <a href={`images/projects/${img}`} className="popup-image">
                      <img
                        src={`images/projects/${img}`}
                        className="projects-image img-fluid"
                        alt={title}
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ──────────────────────────────────────────────────── */}
        <section className="contact section-padding" id="section_5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8 col-12">
                <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                  <img
                    src="images/aerial-view-man-using-computer-laptop-wooden-table.jpg"
                    className="avatar-image img-fluid"
                    alt="man using laptop"
                  />
                  <h2 className="text-white ms-4 mb-0">Say Hi</h2>
                </div>
              </div>
              <div className="clearfix" />

              {/* Contact info left */}
              <div className="col-lg-3 col-md-6 col-12 pe-lg-0">
                <div className="contact-info contact-info-border-start d-flex flex-column">
                  <strong className="site-footer-title d-block mb-3">Services</strong>
                  <ul className="footer-menu">
                    {['Websites', 'Branding', 'Ecommerce', 'SEO'].map((s) => (
                      <li key={s} className="footer-menu-item">
                        <a href="#" className="footer-menu-link">
                          {s}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <strong className="site-footer-title d-block mt-4 mb-3">Stay connected</strong>
                  <ul className="social-icon">
                    <li className="social-icon-item">
                      <a href="https://twitter.com/minthu" className="social-icon-link bi-twitter" />
                    </li>
                    <li className="social-icon-item">
                      <a href="#" className="social-icon-link bi-instagram" />
                    </li>
                    <li className="social-icon-item">
                      <a href="#" className="social-icon-link bi-pinterest" />
                    </li>
                    <li className="social-icon-item">
                      <a href="https://www.youtube.com/templatemo" className="social-icon-link bi-youtube" />
                    </li>
                  </ul>
                  <strong className="site-footer-title d-block mt-4 mb-3">Start a project</strong>
                  <p className="mb-0">I’m available for freelance projects</p>
                </div>
              </div>

              {/* Contact info right */}
              <div className="col-lg-3 col-md-6 col-12 ps-lg-0">
                <div className="contact-info d-flex flex-column">
                  <strong className="site-footer-title d-block mb-3">About</strong>
                  <p className="mb-2">
                    Joshua is a professional web developer. Feel free to get in
                    touch with me.
                  </p>
                  <strong className="site-footer-title d-block mt-4 mb-3">Email</strong>
                  <p>
                    <a href="mailto:hello@josh.design">hello@josh.design</a>
                  </p>
                  <strong className="site-footer-title d-block mt-4 mb-3">Call</strong>
                  <p className="mb-0">
                    <a href="tel:120-240-9600">120-240-9600</a>
                  </p>
                </div>
              </div>

              {/* Contact form */}
              <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                <form action="#" method="get" className="custom-form contact-form" role="form">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-floating">
                        <input type="text" name="name" id="name" className="form-control" placeholder="Name" required />
                        <label htmlFor="name">Name</label>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          className="form-control"
                          placeholder="Email address"
                          required
                        />
                        <label htmlFor="email">Email address</label>
                      </div>
                    </div>

                    {[
                      { name: 'website', icon: 'bi-globe', label: 'Websites' },
                      { name: 'branding', icon: 'bi-lightbulb', label: 'Branding' },
                      { name: 'ecommerce', icon: 'bi-phone', label: 'Ecommerce' },
                      { name: 'seo', icon: 'bi-google', label: 'SEO' },
                    ].map(({ name, icon, label }, i) => (
                      <div key={name} className="col-lg-3 col-md-6 col-6">
                        <div className={`form-check form-check-inline${i === 3 ? ' me-0' : ''}`}>
                          <input name={name} type="checkbox" className="form-check-input" id={`inlineCheckbox${i + 1}`} value="1" />
                          <label className="form-check-label" htmlFor={`inlineCheckbox${i + 1}`}>
                            <i className={`bi ${icon} form-check-icon`} />
                            <span className="form-check-label-text">{label}</span>
                          </label>
                        </div>
                      </div>
                    ))}

                    <div className="col-lg-12 col-12">
                      <div className="form-floating">
                        <textarea className="form-control" id="message" name="message" placeholder="Tell me about the project" />
                        <label htmlFor="message">Tell me about the project</label>
                      </div>
                    </div>
                    <div className="col-lg-3 col-12 ms-auto">
                      <button type="submit" className="form-control">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ───────────────────────────── Footer ───────────────────────────── */}
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="copyright-text-wrap">
                <p className="mb-0">
                  <span className="copyright-text">
                    Copyright © 2036 <a href="#">First Portfolio</a> Company. All
                    rights reserved.
                  </span>
                  Design:
                  <a
                    rel="sponsored"
                    href="https://templatemo.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TemplateMo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ────────────────────── External JS (optional) ─────────────────── */}
      {/*
        Replace the original script tags with npm packages or CDN links loaded in
        public/index.html. For example:
          • npm i jquery bootstrap @popperjs/core
          • import "bootstrap/dist/js/bootstrap.bundle.min.js" in index.js
          • Use react-magnific-popup or an alternative for Magnific Popup
      */}
    </>
  );
}

export default App;
