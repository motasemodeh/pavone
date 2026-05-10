import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ProductGrid.css';

// Import all available warehouse/product assets
import p1 from '../assets/WhatsApp Image 2026-04-28 at 02.31.32 (3).jpeg';
import p2 from '../assets/WhatsApp Image 2026-04-28 at 02.31.32 (4).jpeg';
import p3 from '../assets/WhatsApp Image 2026-04-28 at 02.31.32 (5).jpeg';
import p4 from '../assets/WhatsApp Image 2026-04-28 at 02.31.32 (6).jpeg';
import p5 from '../assets/WhatsApp Image 2026-04-28 at 02.31.32.jpeg';
import p6 from '../assets/WhatsApp Image 2026-04-28 at 02.31.31 (1).jpeg';
import p7 from '../assets/WhatsApp Image 2026-04-28 at 02.31.31 (2).jpeg';
import p8 from '../assets/WhatsApp Image 2026-04-28 at 02.31.31 (3).jpeg';
import p9 from '../assets/WhatsApp Image 2026-04-28 at 02.31.32 (1).jpeg';
import p10 from '../assets/WhatsApp Image 2026-04-28 at 02.31.32 (2).jpeg';
import p11 from '../assets/WhatsApp Image 2026-04-28 at 02.31.31.jpeg';

const products = [
  { id: 1,  title: 'Duccy Fronto Flakes',                price: '$29.99', category: 'Tobacco',      img: p1  },
  { id: 2,  title: 'Duccy Fronto Whole Leaf',            price: '$25.99', category: 'Tobacco',      img: p2  },
  { id: 3,  title: 'Bob Marley King Size Rolling Papers', price: '$29.99', category: 'Accessories', img: p3  },
  { id: 4,  title: 'Djarum Cigars',                     price: '$44.50', category: 'Cigars',       img: p4  },
  { id: 5,  title: 'Crowns',                            price: '$40',    category: 'Tobacco',      img: p5  },
  { id: 6,  title: 'Camel Crush',                       price: '$98',    category: 'Tobacco',      img: p6  },
  { id: 7,  title: 'L&M',                               price: '$93',    category: 'Tobacco',      img: p7  },
  { id: 8,  title: 'American Spirit Non Menthol',       price: '$106',   category: 'Tobacco',      img: p8  },
  { id: 9,  title: 'American Spirit Menthol',           price: '$111',   category: 'Tobacco',      img: p9  },
  { id: 10, title: 'Newport Box',                       price: '$103',   category: 'Tobacco',      img: p10 },
  { id: 11, title: 'Marlboro Menthol',                  price: '$97',    category: 'Tobacco',      img: p11 },
  { id: 12, title: 'Marlboro',                          price: '$93',    category: 'Tobacco',      img: p1  },
];

const ProductGrid = ({ onContact }: any) => {
  return (
    <section className="product-section" id="products">
      <div className="container">
        <div className="section-header-centered" style={{ marginBottom: '50px' }}>
          <span className="section-subtitle-top">Wholesale Catalog</span>
          <h2 className="product-section-title">Our Products</h2>
        </div>

        <div className="product-slider-wrapper">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={25}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              nextEl: '.prod-next',
              prevEl: '.prod-prev',
            }}
            breakpoints={{
              480:  { slidesPerView: 2 },
              768:  { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="product-swiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="product-card">
                  <div className="product-image-wrap">
                    <img src={product.img} alt={product.title} className="product-img" />
                    <span className="product-category-badge">{product.category}</span>
                  </div>
                  <div className="product-content">
                    <h4 className="product-title">{product.title}</h4>
                    <div className="product-footer">
                      <span className="product-price">{product.price}</span>
                      <button className="contact-btn" onClick={() => onContact(product)}>
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Nav Buttons */}
          <button className="prod-prev prod-nav-btn" aria-label="Previous">
            <ChevronLeft size={22} />
          </button>
          <button className="prod-next prod-nav-btn" aria-label="Next">
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
