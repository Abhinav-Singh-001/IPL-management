import Apiresponse from "../../../common/utils/api-response.js";
import * as playerService from "../services/player.service.js";

const createPlayer = async (req, res) => {
  const player = await playerService.createPlayer(req.body);
  return Apiresponse.created(res, "Player added successfully", player);
};

const getAllPlayers = async (req, res) => {
  const players = await playerService.getAllPlayers();
  return Apiresponse.ok(res, "Players retrieved successfully", players);
};

const getPlayerById = async (req, res) => {
  const player = await playerService.getPlayerById(req.params.id);
  if (!player) {
    return Apiresponse.notFound(res, "Player not found");
  }
  return Apiresponse.ok(res, "Player retrieved successfully", player);
};

const updatePlayer = async (req, res) => {
  const player = await playerService.updatePlayer(req.params.id, req.body);
  return Apiresponse.ok(res, "Player updated successfully", player);
};

const deletePlayer = async (req, res) => {
  await playerService.deletePlayer(req.params.id);
  return Apiresponse.ok(res, "Player deleted successfully");
};

export {
  createPlayer,
  getAllPlayers,
  getPlayerById,
  updatePlayer,
  deletePlayer,
};
