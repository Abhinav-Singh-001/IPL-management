import Apierror from "../../../utils/apierror.util.js";
import { Brpadcaster } from "../models/sponsor.model.js";

const createTeamBroadcaster = async ({ teamId, broadcasterId }) => {
  const teamBroadcaster = await Broadcaster.create({
    teamId,
    broadcasterId,
  });
  return teamBroadcaster;
};

const getTeamBroadcaster = async ({ teamId, broadcasterId }) => {
  const teamBroadcaster = await Sponsor.findOne({
    where: {
      teamId,
      broadcasterId,
    },
  });
  return teamBroadcaster;
};

const getTeamBroadcasterByTeamId = async ({ teamId }) => {
  const teamBroadcaster = await Sponsor.findAll({
    where: {
      teamId,
    },
  });
  return teamBroadcaster;
};

const updateTeamBroadcaster = async ({ teamId, broadcasterId }, updateData) => {
  const teamBroadcaster = await Sponsor.update(updateData, {
    where: {
      teamId,
      broadcasterId,
    },
  });
  return teamBroadcaster;
};

const deleteTeamBroadcaster = async ({ teamId, broadcasterId }) => {
  const teamBroadcaster = await Sponsor.destroy({
    where: {
      teamId,
      broadcasterId,
    },
  });
  return teamBroadcaster;
};

export {
  createTeamBroadcaster,
  getTeamBroadcaster,
  getTeamBroadcasterByTeamId,
  updateTeamBroadcaster,
  deleteTeamBroadcaster,
};
