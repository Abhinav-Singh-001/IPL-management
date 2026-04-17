import Apierror from "../../../utils/apierror.util.js";
import { Sponsor } from "../models/sponsor.model.js";

const createSponsor = async ({ name }) => {
  const sponsor = await Sponsor.create({ name });
  return sponsor;
};

const getSponsors = async () => {
  const sponsors = await Sponsor.findAll();
  return sponsors;
};

const getSponsorById = async (id) => {
  const sponsor = await Sponsor.findById(id);
  if (!sponsor) {
    throw new Apierror(404, "Sponsor not found");
  }
  return sponsor;
};

const updateSponsor = async (id, { name }) => {
  const sponsor = await Sponsor.findbyIdandUpdate(id, { name }, { new: true });
  if (!sponsor) {
    throw new Apierror(404, "Sponsor not found");
  }
  return sponsor;
};

const deleteSponsor = async (id) => {
  const sponsor = await Sponsor.findByIdandDelete(id);
  if (!sponsor) {
    throw new Apierror(404, "Sponsor not found");
  }
  return sponsor;
};

export {
  createSponsor,
  getSponsors,
  getSponsorById,
  updateSponsor,
  deleteSponsor,
};
