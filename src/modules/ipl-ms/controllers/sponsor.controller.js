import Apiresponse from "../../../common/utils/api-response.js";
import * as sponsorSchema from "../services/player.service.js";

const createSponsor = async (req, res) => {
  const sponsor = await sponsorSchema.createSponsor(req.body);
  return Apiresponse.created(res, "Sponsor added successfully", sponsor);
};

const getAllSponsors = async (req, res) => {
  const sponsors = await sponsorSchema.getAllSponsors();
  return Apiresponse.ok(res, "Sponsors retrieved successfully", sponsors);
};

const getSponsorById = async (req, res) => {
  const sponsor = await sponsorSchema.getSponsorById(req.params.id);
  if (!sponsor) {
    return Apiresponse.notFound(res, "Sponsor not found");
  }
  return Apiresponse.ok(res, "Sponsor retrieved successfully", sponsor);
};

const updateSponsor = async (req, res) => {
  const sponsor = await sponsorSchema.updateSponsor(req.params.id, req.body);
  return Apiresponse.ok(res, "Sponsor updated successfully", sponsor);
};

const deleteSponsor = async (req, res) => {
  await sponsorSchema.deleteSponsor(req.params.id);
  return Apiresponse.ok(res, "Sponsor deleted successfully");
};

export {
  createSponsor,
  getAllSponsors,
  getSponsorById,
  updateSponsor,
  deleteSponsor,
};
