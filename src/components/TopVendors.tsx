import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import './TopVendors.css';

// Local logo imports
import grabbaLeaf from '../assets/logo/Grabba-Leaf-Logo.webp';
import lmLogo from '../assets/logo/L&m_cigarettes_logo.png';
import marlboroLogo from '../assets/logo/Marlboro_Logo.svg';
import nasLogo from '../assets/logo/NASlogo.png';
import newportLogo from '../assets/logo/Newport_cigarettes_logo.png';
import recursoDDV from '../assets/logo/Recurso_2DDV.webp';
import offStamp from '../assets/logo/off-stamp.jpg';
import universalShield from '../assets/logo/universal-shield.webp';
import brandImg1 from '../assets/logo/1 (7).jpg';
import zzBoris from '../assets/logo/ZZ-Boris-w-frame-bw.jpg';
import duccysLogo from '../assets/logo/788444_a8de85da68974fe3b059bd851e1f386d_mv2_2400x.webp';
import blackGoldLogo from '../assets/logo/Black_Logo_with_Gold_c18d76ed-1f22-4ec6-a553-28dde6cb49f1.webp';
import recurso2Logo from '../assets/logo/Recurso_2.webp';

const brands = [
  { id: 1, name: 'Marlboro', logo: marlboroLogo },
  { id: 2, name: 'Newport', logo: newportLogo },
  { id: 3, name: 'L&M', logo: lmLogo },
  { id: 4, name: 'Grabba Leaf', logo: grabbaLeaf },
  { id: 5, name: 'NAS', logo: nasLogo },
  { id: 6, name: 'Recurso DDV', logo: recursoDDV },
  { id: 7, name: 'Off Stamp', logo: offStamp },
  { id: 8, name: 'Universal Shield', logo: universalShield },
  { id: 9, name: 'Brand', logo: brandImg1 },
  { id: 10, name: 'ZZ Boris', logo: zzBoris },
  { id: 11, name: "Duccy's", logo: duccysLogo },
  { id: 12, name: 'Black Gold', logo: blackGoldLogo },
  { id: 13, name: 'Recurso 2', logo: recurso2Logo },
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
