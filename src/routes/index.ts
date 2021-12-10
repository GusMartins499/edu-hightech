import { Router } from "express";

import { studentsRoutes } from "./students.routes";
import { teachersRoutes } from "./teachers.routes";

const routes = Router();

routes.use("/teacher", teachersRoutes);
routes.use("/student", studentsRoutes);

export { routes };
