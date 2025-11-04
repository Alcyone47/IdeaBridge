import Idea from '../models/ideaModel.js';

export const getMyIdeas = async (req, res) => {
  try {
    const ideas = await Idea.find({ owner: req.user._id });
    res.json(ideas);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const createIdea = async (req, res) => {
  try {
    console.log("Incoming idea data:", req.body);

    const {
      name,
      website,
      tagline,
      description,
      stage,
      fundingStatus,
      fundingGoal,
      fundingRaised,
      teamSize,
      foundedYear,
      location,
    } = req.body;

    if (!name || !description || !stage) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const founderID = req.user?._id;
    if (!founderID) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    const idea = new Idea({
      owner: founderID,
      name,
      website,
      tagline,
      description,
      stage,
      fundingStatus,
      fundingGoal,
      fundingRaised,
      teamSize,
      foundedYear,
      location,
      logo: "",
      pitchDeck: "",
    });

    await idea.save();
    console.log("Idea created successfully:", idea);

    res.status(201).json({ message: "Idea created successfully", idea });
  } catch (err) {
    console.error("Error creating idea:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
