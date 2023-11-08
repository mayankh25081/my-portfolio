import React from "react";
import "./testimonials.css";
import spotify from "../../assets/logo1.jpg";
import textUtils from "../../assets/logo2.jpg";
import education from "../../assets/logo3.jpg";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';


const data = [
  {
    logo: spotify,
    name: 'Spotify-Clone',
    details:
      "This website is a responsive website and it is for listening songs which is built using HTML CSS and Java-Script",
      visit: 'https://mayankh25081.github.io/spotiFy_clone/',
      Github: 'https://github.com/mayankh25081/spotiFy_clone'
  },
  {
    logo: textUtils,
    name: 'Text-Utils',
    details:
      "It is a react based website, where you can convert your text into lowercase and uppercase and can also listen to the text you type and enjoy more functions.",
      visit: 'https://mayankh25081.github.io/textUtils/',
      Github: 'https://github.com/mayankh25081/textUtils'
    },
  {
    logo: education,
    name: 'Online Education-Clone',
    details:
      "It is a fully responsive website built using HTML, CSS and Java-Script. This website represents the designing thinking of the creator.",
      visit: 'https://mayankh25081.github.io/education_clone/',
      Github: 'https://github.com/mayankh25081/education_clone'
    },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>My Projects</h2>

      <Swiper className="container project__container"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation = {{ clickable: true }}
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
        {
          data.map(({logo, name, details,visit,Github},index) => {
            return (
              <SwiperSlide key={index} className="project">
                <div className="project__logo">
                  <img src={logo} />
                </div>
                <h5 className="project__name">{name}</h5>
                <small className="project__details">{details}</small>
                <a href={Github} className='btn btn-primary' target='_blank'>GitHub</a>
                <a href={visit} className='btn btn-primary' target='_blank'>Visit Site</a>
          </SwiperSlide>
            )
          })
        }
      </Swiper>
      
    </section>
  );
};

export default Testimonials;
