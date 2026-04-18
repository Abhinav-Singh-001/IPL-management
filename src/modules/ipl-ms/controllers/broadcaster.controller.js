import Apiresponse from "../../../common/utils/api-response.js";
import * as broadcasterService from "../services/broadcaster.service.js";

const addBroadcaster = async (req, res) => {
  const boradcaster = await broadcasterService.addBroadcaster(req.body);
  Apiresponse.created(res, "Broadcaster added successfully", broadcaster);
};

const getAllBroadcasters = async (req, res) => {
  const broadcasters = await broadcasterService.getAllBroadcasters();
  Apiresponse.ok(res, "Broadcasters retrieved successfully", broadcasters);
};

const getBroadcasterById = async (req, res) => {
  const broadcaster = await broadcasterService.getBroadcasterById(
    req.params.id,
  );
  if (!broadcaster) {
    return Apiresponse.notFound(res, "Broadcaster not found");
  }
  Apiresponse.ok(res, "Broadcaster retrieved successfully", broadcaster);
};

const updateBroadcaster = async (req, res) => {
  const broadcaster = await broadcasterService.updateBroadcaster(
    req.params.id,
    req.body,
  );
  Apiresponse.ok(res, "Broadcaster updated successfully", broadcaster);
};

const deleteBroadcaster = async (req, res) => {
  await broadcasterService.deleteBroadcaster(req.params.id);
  Apiresponse.ok(res, "Broadcaster deleted successfully");
};

export {
  addBroadcaster,
  getAllBroadcasters,
  getBroadcasterById,
  updateBroadcaster,
  deleteBroadcaster,
};
