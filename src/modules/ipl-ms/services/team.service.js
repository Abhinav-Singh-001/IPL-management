import Apiresponse from "../../../common/utils/api-error.js";
import Team from "../models/team.model.js";

const addTeam = async ({ name, ownerId }) => {
  const team = await Team.create({ name, ownerId });
  return team;
};

const getAllTeams = async () => {
  const teams = await Team.find();
  return teams;
};

const getTeamById = async (id) => {
  const team = await Team.findById(id);

  if (!team) {
    throw new Apiresponse(404, "Team not found");
  }
  return team;
};

const updateTeam = async (id, { name, ownerId }) => {
  const team = await Team.findByIdAndUpdate(
    id,
    { name, ownerId },
    { new: true },
  );

  if (!team) {
    throw new Apiresponse(404, "Team not found");
  }
  return team;
};

const deleteTeam = async (id) => {
  const team = await Team.findByIdAndDelete(id);
  if (!team) {
    throw new Apiresponse(404, "Team not found");
  }
  return team;
};

export { addTeam, getAllTeams, getTeamById, updateTeam, deleteTeam };
