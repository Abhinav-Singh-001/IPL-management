import { Router } from "express";
import * as playerController from "../controllers/player.controller.js";

const router = Router();

router.post("/", playerController.addPlayer);
router.get("/", playerController.getAllPlayers);
router.get("/:id", playerController.getPlayerById);
router.put("/:id", playerController.updatePlayer);
router.delete("/:id", playerController.deletePlayer);

export default router;
