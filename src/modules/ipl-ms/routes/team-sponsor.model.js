import { Router } from "express";
import * as teamSponsorController from "../controllers/team-sponsor.controller.js";

const router = Router();

router.post("/", teamSponsorController.addTeamSponsor);
router.get("/", teamSponsorController.getAllTeamSponsors);
router.get("/:id", teamSponsorController.getTeamSponsorById);
router.put("/:id", teamSponsorController.updateTeamSponsor);
router.delete("/:id", teamSponsorController.deleteTeamSponsor);

export default router;
