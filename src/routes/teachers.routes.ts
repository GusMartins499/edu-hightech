import { Router } from "express";

import { CreateTeacherController } from "../modules/teachers/useCases/createTeacher/CreateTeacherController";
import { ListAllTeachersController } from "../modules/teachers/useCases/listAllTeachers/ListAllTeachersController";

const teachersRoutes = Router();
const createTeacherController = new CreateTeacherController();
const listAllTeachersController = new ListAllTeachersController();

teachersRoutes.post("/", createTeacherController.handle);
teachersRoutes.get("/", listAllTeachersController.handle);

export { teachersRoutes };
