import { getRepository, Repository } from "typeorm";

import { Student } from "@modules/students/entities/Student";

import { ICreateStudentDTO } from "../../dtos/ICreateStudentDTO";
import { IStudentsRepository } from "../IStudentsRepository";

class StudentsRepository implements IStudentsRepository {
  private repository: Repository<Student>;

  constructor() {
    this.repository = getRepository(Student);
  }

  listAll(): Promise<Student[]> {
    const students = this.repository.find({
      select: ["id", "name", "email", "bio", "isDeficiency", "typeDeficiency"],
    });

    return students;
  }

  findByEmail(email: string): Promise<Student> {
    const student = this.repository.findOne({
      where: { email },
    });

    return student;
  }

  async create({
    name,
    email,
    password,
    bio,
    isDeficiency,
    typeDeficiency,
  }: ICreateStudentDTO): Promise<void> {
    const student = this.repository.create({
      name,
      email,
      password,
      bio,
      isDeficiency,
      typeDeficiency,
    });

    await this.repository.save(student);
  }
}

export { StudentsRepository };
