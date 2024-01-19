import { Router } from "express";
import UsuarioController from './controllers/UsuarioController.js';
import FasesConcluidasController from "./controllers/FasesConcluidasController.js";
import AvaliacaoController from "./controllers/AvaliacaoController.js";

const router = Router();

router.post('/usuarios/single', UsuarioController.createSingle);
router.post('/usuarios/multiplo', UsuarioController.createMulti);
router.get('/usuarios/:id', UsuarioController.findById);
router.get('/usuarios', UsuarioController.findAll);
router.put('/usuarios/:id', UsuarioController.updateById);
router.delete('/usuarios/:id', UsuarioController.deleteById);
router.post("/fases_concluidas", FasesConcluidasController.create);
router.get("/fases_concluidas", FasesConcluidasController.findAll);
router.get("/fases_concluidas/:id", FasesConcluidasController.findById);
router.put("/fases_concluidas/:id", FasesConcluidasController.updateById);
router.delete("/fases_concluidas/:id", FasesConcluidasController.deleteById);
router.post("/avaliacao", AvaliacaoController.create);
router.get("/avaliacao", AvaliacaoController.findAll);
router.get("/avaliacao/:id", AvaliacaoController.findById);
router.put("/avaliacao/:id", AvaliacaoController.updateById);
router.delete("/avaliacao/:id", AvaliacaoController.deleteById);


export default router;