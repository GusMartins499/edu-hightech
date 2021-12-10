import { getRepository, Repository } from "typeorm";

import { ICreateTeacherDTO } from "../../dtos/ICreateTeacherDTO";
import { Teacher } from "../../entities/Teacher";
import { ITeachersRepository } from "../ITeachersRepository";

class TeacherRepository implements ITeachersRepository {
  private repository: Repository<Teacher>;

  constructor() {
    this.repository = getRepository(Teacher);
  }

  async listAll(): Promise<Teacher[]> {
    const teachers = this.repository.find({
      select: ["id", "name", "email", "bio", "techs"],
    });

    return teachers;
  }

  async findByEmail(email: string): Promise<Teacher> {
    const teacher = this.repository.findOne({
      where: { email },
    });

    return teacher;
  }

  async create({
    name,
    email,
    password,
    bio,
    techs,
  }: ICreateTeacherDTO): Promise<void> {
    const teacher = this.repository.create({
      name,
      email,
      password,
      bio,
      techs,
    });

    await this.repository.save(teacher);
  }
}

export { TeacherRepository };
