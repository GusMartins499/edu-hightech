import { Router } from "express";

import { classesRoutes } from "./classes.routes";
import { studentsRoutes } from "./students.routes";
import { teachersRoutes } from "./teachers.routes";

const routes = Router();

routes.use("/teacher", teachersRoutes);
routes.use("/student", studentsRoutes);
routes.use("/classes", classesRoutes);

export { routes };
