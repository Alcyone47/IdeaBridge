import React from "react";
import {images} from "../assets";
import Button from "../components/common/CustomButton";
import CustomButton from "../components/common/CustomButton";
import { useNavigate } from "react-router-dom";
import CustomHeader from "../components/common/CustomHeader";

const LandingPage = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col">
      <CustomHeader/>
      <main className="flex-1 flex-col items-center justify-center bg-black flex px-4 pb-12">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 text-center">
            <span>Welcome to Idea</span>
            <span className="text-blue-400">Bridge</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 text-center max-w-4xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid fuga minima fugiat dolores beatae non quaerat vel dicta ducimus ex.
          </p>
          <div className="flex justify-center">
            {!user ? (
              <>
              <Button onClick={() => navigate('/signup')} text="Get Started" variant="filled" className="font-semibold"/>
              <Button text="Learn More" variant="unfilled" className="ml-4" icon={images.rightArrow}/>
              </>
            ) :
            <Button text="Learn More" variant="unfilled" className="ml-4" icon={images.rightArrow}/>
            }
        </div>
      </main>
    </div>
  );
};

export default LandingPage;