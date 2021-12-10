import { Router } from "express";

import { AuthenticateTeacherController } from "../modules/teachers/useCases/authenticateTeacher/AuthenticateTeacherController";
import { CreateTeacherController } from "../modules/teachers/useCases/createTeacher/CreateTeacherController";
import { ListAllTeachersController } from "../modules/teachers/useCases/listAllTeachers/ListAllTeachersController";

const teachersRoutes = Router();
const createTeacherController = new CreateTeacherController();
const listAllTeachersController = new ListAllTeachersController();
const authenticateTeacherController = new AuthenticateTeacherController();

teachersRoutes.post("/", createTeacherController.handle);
teachersRoutes.get("/", listAllTeachersController.handle);
teachersRoutes.post("/auth", authenticateTeacherController.handle);

export { teachersRoutes };
