import React, { useEffect } from "react";
import AwsLogo from "../assets/AWS_logo_RGB_WHT.png";
import AOS from "aos";
import "aos/dist/aos.css";
// import AwsAnimation from "../Animations/awsAnimation";

const Herosection = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false,
    });
  }, []);
  return (
    <div className="flex  HeroSectionParent  flex-col p-2  space-y-7">
      <div className="w-full flex justify-center mt-2" data-aos="fade-right">
        {/* animation */}
        {/* <div id="AnimationDiv" className="mb-3">
          <AwsAnimation />
        </div> */}

        <img src={AwsLogo} className="w-20"></img>
      </div>

      {/* text */}
      <div className="flex flex-col justify-center  items-center space-y-7">
        <h3
          className="text-4xl  textshadow  font-bold  text-white  tracking-wide delay-300"
          data-aos="fade-down"
        >
          {" "}
          STUDENT
        </h3>

        <h1
          className="text-6xl  textshadow  font-bold  text-white tracking-wide delay-500"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
        >
          {/* Welcome To AWS  */}
          COMMUNITY DAY
          {/*  Indore  */}
        </h1>
        <h3
          className="text-2xl  font-bold  text-white textshadow tracking-wide delay-700"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
        >
          {" "}
          Organized by AWS Cloud Clubs
        </h3>
        <p
          className="text-3xl  font-bold  text-white textshadow tracking-wide"
          data-aos-delay="900"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
        >
          {" "}
          27th September 2024, DAVV Auditorium  Indore
        </p>
      </div>

      {/* register button  */}
      <div
        className="flex justify-center items-center "
        data-aos="fade-up"
        data-aos-delay="1200"
        data-aos-easing="ease-out-cubic"
      >
        <button className="button mt-4 mb-9 ">
          Register Now
          <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
            <path
              clip-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Herosection;
