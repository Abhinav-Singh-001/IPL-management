import mongoose from "mongoose";

const broadcasterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Broadcaster name is required"],
      unique: true,
      trim: true,
      maxlength: [100, "Broadcaster name should be less than 100 characters"],
    },
  },
  { timestamps: true },
);

export default mongoose.model("Broadcaster", broadcasterSchema);
