import { ICreateClassesDTO } from "../dtos/ICreateClassesDTO";
import { Classes } from "../entities/Classes";

interface IClassesRepository {
  create(data: ICreateClassesDTO): Promise<void>;
  listAll(): Promise<Classes[]>;
}

export { IClassesRepository };
