import { inject, injectable } from "tsyringe";

import { Teacher } from "@modules/teachers/entities/Teacher";
import { ITeachersRepository } from "@modules/teachers/repositories/ITeachersRepository";

@injectable()
class ListAllTeachersUseCase {
  constructor(
    @inject("TeachersRepository")
    private teachersRepository: ITeachersRepository
  ) {}

  async execute(): Promise<Teacher[]> {
    const teachers = await this.teachersRepository.listAll();

    return teachers;
  }
}

export { ListAllTeachersUseCase };
