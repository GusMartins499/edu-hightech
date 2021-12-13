import { ICreateStudentDTO } from "@modules/students/dtos/ICreateStudentDTO";
import { Student } from "@modules/students/entities/Student";

import { IStudentsRepository } from "../IStudentsRepository";

class StudentsRepositoryInMemory implements IStudentsRepository {
  students: Student[] = [];

  async create({
    name,
    email,
    password,
    bio,
    typeDeficiency,
    isDeficiency,
  }: ICreateStudentDTO): Promise<void> {
    const student = new Student();
    Object.assign(student, {
      name,
      email,
      password,
      bio,
      typeDeficiency,
      isDeficiency,
    });

    this.students.push(student);
  }
  async findByEmail(email: string): Promise<Student> {
    const student = this.students.find((student) => student.email === email);

    return student;
  }

  async listAll(): Promise<Student[]> {
    return this.students;
  }
}

export { StudentsRepositoryInMemory };
