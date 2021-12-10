import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateTeacherUseCase } from "./AuthenticateTeacherUseCase";

class AuthenticateTeacherController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateTeacherUseCase = container.resolve(
      AuthenticateTeacherUseCase
    );

    const token = await authenticateTeacherUseCase.execute({ email, password });

    return response.json(token);
  }
}

export { AuthenticateTeacherController };
