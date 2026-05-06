import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import './HotCollections.css';

// Import assets
import c1 from '../assets/WhatsApp Image 2026-04-28 at 02.31.31.jpeg';
import c2 from '../assets/WhatsApp Image 2026-04-28 at 02.31.32 (1).jpeg';
import c3 from '../assets/WhatsApp Image 2026-04-28 at 02.31.32 (2).jpeg';
import c4 from '../assets/WhatsApp Image 2026-04-28 at 02.31.32 (3).jpeg';

const collections = [
  { id: 1, name: 'Premium Cigars', count: '192 items', img: c1, avatar: 'https://i.pravatar.cc/50?u=1' },
  { id: 2, name: 'Rare Tobacco', count: '61 items', img: c2, avatar: 'https://i.pravatar.cc/50?u=2' },
  { id: 3, name: 'Vintage Packs', count: '126 items', img: c3, avatar: 'https://i.pravatar.cc/50?u=3' },
  { id: 4, name: 'Limited Series', count: '73 items', img: c4, avatar: 'https://i.pravatar.cc/50?u=4' },
];

const HotCollections = () => {
  return (
    <section className="hot-collections" id="collections">
      <div className="container">
        <h2 className="section-title">Hot Collections</h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="collections-swiper"
        >
          {collections.map(col => (
            <SwiperSlide key={col.id}>
              <div className="collection-card">
                <div className="collection-image">
                  <img src={col.img} alt={col.name} />
                  <div className="collection-avatar">
                    <img src={col.avatar} alt={col.name} />
                    <div className="verify-badge">✓</div>
                  </div>
                </div>
                <div className="collection-info">
                  <h4>{col.name}</h4>
                  <span>{col.count}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HotCollections;
