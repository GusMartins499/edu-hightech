import { ICreateTeacherDTO } from "@modules/teachers/dtos/ICreateTeacherDTO";
import { Teacher } from "@modules/teachers/entities/Teacher";

import { ITeachersRepository } from "../ITeachersRepository";

class TeachersRepositoryInMemory implements ITeachersRepository {
  teachers: Teacher[] = [];

  async create({
    name,
    email,
    password,
    bio,
    techs,
  }: ICreateTeacherDTO): Promise<void> {
    const teacher = new Teacher();
    Object.assign(teacher, { name, email, password, bio, techs });

    this.teachers.push(teacher);
  }

  async findByEmail(email: string): Promise<Teacher> {
    const teacher = this.teachers.find((teacher) => teacher.email === email);

    return teacher;
  }

  async listAll(): Promise<Teacher[]> {
    return this.teachers;
  }
}

export { TeachersRepositoryInMemory };
