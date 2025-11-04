import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomHeader from "../../components/common/CustomHeader";
import IdeaDeckCard from "../../components/common/IdeaDeckCard";
import { useNavigate } from "react-router-dom";

const EntrepreneurDashboard = () => {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/ideas/myideas", {
          headers: { Authorization: `Bearer ${token}` },
        });
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
      <main className="flex-1 flex-col px-12 py-6">
        <div className="text-4xl font-bold mb-8">
          <span className="text-white">Welcome </span>
          <span className="text-blue-400">{user?.name}</span>
        </div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">My Ideas</h2>
        </div>

        {loading ? (
          <p className="text-gray-400 text-center mt-12">Loading your ideas...</p>
        ) : ideas.length === 0 ? (
          <div className="text-center mt-20">
            <p className="text-gray-400 mb-4">You haven’t added any ideas yet.</p>
            <button
              onClick={handleNewIdea}
              className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Add Your First Idea
            </button>
          </div>
        ) : (
          <div className="w-full py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {ideas.map((idea) => (
                <IdeaDeckCard
                key={idea._id}
                idea={idea}
                onView={handleView}
                onEdit={handleEdit}
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default EntrepreneurDashboard;