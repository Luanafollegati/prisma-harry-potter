import { Router } from "express";
import * as BruxoController from "./../controllers/bruxoControler.js";

const router = Router();

//Rota GetAll em /
router.get("/", BruxoController.listarTodos);

//Rota GetById
router.get("/:id", BruxoController.listarUm);

//Rota create
router.post("/", BruxoController.criar);

//Rota delete
router.delete("/:id", BruxoController.apagar);

//Rota update
router.put("/:id", BruxoController.atualizar);

export default Router;
