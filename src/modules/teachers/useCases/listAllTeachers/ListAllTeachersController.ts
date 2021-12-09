import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAllTeachersUseCase } from "./ListAllTeachersUseCase";

class ListAllTeachersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllTeachersUseCase = container.resolve(ListAllTeachersUseCase);

    const allTeachers = await listAllTeachersUseCase.execute();

    return response.json(allTeachers);
  }
}

export { ListAllTeachersController };
