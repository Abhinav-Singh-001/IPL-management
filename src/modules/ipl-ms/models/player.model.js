import { ref } from "joi";
import mongoose from "mongoose";

const playerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Player name is required"],
      trim: true,
      minlength: [3, "Player name must be at least 3 characters long"],
      maxlength: [50, "Player name must be less than 50 characters long"],
    },

    teamId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      required: [true, "Team ID is required"],
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Player", playerSchema);
