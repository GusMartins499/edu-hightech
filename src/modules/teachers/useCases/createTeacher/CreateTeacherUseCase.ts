import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../erros/AppError";
import { ICreateTeacherDTO } from "../../dtos/ICreateTeacherDTO";
import { ITeachersRepository } from "../../repositories/ITeachersRepository";

@injectable()
class CreateTeacherUseCase {
  constructor(
    @inject("TeachersRepository")
    private teachersRepository: ITeachersRepository
  ) {}

  async execute({
    name,
    email,
    password,
    bio,
    techs,
  }: ICreateTeacherDTO): Promise<void> {
    const teacher = await this.teachersRepository.findByEmail(email);

    if (teacher) {
      throw new AppError("Teacher already exists");
    }

    const passwordHash = await hash(password, 8);

    await this.teachersRepository.create({
      name,
      email,
      password: passwordHash,
      bio,
      techs,
    });
  }
}

export { CreateTeacherUseCase };
