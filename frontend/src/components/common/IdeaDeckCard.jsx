import React from "react";

const IdeaDeckCard = ({ idea, onView, onEdit }) => {
  const hasLogo = idea.logo && idea.logo.trim() !== "";
  return (
    <div className="bg-black border border-gray-600 text-white rounded-2xl shadow-md p-8 flex flex-col items-center 
                    hover:border-blue-400 hover:shadow-blue-500/30 hover:scale-101 transition-all duration-200">
      <div className="w-24 h-24 mb-5">
        {hasLogo ? (
          <img
            src={idea.logo}
            alt={`${idea.name} Logo`}
            className="w-full h-full object-cover rounded-full border border-gray-700"
          />
        ) : (
          <div className="w-full h-full bg-gray-950 flex items-center justify-center rounded-full border border-gray-700 text-gray-600 text-sm">
            No Logo
          </div>
        )}
      </div>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-1">{idea.name}</h2>
        <p className="text-blue-400 text-sm">{idea.tagline || "No tagline provided"}</p>
      </div>

      <div className="w-full h-px bg-gray-800 mb-5"></div>

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-300 w-full mb-6">
        <p>
          <span className="font-semibold text-blue-400">Stage:</span> {idea.stage || "Undecided"}
        </p>
        <p>
          <span className="font-semibold text-blue-400">Team:</span> {idea.teamSize || 1}
        </p>
        <p>
          <span className="font-semibold text-blue-400">Goal:</span> ${idea.fundingGoal || 0}
        </p>
        <p>
          <span className="font-semibold text-blue-400">Raised:</span> ${idea.fundingRaised || 0}
        </p>
        <p>
          <span className="font-semibold text-blue-400">Connected:</span> {idea.fundingRaised || 0}
        </p>
        <p>
          <span className="font-semibold text-blue-400">Closed:</span> {idea.fundingRaised || 0}
        </p>
      </div>

      <div className="flex justify-between w-full mt-auto">
        <button
          onClick={() => onView(idea._id)}
          className="flex-1 mr-2 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition duration-300 hover:cursor-pointer"
        >
          View
        </button>
        <button
          onClick={() => onEdit(idea._id)}
          className="flex-1 ml-2 py-2 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300 hover:cursor-pointer"
        >
          Edit
        </button> 
      </div>
    </div>
  );
};

export default IdeaDeckCard;