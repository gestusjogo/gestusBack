import { Router } from "express";
import UsuarioController from './controllers/UsuarioController.js';
import FasesConcluidasController from "./controllers/FasesConcluidasController.js";
import AvaliacaoController from "./controllers/AvaliacaoController.js";

const router = Router();

router.post('/usuarios/single', UsuarioController.createSingle);
router.post('/usuarios/multiplo', UsuarioController.createMulti);
router.get('/usuarios', UsuarioController.findAll);
router.post("/fases_concluidas/inicio", FasesConcluidasController.inicio);
router.post("/fases_concluidas/atualizacao", FasesConcluidasController.atualizacao);
router.post("/avaliacao", AvaliacaoController.create);
router.get("/avaliacao", AvaliacaoController.findAll);
router.get("/avaliacao/:id", AvaliacaoController.findById);
router.put("/avaliacao/:id", AvaliacaoController.updateById);
router.delete("/avaliacao/:id", AvaliacaoController.deleteById);


export default router;