import Apierror from "../../../common/utils/api-error.js";
import Player from "../models/player.model.js";

const addPlayer = async ({ name, teamId }) => {
  const player = await Player.create({ name, teamId });
  return player;
};

const getAllPlayers = async () => {
  const players = await Player.find();
  return players;
};

const getPlayerById = async (id) => {
  const player = await Player.findById(id);
  if (!player) {
    throw new Apierror(404, "Player not found");
  }
  return player;
};

const updatePlayer = async (id, { name, teamId }) => {
  const player = await Player.findByIdAndUpdate(
    id,
    { name, teamId },
    { new: true },
  );
  if (!player) {
    throw new Apierror(404, "Player not found");
  }
  return player;
};

const deletePlayer = async (id) => {
  const player = await Player.findByIdAndDelete(id);
  if (!player) {
    throw new Apierror(404, "Player not found");
  }
  return player;
};

export { addPlayer, getAllPlayers, getPlayerById, updatePlayer, deletePlayer };
