import Apierror from "../../../utils/apierror.util.js";
import { Broadcaster } from "../models/index.js";

const createBroadcaster = async ({ name }) => {
  const broadcaster = await Broadcaster.create({ name });
  return broadcaster;
};

const getBroadcasters = async () => {
  const broadcasters = await Broadcaster.find();
  return broadcasters;
};

const getBroadcasterById = async (id) => {
  const broadcaster = await Broadcaster.findById(id);
  if (!broadcaster) {
    throw new Apierror(404, "Broadcaster not found");
  }
  return broadcaster;
};

const updateBroadcaster = async (id, { name }) => {
  const broadcaster = await Broadcaster.findByIdAndUpdate(
    id,
    { name },
    { new: true },
  );
  if (!broadcaster) {
    throw new Apierror(404, "Broadcaster not found");
  }
  return broadcaster;
};

const deleteBroadcaster = async (id) => {
  const broadcaster = await Broadcaster.findByIdAndDelete(id);
  if (!broadcaster) {
    throw new Apierror(404, "Broadcaster not found");
  }
  return broadcaster;
};

export {
  createBroadcaster,
  getBroadcasters,
  getBroadcasterById,
  updateBroadcaster,
  deleteBroadcaster,
};
