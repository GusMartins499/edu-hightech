import { Router } from "express";

import { AuthenticateStudentController } from "../modules/students/useCases/authenticateStudent/AuthenticateStudentController";
import { CreateStudentController } from "../modules/students/useCases/createStudent/CreateStudentController";
import { ListAllStudentsController } from "../modules/students/useCases/listAllStudents/ListAllStudentsController";

const studentsRoutes = Router();
const createStudentController = new CreateStudentController();
const listAllStudentsController = new ListAllStudentsController();
const authenticateStudentController = new AuthenticateStudentController();

studentsRoutes.post("/", createStudentController.handle);
studentsRoutes.get("/", listAllStudentsController.handle);
studentsRoutes.post("/auth", authenticateStudentController.handle);

export { studentsRoutes };
