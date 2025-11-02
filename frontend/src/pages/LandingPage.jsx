import React from "react";
import {images} from "../assets";
import Button from "../components/common/CustomButton";
import CustomButton from "../components/common/CustomButton";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-black flex flex-row py-4 px-8">
        <div className='flex flex-1'>
          <img src={images.logo} alt="" className='h-12'/>
        </div>
        <div className='text-white flex flex-1 items-center justify-center'>
          <span className="px-6">Product</span>
          <span className="px-6">Company</span>
          <span className="px-6">Features</span>
          <span className="px-6">Marketplace</span>
        </div>
        <div className='text-white flex flex-1 items-center justify-end'>
          <CustomButton text="Sign In" variant="unfilled" className="mr-4" icon={images.rightArrow}/>
        </div>
      </header>
      <main className="flex-1 flex-col items-center justify-center bg-black flex px-4 pb-12">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 text-center">
            <span>Welcome to Idea</span>
            <span className="text-blue-400">Bridge</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 text-center max-w-4xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid fuga minima fugiat dolores beatae non quaerat vel dicta ducimus ex.
          </p>
          <div className="flex justify-center">
            <Button text="Get Started" variant="filled" className="font-semibold"/>
            <Button text="Learn More" variant="unfilled" className="ml-4" icon={images.rightArrow}/>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;