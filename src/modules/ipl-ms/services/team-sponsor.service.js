import Apierror from "../../../utils/apierror.util.js";
import { teamSponsor } from "../models/team-sponsor.model.js";

const createTeamSponsor = async ({ teamId, sponsorId }) => {
  const teamSponsor = await teamSponsor.create({ teamId, sponsorId });
  return teamSponsor;
};

const getTeamSponsors = async (teamId) => {
  const teamSponsors = await teamSponsor.findAll({ where: { teamId } });
  return teamSponsors;
};

const getTeamSponsorById = async (id) => {
  const teamSponsor = await teamSponsor.findByPk(id);
  if (!teamSponsor) throw new Apierror("Team Sponsor not found", 404);
  return teamSponsor;
};

const deleteTeamSponsor = async (id) => {
  const teamSponsor = await teamSponsor.findByPk(id);
  if (!teamSponsor) throw new Apierror("Team Sponsor not found", 404);
  await teamSponsor.destroy();
  return;
};

export {
  createTeamSponsor,
  getTeamSponsors,
  getTeamSponsorById,
  deleteTeamSponsor,
};
