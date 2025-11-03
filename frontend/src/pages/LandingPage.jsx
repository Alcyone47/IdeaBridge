import React from "react";
import {images} from "../assets";
import Button from "../components/common/CustomButton";
import CustomButton from "../components/common/CustomButton";
import { useNavigate } from "react-router-dom";


const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-black flex flex-row py-4 px-8">
        <div className='flex flex-1 items-center'>
          <img src={images.logo} alt="" className='h-8 w-auto pl-2'/>
        </div>
        <div className='text-white flex flex-1 items-center justify-center'>
          <CustomButton text="Product" variant="unfilled"/>
          <CustomButton text="Company" variant="unfilled"/>
          <CustomButton text="Features" variant="unfilled"/>
          <CustomButton text="Marketplace" variant="unfilled"/>
        </div>
        <div className='text-white flex flex-1 items-center justify-end'>
          <CustomButton onClick={() => navigate('/login')} text="Sign In" variant="unfilled" className="" icon={images.rightArrow}/>
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
            <Button onClick={() => navigate('/signup')} text="Get Started" variant="filled" className="font-semibold"/>
            <Button text="Learn More" variant="unfilled" className="ml-4" icon={images.rightArrow}/>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;