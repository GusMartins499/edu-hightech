import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTeacherUseCase } from "./CreateTeacherUseCase";

class CreateTeacherController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, bio, techs } = request.body;

    const createTeacherUseCase = container.resolve(CreateTeacherUseCase);

    await createTeacherUseCase.execute({ name, email, password, bio, techs });

    return response.status(201).send();
  }
}

export { CreateTeacherController };
