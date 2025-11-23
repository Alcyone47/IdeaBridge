import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomHeader from "../../components/common/CustomHeader";
import IdeaDeckCard from "../../components/common/IdeaDeckCard";
import { useNavigate } from "react-router-dom";
import { images } from "../../assets";
import api from "../../api/axios";

const EntrepreneurDashboard = () => {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await api.get("api/ideas/myideas", {
          headers: { Authorization: `Bearer ${token}`}
        })
        /* const res = await axios.get("http://localhost:5000/api/ideas/myideas", {
          headers: { Authorization: `Bearer ${token}` },
        }); */
        setIdeas(res.data);
      } catch (err) {
        console.error("Error fetching ideas:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchIdeas();
  }, []);

  const handleView = (id) => navigate(`/dashboard/entrepreneur/idea/${id}`);
  const handleEdit = (id) => navigate(`/dashboard/entrepreneur/edit/${id}`);
  const handleNewIdea = () => navigate("/dashboard/entrepreneur/create");

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <CustomHeader />
      <main className="flex-1 flex flex-col px-12 py-6">
        <div className="text-4xl font-bold mb-8">
          <span className="text-white">Welcome </span>
          <span className="text-blue-400">{user?.name}</span>
        </div>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">My Ideas</h2>
        </div>

        {loading ? (
          <p className="text-gray-400 text-center mt-12">Loading your ideas...</p>
        ) : ideas.length === 0 ? (
          <div className="flex-1 flex flex-col justify-start">
            <p className="mb-6 text-gray-300">You haven't added any ideas yet</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 flex-1">
              <button
                onClick={handleNewIdea}
                className="bg-black border border-gray-600 text-white rounded-2xl shadow-md p-8 flex flex-col items-center justify-center 
                           hover:border-blue-400 hover:shadow-blue-500/30 hover:scale-101 transition-all duration-300 cursor-pointer h-full pt-4"
              >
                <div className="w-24 h-24 mb-4 flex items-center justify-center rounded-full bg-gray-950 border border-gray-700">
                  <img
                    src={images.addIcon}
                    alt="Add Startup"
                    className="w-10 h-10 opacity-70 group-hover:opacity-100 transition"
                  />
                </div>

                <h2 className="text-xl font-semibold text-blue-400 mb-1">
                  Add New Startup
                </h2>
                <p className="text-gray-400 text-sm">
                  Click to create and add your first idea
                </p>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col justify-start mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 flex-1">
              {ideas.map((idea) => (
                <IdeaDeckCard
                  key={idea._id}
                  idea={idea}
                  onView={handleView}
                  onEdit={handleEdit}
                />
              ))}

              <button
                onClick={handleNewIdea}
                className="bg-black border border-gray-600 text-white rounded-2xl shadow-md p-8 flex flex-col items-center justify-center 
                           hover:border-blue-400 hover:shadow-blue-500/30 hover:scale-101 transition-all duration-300 cursor-pointer h-full pt-4"
              >
                <div className="w-24 h-24 mb-4 flex items-center justify-center rounded-full bg-gray-950 border border-gray-700">
                  <img
                    src={images.addIcon}
                    alt="Add Startup"
                    className="w-10 h-10 opacity-70 group-hover:opacity-100 transition"
                  />
                </div>

                <h2 className="text-xl font-semibold text-blue-400 mb-1">
                  Add New Startup
                </h2>
                <p className="text-gray-400 text-sm">
                  Click to create and add a new idea
                </p>
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default EntrepreneurDashboard;