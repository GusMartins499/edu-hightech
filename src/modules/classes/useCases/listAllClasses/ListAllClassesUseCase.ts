import { inject, injectable } from "tsyringe";

import { Classes } from "@modules/classes/entities/Classes";
import { IClassesRepository } from "@modules/classes/repositories/IClassesRepository";

@injectable()
class ListAllClassesUseCase {
  constructor(
    @inject("ClassesRepository")
    private classesRepository: IClassesRepository
  ) {}

  async execute(): Promise<Classes[]> {
    const classes = await this.classesRepository.listAll();

    return classes;
  }
}

export { ListAllClassesUseCase };
