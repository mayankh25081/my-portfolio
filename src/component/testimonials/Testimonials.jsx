import React from "react";
import "./testimonials.css";
import spotify from "../../assets/logo1.jpg";
import textUtils from "../../assets/logo2.jpg";
import education from "../../assets/logo3.jpg";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const data = [
  {
    logo: spotify,
    name: "Ecommerce Web-app (Full Stack)",
    tech_stack: "Tech stack used - ReactJs, NodeJs, ExpressJs, MongoDB, Bootstrap,css.",
    details: [
      "An e-commerce website with both seller and customer interfaces (Everyone can create and update profile)",
      "A section is provided in the seller’s dashboard by which products can be uploaded dynamically",
      "A user can Search for products and used filters for desired product or category.",
      "Used MongoDB for Database and Authentication. User Information is stored in the Database",
      "Payment integration is also done to checkout after completing the order in the cart."
      
    ],
    visit: "https://mayankh25081.github.io/spotiFy_clone/",
    Github: "https://github.com/mayankh25081/spotiFy_clone",
  },
  {
    logo: textUtils,
    name: "Text-Utils (Frontend)",
    tech_stack: "Tech stack used - ReactJs, Bootstrap, JavaScript.",
    details: [
      "A responsive website using ReactJs in which you can perform many operations on your text like",
      "you can check pronunciation of any word or sentence.",
      "you can check grammatically mistakes in your text.",
      "you can also count the word and letters in any paragraph.",
      "you can change theme dark or light according to you.",
      "you can convert your text in uppercase or lowercase."
      

    ],
    visit: "https://mayankh25081.github.io/textUtils/",
    Github: "https://github.com/mayankh25081/textUtils",
  },
  {
    logo: education,
    name: "Path Visualizer (Algorithms)",
    tech_stack: "Tech stack used - ReactJs, CSS, JavaScript.",
    details: [
      "A Data Structure and algorithm based project where a user can visualize the path in a matrix.",
      "User can Select starting and targeting node and can find the path between them.",
      "Algorithms used - Dijkstra’s Algorithm, Breath first search, Depth first search.",
      "A User can Select any algorithm to find the path between 2 nodes.",
      "A user can always add walls to prevent the path between 2 nodes."
      ],
    visit: "https://mayankh25081.github.io/education_clone/",
    Github: "https://github.com/mayankh25081/education_clone",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>My Projects</h2>

      <Swiper
        className="container project__container"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation={{ clickable: true }}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map(({ logo, name, tech_stack, details, visit, Github }, index) => {
          return (
            <SwiperSlide key={index} className="project">
              {/* <div className="project__logo">
                  <img src={logo} />
                </div> */}
              <h4 className="project__name">{name}</h4>
              <h6 style={{color: "#4db5ff"}}>{tech_stack}</h6>
              {details.map(({}, i) => {
                return (
                  <small className="project__details">-  {details[i]}
                  </small>
                );
              })}
              <a href={Github} className="btn btn-primary" target="_blank">
                GitHub
              </a>
              <a href={visit} className="btn btn-primary" target="_blank">
                Visit Site
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
