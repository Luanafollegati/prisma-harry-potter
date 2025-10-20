import { Router } from "express";
import * as BruxoController from './../controllers/bruxoControler.js'

const router = Router();

router.get("/", BruxoController.listarTodos);

export default Router;