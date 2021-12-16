import { ICreateClassesDTO } from "@modules/classes/dtos/ICreateClassesDTO";
import { Classes } from "@modules/classes/entities/Classes";

import { IClassesRepository } from "../IClassesRepository";

class ClassesRepositoryInMemory implements IClassesRepository {
  classes: Classes[] = [];

  async create({ teacher_id, student_id }: ICreateClassesDTO): Promise<void> {
    const classe = new Classes();
    Object.assign(classe, { teacher_id, student_id });

    this.classes.push(classe);
  }

  async listAll(): Promise<Classes[]> {
    const allClasses = this.classes;

    return allClasses;
  }
}

export { ClassesRepositoryInMemory };
