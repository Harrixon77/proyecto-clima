import {Router} from "express";
import { climaController } from "./clima.controller.js";
import { createClimaSchema } from "./clima.schema.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { authMiddleware} from "../../middlewares/auth.middleware.js";

const router = Router();
const ClimaController = new climaController();


router.post('/registerclima',authMiddleware,validate(createClimaSchema),  ClimaController.addClima);
router.get('/',authMiddleware, ClimaController.findallUserId);

console.log("--- Rutas de clima cargadas correctamente ---");

export default router;
