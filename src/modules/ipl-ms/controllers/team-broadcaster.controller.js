import Apiresponse from "../../../common/utils/api-response.js";
import teamBroadcasterService from "../services/team-broadcaster.service.js";

const createTeamBroadcaster = async (req, res) => {
  const createdTeamBroadcaster =
    await teamBroadcasterService.createTeamBroadcaster(req.body);
  return Apiresponse.created(
    res,
    "Team Broadcaster added successfully",
    ocreatedTeamBroadcaster,
  );
};

const getAllTeamBroadcasters = async (req, res) => {
  const TeamBroadcasters =
    await teamBroadcasterService.getAllTeamBroadcasters();
  return Apiresponse.ok(
    res,
    "Team Broadcasters retrieved successfully",
    TeamBroadcasters,
  );
};

const getTeamBroadcasterById = async (req, res) => {
  const TeamBroadcaster = await teamBroadcasterService.getTeamBroadcasterById(
    req.params.id,
  );
  if (!TeamBroadcaster) {
    return Apiresponse.notFound(res, "Team Broadcaster not found");
  }
  return Apiresponse.ok(
    res,
    "Team Broadcaster retrieved successfully",
    TeamBroadcaster,
  );
};

const updateTeamBroadcaster = async (req, res) => {
  const updatedTeamBroadcaster =
    await teamBroadcasterService.updateTeamBroadcaster(req.params.id, req.body);
  return Apiresponse.ok(
    res,
    "Team Broadcaster updated successfully",
    updatedTeamBroadcaster,
  );
};

const deleteTeamBroadcaster = async (req, res) => {
  await teamBroadcasterService.deleteTeamBroadcaster(req.params.id);
  return Apiresponse.ok(res, "Team Broadcaster deleted successfully");
};

export {
  createTeamBroadcaster,
  getAllTeamBroadcasters,
  getTeamBroadcasterById,
  updateTeamBroadcaster,
  deleteTeamBroadcaster,
};
