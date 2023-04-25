import { PostgresUserImpl } from "../../implementation/PostgresUserImpl";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const postgresUserImpl = new PostgresUserImpl();
const createUserUseCase = new CreateUserUseCase(postgresUserImpl);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
