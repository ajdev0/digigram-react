import React from "react";
import CarouselItem from "./carouselItem";

function Carousel() {
  return (
    <div className="page-section bg-light">
      <div className="container">
        <div className="owl-carousel wow fadeInUp" id="testimonials">
          <CarouselItem
            img="/assets/img/person/person_1.jpg"
            about="Necessitatibus ipsum magni accusantium consequatur delectus a repudiandae nemo quisquam dolorum itaque, tenetur, esse optio eveniet beatae explicabo sapiente quo."
            name="Melvin Platje"
            postion="CEO Slurin Group"
          />
          <CarouselItem
            img="/assets/img/person/person_2.jpg"
            about="Necessitatibus ipsum magni accusantium consequatur delectus a repudiandae nemo quisquam dolorum itaque, tenetur, esse optio eveniet beatae explicabo sapiente quo."
            name="George Burke"
            postion="CEO Lte"
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
