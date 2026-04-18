import Apiresponse from "../../../common/utils/api-response.js";
import * as teamService from "../services/player.service.js";

const createTeam = async (req, res) => {
  const team = await teamService.createTeam(req.body);
  return Apiresponse.created(res, "Team added successfully", team);
};

const getAllTeams = async (req, res) => {
  const teams = await teamService.getAllTeams();
  return Apiresponse.ok(res, "Teams retrieved successfully", teams);
};

const getTeamById = async (req, res) => {
  const team = await teamService.getTeamById(req.params.id);
  if (!team) {
    return Apiresponse.notFound(res, "Team not found");
  }
  return Apiresponse.ok(res, "Team retrieved successfully", team);
};

const updateTeam = async (req, res) => {
  const team = await teamService.updateTeam(req.params.id, req.body);
  return Apiresponse.ok(res, "Team updated successfully", team);
};

const deleteTeam = async (req, res) => {
  await teamService.deleteTeam(req.params.id);
  return Apiresponse.ok(res, "Team deleted successfully");
};

export { createTeam, getAllTeams, getTeamById, updateTeam, deleteTeam };
