import Apiresponse from "../../../common/utils/api-response.js";
import teamSponsorSchema from "../services/team-sponsor.service.js";

const createTeamSponsor = async (req, res) => {
  const createdTeamSponsor = await teamSponsorService.createTeamSponsor(
    req.body,
  );
  return Apiresponse.created(
    res,
    "Team Sponsor added successfully",
    createdTeamSponsor,
  );
};

const getAllTeamSponsors = async (req, res) => {
  const TeamSponsors = await teamSponsorService.getAllTeamSponsors();
  return Apiresponse.ok(
    res,
    "Team Sponsors retrieved successfully",
    TeamSponsors,
  );
};

const getTeamSponsorById = async (req, res) => {
  const TeamSponsor = await teamSponsorService.getTeamSponsorById(
    req.params.id,
  );
  if (!TeamSponsor) {
    return Apiresponse.notFound(res, "Team Sponsor       not found");
  }
  return Apiresponse.ok(
    res,
    "Team Sponsor retrieved successfully",
    TeamSponsor,
  );
};

const updateTeamSponsor = async (req, res) => {
  const updatedTeamSponsor = await teamSponsorService.updateTeamSponsor(
    req.params.id,
    req.body,
  );
  return Apiresponse.ok(
    res,
    "Team Sponsor updated successfully",
    updatedTeamSponsor,
  );
};

const deleteTeamSponsor = async (req, res) => {
  await teamSponsorService.deleteTeamSponsor(req.params.id);
  return Apiresponse.ok(res, "Team Sponsor deleted successfully");
};

export {
  createTeamSponsor,
  getAllTeamSponsors,
  getTeamSponsorById,
  updateTeamSponsor,
  deleteTeamSponsor,
};
