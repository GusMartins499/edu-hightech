import { container } from "tsyringe";

import { StudentsRepository } from "../../modules/students/repositories/implementations/StudentsRepository";
import { IStudentsRepository } from "../../modules/students/repositories/IStudentsRepository";
import { TeacherRepository } from "../../modules/teachers/repositories/implementations/TeachersRepository";
import { ITeachersRepository } from "../../modules/teachers/repositories/ITeachersRepository";

container.registerSingleton<ITeachersRepository>(
  "TeachersRepository",
  TeacherRepository
);

container.registerSingleton<IStudentsRepository>(
  "StudentsRepository",
  StudentsRepository
);
