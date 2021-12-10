import { inject, injectable } from "tsyringe";

import { Student } from "../../entities/Student";
import { IStudentsRepository } from "../../repositories/IStudentsRepository";

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
