import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../erros/AppError";
import { ITeachersRepository } from "../../repositories/ITeachersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponseToken {
  token: string;
  teacher: {
    id: string;
    name: string;
    email: string;
  };
}

@injectable()
class AuthenticateTeacherUseCase {
  constructor(
    @inject("TeachersRepository")
    private teachersRepository: ITeachersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponseToken> {
    const teacher = await this.teachersRepository.findByEmail(email);

    if (!teacher) {
      throw new AppError("Email or password incorrect");
    }

    const matchPassword = await compare(password, teacher.password);

    if (!matchPassword) {
      throw new AppError("Email or password incorrect");
    }

    const token = sign({}, process.env.JWT_SECRET, {
      subject: teacher.id,
      expiresIn: "1d",
    });

    const responseToken: IResponseToken = {
      token,
      teacher: {
        id: teacher.id,
        name: teacher.name,
        email: teacher.email,
      },
    };

    return responseToken;
  }
}

export { AuthenticateTeacherUseCase };
