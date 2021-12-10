import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../erros/AppError";
import { ICreateStudentDTO } from "../../dtos/ICreateStudentDTO";
import { IStudentsRepository } from "../../repositories/IStudentsRepository";

@injectable()
class CreateStudentUseCase {
  constructor(
    @inject("StudentsRepository")
    private studentsRepository: IStudentsRepository
  ) {}

  async execute({
    name,
    email,
    password,
    bio,
    isDeficiency,
    typeDeficiency,
  }: ICreateStudentDTO): Promise<void> {
    const student = await this.studentsRepository.findByEmail(email);

    if (student) {
      throw new AppError("Student already exists");
    }

    if (isDeficiency) {
      if (
        typeDeficiency !== "visual" &&
        typeDeficiency !== "mobility" &&
        typeDeficiency !== "hearing" &&
        typeDeficiency !== "another"
      ) {
        throw new AppError("Incorrect typeDeficiency");
      }
    } else if (typeDeficiency !== null) {
      throw new AppError("Incorrect data");
    }

    const passwordHash = await hash(password, 8);

    await this.studentsRepository.create({
      name,
      email,
      password: passwordHash,
      bio,
      isDeficiency,
      typeDeficiency,
    });
  }
}

export { CreateStudentUseCase };
