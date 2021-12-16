import { inject, injectable } from "tsyringe";
import { validate } from "uuid";

import { AppError } from "@erros/AppError";
import { ICreateClassesDTO } from "@modules/classes/dtos/ICreateClassesDTO";
import { IClassesRepository } from "@modules/classes/repositories/IClassesRepository";

@injectable()
class CreateClasseUseCase {
  constructor(
    @inject("ClassesRepository")
    private classesRepository: IClassesRepository
  ) {}

  async execute({ teacher_id, student_id }: ICreateClassesDTO): Promise<void> {
    if (!validate(teacher_id)) {
      throw new AppError("Is not a valid UUID");
    }

    if (!validate(student_id)) {
      throw new AppError("Is not a valid UUID");
    }

    await this.classesRepository.create({
      teacher_id,
      student_id,
    });
  }
}

export { CreateClasseUseCase };
