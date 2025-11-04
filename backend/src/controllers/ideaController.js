import Idea from '../models/ideaModel.js';

export const getMyIdeas = async (req, res) => {
  try {
    const ideas = await Idea.find({ owner: req.user._id });
    res.json(ideas);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const createIdea = async(req, res) => {

  try {
    const{
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
      logo,
      pitchDeck
    } = req.body;   

    const founderID = req.user._id;

    const idea = new Idea ({
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
      logo,
      pitchDeck 
    })
    await idea.save();
    res.status(201).json({message : "Successful"})
  }
  catch (err) {
    res.status(500).json({message : "Server error", error : err.message});
  }
}