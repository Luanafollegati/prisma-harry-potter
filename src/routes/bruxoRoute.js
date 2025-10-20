import { Router } from "express";
import * as BruxoController from './../controllers/bruxoControler.js'

const router = Router();

//Rota GetAll em /
router.get("/", BruxoController.listarTodos);

//Rota GetById
router.get("/:id", BruxoController.listarUm);

export default Router;