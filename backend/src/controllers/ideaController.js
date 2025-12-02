import Idea from '../models/ideaModel.js';
import supabase from "../config/supabaseClient.js";

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

    let logoUrl = "";
    let pitchDeckUrl = "";

    if (req.files?.logo) {
      const logoFile = req.files.logo[0];
      const { data, error } = await supabase.storage
        .from("logos")
        .upload(`${Date.now()}_${logoFile.originalname}`, logoFile.buffer, {
          contentType: logoFile.mimetype,
        });

      if (error) throw error;
      logoUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/logos/${data.path}`;
    }

    if (req.files?.pitchDeck) {
      const pitchFile = req.files.pitchDeck[0];
      const { data, error } = await supabase.storage
        .from("pitchdecks")
        .upload(`${Date.now()}_${pitchFile.originalname}`, pitchFile.buffer, {
          contentType: pitchFile.mimetype,
        });

      if (error) throw error;
      pitchDeckUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/pitchdecks/${data.path}`;
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
      logo: logoUrl,
      pitchDeck: pitchDeckUrl,
    });

    await idea.save();
    console.log("Idea created successfully:", idea);

    res.status(201).json({ message: "Idea created successfully", idea });
  } catch (err) {
    console.error("Error creating idea:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getAllIdeas = async (req, res) => {
  try {
    const ideas = await Idea.find({});
    res.json(ideas);
  }
  catch (error){
    res.status(500).json({ message: 'Server error' });
  }
}