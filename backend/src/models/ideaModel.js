import { timeStamp } from "console";
import mongoose from "mongoose";

const ideaSchema = new mongoose.Schema(
  {
    owner: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    name: {type: String, required: true},
    website: String,
    tagline: String,
    description: {type: String, required: True},
    stage: {type: String, enum:["Idea", "MVP", "Growth", "Scaling"]},
    fundingStatus: {type: String, enum:["Seeking", "Closed"], default: "Seeking"},
    fundingGoal: {type: Number, default: 0},
    fundingRaised: {type: Number, default: 0},
    teamSize: {type: Number, default: 1},
    foundedYear: Number,
    location: String,
    pitchDeckUrl: String,
  },
  {timestamps: true}
);

const Idea = mongoose.model("Idea", ideaSchema);
export default Idea;