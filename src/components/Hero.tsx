
import './Hero.css';

// Import assets
import heroImg from '../assets/hero.png';
import img1 from '../assets/WhatsApp Image 2026-04-28 at 02.31.31 (1).jpeg';
import img2 from '../assets/WhatsApp Image 2026-04-28 at 02.31.31 (2).jpeg';
import img3 from '../assets/WhatsApp Image 2026-04-28 at 02.31.31 (3).jpeg';
import img4 from '../assets/WhatsApp Image 2026-04-28 at 02.31.31.jpeg';
import img5 from '../assets/WhatsApp Image 2026-04-28 at 02.31.32 (1).jpeg';
import img6 from '../assets/WhatsApp Image 2026-04-28 at 02.31.32 (2).jpeg';

const heroItems = [
  { id: 1, title: 'Classic Blend', author: 'Premium Selection', img: img1, className: 'item-1' },
  { id: 2, title: 'Golden Leaf', author: 'Artisan Tobacco', img: img2, className: 'item-2' },
  { id: 3, title: 'Midnight Cigar', author: 'Exclusive Series', img: img3, className: 'item-3' },
  { id: 4, title: 'Royal Smoke', author: 'Vintage Collection', img: img4, className: 'item-4' },
  { id: 5, title: 'Luxury Collection 2026', author: 'Pavone Featured', img: heroImg, className: 'item-5' },
  { id: 6, title: 'Smooth Aroma', author: 'Daily Fresh', img: img5, className: 'item-6' },
  { id: 7, title: 'Elite Filter', author: 'Limited Edition', img: img6, className: 'item-7' },
];

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {heroItems.map((item) => (
            <div key={item.id} className={`hero-item ${item.className}`}>
              <img src={item.img} alt={item.title} />
              <div className="hero-item-overlay">
                <div className="hero-item-info">
                  <h3>{item.title}</h3>
                  <span>{item.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
