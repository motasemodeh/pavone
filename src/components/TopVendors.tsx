import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './TopVendors.css';

const vendors = [
  { id: 1, name: 'Marlboro', amount: '', avatar: 'https://www.vectorlogo.zone/logos/marlboro/marlboro-ar21.svg' },
  { id: 2, name: 'Dunhill', amount: '', avatar: 'https://www.vectorlogo.zone/logos/dunhill/dunhill-ar21.svg' },
  { id: 3, name: 'Davidoff', amount: '', avatar: 'https://www.vectorlogo.zone/logos/davidoff/davidoff-ar21.svg' },
  { id: 4, name: 'Cohiba', amount: '', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Cohiba_Logo.svg/1200px-Cohiba_Logo.svg.png' },
  { id: 5, name: 'Camel', amount: '', avatar: 'https://www.vectorlogo.zone/logos/camel/camel-ar21.svg' },
  { id: 6, name: 'Winston', amount: '', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Winston_logo.svg/1200px-Winston_logo.svg.png' },
  { id: 7, name: 'Lucky Strike', amount: '', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Lucky_Strike_logo.svg/1200px-Lucky_Strike_logo.svg.png' },
  { id: 8, name: 'Pall Mall', amount: '', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pall_Mall_logo.svg/1200px-Pall_Mall_logo.svg.png' },
  { id: 9, name: 'Parliament', amount: '', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Parliament_Cigarettes_Logo.svg/1200px-Parliament_Cigarettes_Logo.svg.png' },
  { id: 10, name: 'L&M', amount: '', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/LM_logo.svg/1200px-LM_logo.svg.png' },
  { id: 11, name: 'Virginia Slims', amount: '', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Virginia_Slims_logo.svg/1200px-Virginia_Slims_logo.svg.png' },
  { id: 12, name: 'Kent', amount: '', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Kent_logo.svg/1200px-Kent_logo.svg.png' },
];

const TopVendors = () => {
  return (
    <section className="top-vendors" id="vendors">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Top Sellers in <span className="time-filter">30 days <i className="chevron-down"></i></span>
          </h2>
          <div className="section-controls">
             <select className="filter-select">
                <option>All categories</option>
             </select>
          </div>
        </div>
        
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.5}
          autoplay={{ delay: 3000 }}
          navigation
          breakpoints={{
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4 },
            1400: { slidesPerView: 6 },
          }}
          className="vendors-swiper"
        >
          {vendors.map((vendor) => (
            <SwiperSlide key={vendor.id}>
              <div className="vendor-item logo-only">
                <div className="vendor-avatar">
                  <img src={vendor.avatar} alt={vendor.name} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TopVendors;
