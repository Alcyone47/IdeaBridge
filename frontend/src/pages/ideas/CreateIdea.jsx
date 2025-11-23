import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/common/CustomButton";
import CustomHeader from "../../components/common/CustomHeader";
import { images } from "../../assets";
import api from "../../api/axios";

const CreateIdea = () => {
  const [logo, setLogo] = useState(null);
  const [pitchDeck, setPitchDeck] = useState(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    website: "",
    tagline: "",
    description: "",
    stage: "Idea",
    fundingStatus: "Seeking",
    fundingGoal: "",
    teamSize: 1,
    foundedYear: new Date().getFullYear(),
    location: "",
    logo: null,
    pitchDeck: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const token = localStorage.getItem("token");
      if (logo) data.append("logo", logo);
      if (pitchDeck) data.append("pitchDeck", pitchDeck);
      /* const res = await axios.post(
        "http://localhost:5000/api/ideas/create",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      ); */

      const res = await api.post(
        "/api/ideas/create",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          }
        }
      )

      setSuccess("Idea created successfully!");
      console.log("Created:", res.data);
      setTimeout(() => navigate("/dashboard/entrepreneur"), 1000);
    } catch (err) {
      console.error("Error submitting idea:", err);
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <CustomHeader />

      <main className="flex-1 flex flex-col items-center px-6 py-10">
        <div className="w-full max-w-3xl">
          <div className="flex justify-between mb-10">
            {["Details", "Uploads", "Confirm"].map((label, index) => (
              <div key={label} className="flex flex-col items-center w-1/3">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold ${
                    step === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-800 text-gray-400"
                  }`}
                >
                  {index + 1}
                </div>
                <p
                  className={`mt-2 text-sm ${
                    step === index + 1 ? "text-blue-400" : "text-gray-500"
                  }`}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
          
          {step === 1 && (
            <form className="bg-black border border-gray-700 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Startup {" "}
                <span className="text-blue-400">
                  Details
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Website</label>
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://example.com"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Tagline</label>
                  <input
                    type="text"
                    name="tagline"
                    value={formData.tagline}
                    onChange={handleChange}
                    placeholder="One-line description"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Stage *</label>
                  <select
                    name="stage"
                    value={formData.stage}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="Idea">Idea</option>
                    <option value="MVP">MVP</option>
                    <option value="Growth">Growth</option>
                    <option value="Scaling">Scaling</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">
                    Funding Goal ($)
                  </label>
                  <input
                    type="number"
                    name="fundingGoal"
                    value={formData.fundingGoal}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">
                    Team Size
                  </label>
                  <input
                    type="number"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-gray-400 mb-2">Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div className="flex justify-end mt-8">
                <CustomButton text="Next" icon={images.rightArrow} className="text-white text-l hover:scale-105 mt-0" onClick={nextStep}/>
              </div>
            </form>
          )}

          {step === 2 && (
            <div className="bg-black border border-gray-700 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-400 mb-6">
                Upload Pitch Deck & Logo
              </h2>

              <div className="mb-6">
                <label className="block text-gray-400 mb-2">Logo</label>
                <input
                  type="file"
                  name="logo"
                  onChange={handleFileChange}
                  accept="image/*"
                  className="w-full text-gray-300"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-400 mb-2">Pitch Deck</label>
                <input
                  type="file"
                  name="pitchDeck"
                  onChange={handleFileChange}
                  accept=".pdf,.ppt,.pptx"
                  className="w-full text-gray-300"
                />
              </div>

              <div className="flex justify-between mt-8">
                <CustomButton text="Back" icon={images.leftArrow} className="text-white text-l hover:scale-105 mt-0" onClick={prevStep} iconPosition="left"/>
                <CustomButton text="Next" icon={images.rightArrow} className="text-white text-l hover:scale-105 mt-0" onClick={nextStep}/>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="bg-black border border-gray-700 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-400 mb-6">
                Confirm Details
              </h2>
              <p className="text-gray-300 mb-6">
                Please review your details before submitting.
              </p>

              <div className="text-gray-300 space-y-2 mb-8">
                <p>
                  <strong className="text-blue-400">Name:</strong> {formData.name}
                </p>
                <p>
                  <strong className="text-blue-400">Tagline:</strong>{" "}
                  {formData.tagline}
                </p>
                <p>
                  <strong className="text-blue-400">Stage:</strong>{" "}
                  {formData.stage}
                </p>
                <p>
                  <strong className="text-blue-400">Funding Goal:</strong> $
                  {formData.fundingGoal || 0}
                </p>
              </div>

              {error && <p className="text-red-500 mb-4">{error}</p>}
              {success && <p className="text-green-500 mb-4">{success}</p>}

              <div className="flex justify-between mt-8">
                <CustomButton text="Back" icon={images.leftArrow} className="text-white text-l hover:scale-105 mt-0" onClick={prevStep} iconPosition="left"/>
                <CustomButton text={loading ? "Submitting..." : "Submit"} disabled={loading} className="text-white text-l hover:scale-105" onClick={handleSubmit} icon={images.checkIcon}/>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CreateIdea;