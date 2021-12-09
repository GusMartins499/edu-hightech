import { container } from "tsyringe";

import { TeacherRepository } from "../../modules/teachers/repositories/implementations/TeachersRepository";
import { ITeachersRepository } from "../../modules/teachers/repositories/ITeachersRepository";

container.registerSingleton<ITeachersRepository>(
  "TeachersRepository",
  TeacherRepository
);
