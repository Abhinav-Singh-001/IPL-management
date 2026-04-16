import { Router } from "express";
import * as ownerController from "../controllers/owner.controller.js";

const router = Router();

router.post("/", ownerController.addOwner);
router.get("/", ownerController.getAllOwners);
router.get("/:id", ownerController.getOwnerById);
router.put("/:id", ownerController.updateOwner);
router.delete("/:id", ownerController.deleteOwner);

export default router;
