import { ICreateTeacherDTO } from "../dtos/ICreateTeacherDTO";
import { Teacher } from "../entities/Teacher";

interface ITeachersRepository {
  create(data: ICreateTeacherDTO): Promise<void>;
  findByEmail(email: string): Promise<Teacher>;
  listAll(): Promise<Teacher[]>;
}

export { ITeachersRepository };
