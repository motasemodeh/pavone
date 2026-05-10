import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Users, Box, TrendingUp, HeartHandshake, MapPin } from 'lucide-react';
import './HomeContent.css';

// Importing assets
import supplyImg1 from '../assets/WhatsApp Image 2026-04-28 at 02.31.32.jpeg';
import supplyImg2 from '../assets/WhatsApp Image 2026-04-28 at 02.31.32 (1).jpeg';

const HomeContent = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="home-content-sections">
      {/* What Makes Us Different - Updated Title Style */}
      <section className="different-section section-padding" id="different">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-subtitle-top">Premium Wholesale</span>
            <div className="title-with-lines">
              <div className="side-line"></div>
              <h2 className="section-title-large">What Makes Pavone Distribution Different?</h2>
              <div className="side-line"></div>
            </div>
          </div>
          
          <div className="features-grid-premium">
            <motion.div {...fadeInUp} className="feature-card-premium">
              <div className="feature-icon-wrapper">
                <Box size={32} />
              </div>
              <h3>One-Stop Wholesale Solution</h3>
              <p>From cigars, nicotine pouches, hookah products, CBD, THC, glass, snacks, beverages, and more — we carry everything your business needs under one roof, saving you time and simplifying your ordering process.</p>
              <div className="card-bg-glow"></div>
            </motion.div>
            
            <motion.div {...fadeInUp} className="feature-card-premium">
              <div className="feature-icon-wrapper">
                <TrendingUp size={32} />
              </div>
              <h3>Trend-Driven Inventory</h3>
              <p>We stay ahead of the market by constantly bringing in trending and fast-selling products that customers are actively looking for, helping your store stay competitive and profitable.</p>
              <div className="card-bg-glow"></div>
            </motion.div>
            
            <motion.div {...fadeInUp} className="feature-card-premium">
              <div className="feature-icon-wrapper">
                <HeartHandshake size={32} />
              </div>
              <h3>Built Around Retailers</h3>
              <p>At Pavone Distribution, we focus on long-term relationships, reliable service, competitive pricing, and helping our clients grow — not just selling products.</p>
              <div className="card-bg-glow"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section - Modern Split Layout */}
      <section className="intro-section-modern section-padding">
        <div className="container">
          <div className="modern-split-grid">
            <motion.div {...fadeInUp} className="intro-visual">
              <div className="visual-circle"></div>
              <div className="visual-image-stack">
                <img src={supplyImg1} alt="Wholesale" className="img-1" />
                <img src={supplyImg2} alt="Premium" className="img-2" />
              </div>
            </motion.div>
            
            <motion.div {...fadeInUp} className="intro-content-modern">
              <h2 className="section-title">Everything Your Store Needs — All in One Place</h2>
              <p className="intro-text-premium">
                At Pavone Distribution, we supply smoke shops, gas stations, grocery stores, convenience stores, hookah lounges, and retail businesses with the products customers ask for every day. 
              </p>
              <div className="feature-bullets">
                <div className="bullet-item">
                  <ShieldCheck className="bullet-icon" size={20} />
                  <span>Premium cigars & nicotine pouches</span>
                </div>
                <div className="bullet-item">
                  <ShieldCheck className="bullet-icon" size={20} />
                  <span>Hookah supplies & glass products</span>
                </div>
                <div className="bullet-item">
                  <ShieldCheck className="bullet-icon" size={20} />
                  <span>CBD, THC products & accessories</span>
                </div>
                <div className="bullet-item">
                  <ShieldCheck className="bullet-icon" size={20} />
                  <span>Snacks, beverages & trending items</span>
                </div>
              </div>
              <p className="intro-text-small">
                Whether you’re opening a new store or growing an existing business, our goal is simple: help you stock smarter, sell faster, and maximize profits.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Special Offer Banner - High Impact */}
      <section className="special-offer-section-v2 section-padding">
        <div className="container">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="offer-banner-v2"
          >
            <div className="offer-content-v2">
              <div className="offer-badge-v2">Limited Time Offer</div>
              <h2>Get $100 OFF your first order</h2>
              <p>Whether you own a smoke shop, gas station, convenience store, or hookah lounge — we’re here to help your business grow with top products and competitive pricing.</p>
              <div className="offer-cta-wrapper">
                <a href="/become-a-customer" className="btn-glass">Apply For Wholesale Account</a>
                <span className="cta-note">* For new approved retailers only</span>
              </div>
            </div>
            <div className="banner-visual-elements">
              <div className="circle-1"></div>
              <div className="circle-2"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Retail Success - Dynamic Stats/Cards */}
      <section className="success-section section-padding">
        <div className="container">
          <div className="success-grid">
            <motion.div {...fadeInUp} className="success-info">
              <h2 className="section-title">Built for Retail Success</h2>
              <p>
                We understand the retail industry moves fast. That’s why we focus on keeping high-demand inventory available, offering flexible ordering, and helping our clients stay ahead of trends.
              </p>
              <div className="success-motto-box">
                <div className="motto-text">Pavone Distribution</div>
                <div className="motto-tag">Stock Smarter. Sell Faster. Grow Bigger.</div>
              </div>
            </motion.div>
            
            <motion.div {...fadeInUp} className="success-benefits">
              <div className="benefit-card-v2">
                <Zap className="benefit-icon" size={24} />
                <div className="benefit-text">
                  <h4>Weekly Deals</h4>
                  <p>Exclusive discounts on trending brands every single week.</p>
                </div>
              </div>
              <div className="benefit-card-v2">
                <Users className="benefit-icon" size={24} />
                <div className="benefit-text">
                  <h4>Dedicated Support</h4>
                  <p>Expert account managers to help you optimize your inventory.</p>
                </div>
              </div>
              <div className="benefit-card-v2">
                <MapPin className="benefit-icon" size={24} />
                <div className="benefit-text">
                  <h4>Tampa Location</h4>
                  <p>Convenient warehouse for fast local pickup and distribution.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
