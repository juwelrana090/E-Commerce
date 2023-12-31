import React from "react";
import { baseUrl } from '@/config/appConfig';
import Link from "next/link";

const Offers = () => {
    return (
        <div className="container">
            <div className="row grid grid-cols-2 gap-6">
                {/* Col 1 */}
                <div className="col bg-green-400/20 flex justify-between items-center px-10 group">
                    {/* Inner Col 1 */}
                    <div className="space-y-5 basis-1/2">
                        <div>
                            <h3 className="font-bold text-4xl text-accentTwo">30% off</h3>
                            <h2 className="text-primary font-bold text-xl">Free Shipping</h2>
                            <p className="text-paragraph text-lg">Attractive Natural Jackets</p>
                        </div>
                        <div>
                            <span
                                className="text-white rounded-md px-6 py-2 font-medium bg-accentTwo hover:bg-accentOne"
                            >
                                <Link href={`${baseUrl}/shop`}>Shop Now</Link>
                            </span>
                        </div>
                    </div>
                    {/* Inner Col 2 */}
                    <div className="basis-1/2 group-hover:scale-105 transition duration-800 ">
                        <img src={`${baseUrl}/img/collection/jacket-1.jpg`} alt="" className="h-full w-full p-2" />
                    </div>
                </div>
                {/* Col 2 */}
                <div className="col bg-blue-600/20 flex justify-between items-center px-10 group">
                    {/* Inner Col 1 */}
                    <div className="space-y-5 basis-1/2">
                        <div>
                            <h3 className="font-bold text-4xl text-accentTwo">50% off</h3>
                            <h2 className="text-primary font-bold text-xl">Flash Sale</h2>
                            <p className="text-paragraph text-lg">Attractive Natural Pants</p>
                        </div>
                        <div>
                            <span
                                className="text-white rounded-md px-6 py-2 font-medium bg-accentTwo hover:bg-accentOne "
                            >
                                <Link href={`${baseUrl}/shop`}>Shop Now</Link>
                            </span>
                        </div>
                    </div>
                    {/* Inner Col 2 */}
                    <div className="basis-1/2 group-hover:scale-105 transition duration-800 ">
                        <img src={`${baseUrl}/img/collection/pant-1.jpg`} alt="" className="h-full w-full p-2"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Offers;