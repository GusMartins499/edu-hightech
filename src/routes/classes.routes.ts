import { Router } from "express";

import { CreateClasseController } from "@modules/classes/useCases/createClass/CreateClasseController";
import { ListAllClassesController } from "@modules/classes/useCases/listAllClasses/ListAllClassesController";

const classesRoutes = Router();

const createClassesController = new CreateClasseController();
const listAllClassesController = new ListAllClassesController();

classesRoutes.post("/", createClassesController.handle);
classesRoutes.get("/", listAllClassesController.handle);

export { classesRoutes };
