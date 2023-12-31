
import React from "react";
import { baseUrl } from "@/config/appConfig";
import Link from "next/link";


const TopSlider = () => {
  return (
    <div
      className="w-full bg-no-repeat bg-center bg-cover py-40"
      style={{ backgroundImage: `url(${baseUrl}/img/banner.jpg)` }}
    >
      <div className="container">
                <div className="row">
                    <div className="col space-y-10">
                        <h1 className="text-primary font-bold text-5xl max-w-md">
                            Best Collection for Men's Clothing
                        </h1>
                        <p className="max-w-md text-paragraph text-black text-lg">
                        A clothes shop or clothes store is any shop which sells items of ready-made clothing.
                        </p>
                        <div>
                            <span
                                className="text-white rounded-md px-6 py-2 font-medium bg-gradient-to-r from-accentOne to-primary hover:from-primary hover:to-accentOne"
                            >
                               <Link href={`${baseUrl}/shop`}>Shop Now</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
};

export default TopSlider;
