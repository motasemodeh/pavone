import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Award, ShieldCheck, Zap, MapPin } from 'lucide-react';
import logoImg from '../assets/pavone-logo.png';
import './AboutPage.css';

const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="about-page">
      {/* Dynamic Hero */}
      <section className="about-hero-v2">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="about-hero-glass"
          >
            <span className="hero-tag">Tampa's Finest</span>
            <h1>Our Story & Mission</h1>
            <p>Your Trusted Wholesale Partner in Tampa — Dedicated to Retail Excellence.</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Split - Improved Spacing */}
      <section className="about-split-section section-padding">
        <div className="container">
          <div className="about-split-grid">
            <motion.div {...fadeInUp} className="about-split-image">
              <div className="logo-backdrop">
                <img src={logoImg} alt="Pavone Logo" className="floating-logo" />
              </div>
            </motion.div>
            
            <motion.div {...fadeInUp} className="about-split-text">
              <span className="accent-text">Who We Are</span>
              <h2>Supporting Your Success</h2>
              <p>
                At Pavone Distribution, we are dedicated to helping retailers succeed by providing high-quality wholesale products, competitive pricing, and reliable service. Based in Tampa, Florida, we proudly supply smoke shops, gas stations, convenience stores, and retail businesses with the products their customers demand most.
              </p>
              <div className="about-features-inline">
                <div className="inline-feature">
                  <Target className="inline-icon" size={24} />
                  <div className="inline-text">
                    <h4>Our Mission</h4>
                    <p>Provide retailers with the products and support they need to grow with confidence.</p>
                  </div>
                </div>
                <div className="inline-feature">
                  <Award className="inline-icon" size={24} />
                  <div className="inline-text">
                    <h4>Our Vision</h4>
                    <p>To be the premier wholesale partner for retail success across the Southeast.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section section-padding">
        <div className="container">
          <div className="philosophy-card">
            <motion.div {...fadeInUp} className="philosophy-content text-center">
              <h2>More Than Just Distribution</h2>
              <div className="philosophy-divider"></div>
              <p>
                We believe distribution is more than moving products — it’s about building relationships and supporting the growth of our clients. Our team focuses on dependable service, fast communication, and helping businesses find the right products at the right time.
              </p>
              <div className="philosophy-stats">
                <div className="p-stat">
                  <span>500+</span>
                  <label>Partners</label>
                </div>
                <div className="p-stat">
                  <span>1k+</span>
                  <label>SKUs</label>
                </div>
                <div className="p-stat">
                  <span>24/7</span>
                  <label>Support</label>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Grid - Centered Header */}
      <section className="about-values section-padding">
        <div className="container">
          <div className="section-header-centered mb-60">
            <h2 className="section-title">Why Retailers Choose Us</h2>
            <p className="section-subtitle-top">Built by retailers, for retailers.</p>
          </div>
          
          <div className="values-grid">
            <motion.div {...fadeInUp} className="value-item-card">
              <Zap className="v-icon" size={32} />
              <h3>Reliable Inventory</h3>
              <p>We keep high-demand inventory available and ready for distribution at a moment's notice.</p>
            </motion.div>
            <motion.div {...fadeInUp} className="value-item-card">
              <ShieldCheck className="v-icon" size={32} />
              <h3>Quality Assurance</h3>
              <p>Every product we carry is vetted for quality and authenticity, ensuring your customers are always satisfied.</p>
            </motion.div>
            <motion.div {...fadeInUp} className="value-item-card map-value-card">
              <MapPin className="v-icon" size={32} />
              <div className="card-content">
                <h3>Tampa Warehouse</h3>
                <p>Conveniently located for local pickups and fast regional distribution throughout Florida.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="about-cta section-padding">
        <div className="container text-center">
          <motion.div {...fadeInUp}>
            <img src={logoImg} alt="Pavone Logo" className="cta-logo-img" />
            <div className="motto-large">Pavone Distribution</div>
            <div className="motto-sub">Stock Smarter. Sell Faster. Grow Bigger.</div>
            <Link to="/become-a-customer" className="btn-primary-large mt-4">Become a Partner Today</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
