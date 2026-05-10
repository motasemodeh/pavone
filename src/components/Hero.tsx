import './Hero.css';
import heroVideo from '../assets/Pavone Website.2.mp4';

const Hero = () => {
  return (
    <section className="hero-section video-hero">
      <div className="hero-video-container">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="hero-video"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content-center">
          <h1 className="hero-main-title">
            Pavone Distribution — Your One-Stop Wholesale Destination for Smoke Shops, Gas Stations, Grocery Stores & More.
          </h1>
          <div className="hero-cta-group">
            <a href="#products" className="btn-primary-large">Browse Inventory</a>
            <a href="/become-a-customer" className="btn-secondary-large">Open Wholesale Account</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
