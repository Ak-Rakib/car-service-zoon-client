import React from "react";
import image1 from "../../../assets/images/banner/1.jpg";
import image2 from "../../../assets/images/banner/2.jpg";
import image3 from "../../../assets/images/banner/3.jpg";
import image4 from "../../../assets/images/banner/4.jpg";


const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={image1}
            className="w-full rounded h-[600px]"
          />
          <div className="absolute md:top-1/2 top-1/3 space-y-5 pl-10">
            <h1 className="text-3xl text-white font-bold">Affordable Price For Car Servicing</h1>
            <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="space-x-4">
            <button className="btn btn-warning">
                Discover more
            </button>
            <button className="btn btn-outline btn-warning">
                Latest Project
            </button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-3">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={image2}
            className="w-full rounded h-[600px]"
          />
          <div className="absolute md:top-1/2 top-1/3 space-y-5 pl-10">
            <h1 className="text-3xl text-white font-bold">Affordable Price For Car Servicing</h1>
            <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="space-x-4">
            <button className="btn btn-warning">
                Discover more
            </button>
            <button className="btn btn-outline btn-warning">
                Latest Project
            </button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-3">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={image3}
            className="w-full rounded h-[600px]"
          />
          <div className="absolute md:top-1/2 top-1/3 space-y-5 pl-10">
            <h1 className="text-3xl text-white font-bold">Affordable Price For Car Servicing</h1>
            <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="space-x-4">
            <button className="btn btn-warning">
                Discover more
            </button>
            <button className="btn btn-outline btn-warning">
                Latest Project
            </button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-3">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={image4}
            className="w-full rounded h-[600px]"
          />
          <div className="absolute md:top-1/2 top-1/3 space-y-5 pl-10">
            <h1 className="text-3xl text-white font-bold">Affordable Price For Car Servicing</h1>
            <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="space-x-4">
            <button className="btn btn-warning">
                Discover more
            </button>
            <button className="btn btn-outline btn-warning">
                Latest Project
            </button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-3">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
