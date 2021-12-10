import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAllStudentsUseCase } from "./ListAllStudentsUseCase";

class ListAllStudentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllStudentsUseCase = container.resolve(ListAllStudentsUseCase);

    const allStudents = await listAllStudentsUseCase.execute();

    return response.json(allStudents);
  }
}

export { ListAllStudentsController };
