import Apiresponse from "../../../utils/ApiResponse.js";
import * as ownerService from "../services/owner.service.js";

const addOwner = async (req, res) => {
  const owner = await ownerService.addOwner(req.body);
  Apiresponse.created(res, "Owner added successfully", owner);
};

const getAllOwners = async (req, res) => {
  const owners = await ownerService.getAllOwners();
  Apiresponse.ok(res, "Owners retrieved successfully", owners);
};

const getOwnerById = async (req, res) => {
  const owner = await ownerService.getOwnerById(req.params.id);
  if (!owner) {
    return Apiresponse.notFound(res, "Owner not found");
  }
  Apiresponse.ok(res, "Owner retrieved successfully", owner);
};

const updateOwner = async (req, res) => {
  const owner = await ownerService.updateOwner(req.params.id, req.body);
  Apiresponse.ok(res, "Owner updated successfully", owner);
};

const deleteOwner = async (req, res) => {
  await ownerService.deleteOwner(req.params.id);
  Apiresponse.ok(res, "Owner deleted successfully");
};

export { addOwner, getAllOwners, getOwnerById, updateOwner, deleteOwner };
