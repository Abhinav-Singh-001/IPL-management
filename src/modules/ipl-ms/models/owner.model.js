import { required } from "joi";
import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Owner name is required"],
    trim: true,
    minlength: 2,
    maxlength: 50,
  },
  company: {
    type: String,
    required: [true, "Company name is required"],
    trim: true,
    minlength: 2,
    maxlength: 100,
  },
});

export default mongoose.model("Owner", ownerSchema);
