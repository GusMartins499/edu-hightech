import { ICreateStudentDTO } from "../dtos/ICreateStudentDTO";
import { Student } from "../entities/Student";

interface IStudentsRepository {
  create(data: ICreateStudentDTO): Promise<void>;
  findByEmail(email: string): Promise<Student>;
  listAll(): Promise<Student[]>;
}

export { IStudentsRepository };
