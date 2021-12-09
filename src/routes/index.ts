import { Router } from "express";

import { teachersRoutes } from "./teachers.routes";

const routes = Router();

routes.use("/teacher", teachersRoutes);

export { routes };
