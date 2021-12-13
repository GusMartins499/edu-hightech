import { inject, injectable } from "tsyringe";

import { ITeachersRepository } from "@modules/teachers/repositories/ITeachersRepository";

import { Teacher } from "../../entities/Teacher";

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
