import { inject, injectable } from "tsyringe";

import { Teacher } from "../../entities/Teacher";
import { ITeachersRepository } from "../../repositories/ITeachersRepository";

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
