import { getRepository, Repository } from "typeorm";

import { ICreateClassesDTO } from "@modules/classes/dtos/ICreateClassesDTO";
import { Classes } from "@modules/classes/entities/Classes";

import { IClassesRepository } from "../IClassesRepository";

class ClassesRepository implements IClassesRepository {
  private repository: Repository<Classes>;

  constructor() {
    this.repository = getRepository(Classes);
  }

  async create({ teacher_id, student_id }: ICreateClassesDTO): Promise<void> {
    const classe = this.repository.create({
      teacher_id,
      student_id,
    });

    await this.repository.save(classe);
  }

  async listAll(): Promise<Classes[]> {
    const classes = await this.repository.find({
      relations: ["teacher", "student"],
      select: ["id"],
    });
    return classes;
  }
}

export { ClassesRepository };
