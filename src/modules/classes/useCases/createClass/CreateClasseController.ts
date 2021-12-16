import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateClasseUseCase } from "./CreateClasseUseCase";

class CreateClasseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { teacher_id, student_id } = request.body;

    const createClasseUseCase = container.resolve(CreateClasseUseCase);

    await createClasseUseCase.execute({ teacher_id, student_id });

    return response.status(201).send();
  }
}

export { CreateClasseController };
