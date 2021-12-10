import { Router } from "express";

import { CreateStudentController } from "../modules/students/useCases/createStudent/CreateStudentController";
import { ListAllStudentsController } from "../modules/students/useCases/listAllStudents/ListAllStudentsController";

const studentsRoutes = Router();
const createStudentController = new CreateStudentController();
const listAllStudentsController = new ListAllStudentsController();

studentsRoutes.post("/", createStudentController.handle);
studentsRoutes.get("/", listAllStudentsController.handle);

export { studentsRoutes };
