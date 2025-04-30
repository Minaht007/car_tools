import React from "react";

const autoMark = () => {
  return (
    <div className="bg-mainBG overflow-hidden border-y border-black py-4">
      <div className="marquee">
        <div className="marquee-content">
          <ul className="flex space-x-8 items-center">
            <li className="lg:text-mediumDesk px-4 text-thin">Honda Prelude 3gen</li>
            <li className="lg:text-mediumDesk px-4 text-thin">Nissan 180SX</li>
            <li className="lg:text-mediumDesk px-4 text-thin">Nissan Fairlady</li>
            <li className="lg:text-mediumDesk px-4 text-thin">Mazda Miata</li>
            <li className="lg:text-mediumDesk px-4 text-thin">Datsun</li>
            <li className="lg:text-mediumDesk px-4 text-thin">Mitsubishi</li>
          </ul>
          <ul className="flex space-x-8 items-center" aria-hidden="true">
            <li className="lg:text-mediumDesk px-4 text-thin">Honda Prelude 3gen</li>
            <li className="lg:text-mediumDesk px-4 text-thin">Nissan 180SX</li>
            <li className="lg:text-mediumDesk px-4 text-thin">Nissan Fairlady</li>
            <li className="lg:text-mediumDesk px-4 text-thin">Mazda Miata</li>
            <li className="lg:text-mediumDesk px-4 text-thin">Datsun</li>
            <li className="lg:text-mediumDesk px-4 text-thin">Mitsubishi</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default autoMark;
