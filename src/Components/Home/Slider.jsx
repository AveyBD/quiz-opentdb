import React from "react";
import slide1 from "../../Assets/Slider/Fantastic.png";
import side1 from "../../Assets/Slider/side1.png";
import side2 from "../../Assets/Slider/side2.png";
const Slider = () => {
  return (
    <div className="md:flex mt-2 gap-1 max-w-full">
      <div>
        <img src={slide1} alt="Quiz Home" />
      </div>
      <div className="md:flex flex-col gap-1 hidden">
        <div>
          <img src={side1} alt="Side" />
        </div>
        <div>
          <img src={side2} alt="Side" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
