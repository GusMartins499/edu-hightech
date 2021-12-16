import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAllClassesUseCase } from "./ListAllClassesUseCase";

class ListAllClassesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllClassesUseCase = container.resolve(ListAllClassesUseCase);

    const allClasses = await listAllClassesUseCase.execute();

    return response.json(allClasses);
  }
}

export { ListAllClassesController };
