import { Router } from "express";
import * as teamBroadcasterController from "../controllers/team-broadcaster.controller.js";

const router = Router();

router.post("/", teamBroadcasterController.addTeamBroadcaster);
router.get("/", teamBroadcasterController.getAllTeamBroadcasters);
router.get("/:id", teamBroadcasterController.getTeamBroadcasterById);
router.put("/:id", teamBroadcasterController.updateTeamBroadcaster);
router.delete("/:id", teamBroadcasterController.deleteTeamBroadcaster);

export default router;
