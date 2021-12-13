import "reflect-metadata";
import "dotenv/config";
import "@utils/container";
import "./database";

import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import { AppError } from "@erros/AppError";

import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: `Internal Server Error - ${err.message}`,
    });
  }
);

app.listen(3333, () => console.log("🚀️ Server started on port 3333!"));
