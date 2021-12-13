import { inject, injectable } from "tsyringe";

import { IStudentsRepository } from "@modules/students/repositories/IStudentsRepository";

import { Student } from "../../entities/Student";

@injectable()
class ListAllStudentsUseCase {
  constructor(
    @inject("StudentsRepository")
    private studentsRepository: IStudentsRepository
  ) {}

  async execute(): Promise<Student[]> {
    const students = await this.studentsRepository.listAll();

    return students;
  }
}

export { ListAllStudentsUseCase };
