import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './TopVendors.css';

const brands = [
  { id: 1, name: 'Marlboro', logo: 'https://www.vectorlogo.zone/logos/marlboro/marlboro-ar21.svg' },
  { id: 2, name: 'Dunhill', logo: 'https://www.vectorlogo.zone/logos/dunhill/dunhill-ar21.svg' },
  { id: 3, name: 'Davidoff', logo: 'https://www.vectorlogo.zone/logos/davidoff/davidoff-ar21.svg' },
  { id: 4, name: 'Cohiba', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Cohiba_Logo.svg/1200px-Cohiba_Logo.svg.png' },
  { id: 5, name: 'Camel', logo: 'https://www.vectorlogo.zone/logos/camel/camel-ar21.svg' },
  { id: 6, name: 'Winston', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Winston_logo.svg/1200px-Winston_logo.svg.png' },
  { id: 7, name: 'Lucky Strike', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Lucky_Strike_logo.svg/1200px-Lucky_Strike_logo.svg.png' },
  { id: 8, name: 'Pall Mall', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pall_Mall_logo.svg/1200px-Pall_Mall_logo.svg.png' },
  { id: 9, name: 'Parliament', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Parliament_Cigarettes_Logo.svg/1200px-Parliament_Cigarettes_Logo.svg.png' },
  { id: 10, name: 'L&M', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/LM_logo.svg/1200px-LM_logo.svg.png' },
  { id: 11, name: 'Virginia Slims', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Virginia_Slims_logo.svg/1200px-Virginia_Slims_logo.svg.png' },
  { id: 12, name: 'Kent', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Kent_logo.svg/1200px-Kent_logo.svg.png' },
  { id: 13, name: 'Zyn', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ZYN_Logo.svg/1200px-ZYN_Logo.svg.png' },
  { id: 14, name: 'Velo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Velo_logo.svg/1200px-Velo_logo.svg.png' },
  { id: 15, name: 'Juul', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Juul_Logo.svg/1200px-Juul_Logo.svg.png' },
  { id: 16, name: 'Raw', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/RAW_logo.svg/1200px-RAW_logo.svg.png' },
  { id: 17, name: 'Zig-Zag', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Zig_Zag_Logo.svg/1200px-Zig_Zag_Logo.svg.png' },
  { id: 18, name: 'Swisher Sweets', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Swisher_Sweets_logo.svg/1200px-Swisher_Sweets_logo.svg.png' },
  { id: 19, name: 'Backwoods', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Backwoods_Logo.svg/1200px-Backwoods_Logo.svg.png' },
  { id: 20, name: 'Clipper', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Clipper_logo.svg/1200px-Clipper_logo.svg.png' },
  { id: 21, name: 'Bic', logo: 'https://www.vectorlogo.zone/logos/bic/bic-ar21.svg' },
  { id: 22, name: 'Coca-Cola', logo: 'https://www.vectorlogo.zone/logos/cocacola/cocacola-ar21.svg' },
  { id: 23, name: 'Pepsi', logo: 'https://www.vectorlogo.zone/logos/pepsi/pepsi-ar21.svg' },
  { id: 24, name: 'Red Bull', logo: 'https://www.vectorlogo.zone/logos/redbull/redbull-ar21.svg' },
  { id: 25, name: 'Monster', logo: 'https://www.vectorlogo.zone/logos/monsterenergy/monsterenergy-ar21.svg' },
  { id: 26, name: 'Frito-Lay', logo: 'https://www.vectorlogo.zone/logos/fritolay/fritolay-ar21.svg' },
  { id: 27, name: 'Mars', logo: 'https://www.vectorlogo.zone/logos/mars/mars-ar21.svg' },
  { id: 28, name: 'Hershey', logo: 'https://www.vectorlogo.zone/logos/hersheys/hersheys-ar21.svg' },
  { id: 29, name: 'Storz & Bickel', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Storz_and_Bickel_Logo.svg/1200px-Storz_and_Bickel_Logo.svg.png' },
  { id: 30, name: 'Santa Cruz Shredder', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0&s' },
];

const TopVendors = () => {
  return (
    <section className="top-vendors" id="vendors">
      <div className="container relative-container">
        <h2 className="section-title">Tampa’s Trusted Wholesale Distribution Partner</h2>
        
        <div className="swiper-wrapper-relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 5 },
              1024: { slidesPerView: 6 },
            }}
            className="vendors-swiper"
          >
            {brands.map((brand) => (
              <SwiperSlide key={brand.id}>
                <div className="vendor-item logo-only">
                  <div className="vendor-avatar">
                    <img src={brand.logo} alt={brand.name} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="custom-prev" aria-label="Previous slide">
            <ChevronLeft size={24} />
          </button>
          <button className="custom-next" aria-label="Next slide">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopVendors;
