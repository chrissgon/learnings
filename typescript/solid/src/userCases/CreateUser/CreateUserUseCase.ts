import { User } from "../../entity/User";
import { IUserRepository } from "../../repository/UserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: ICreateUserRequestDTO): Promise<User[]> {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    return await this.userRepository.create(new User(data));
  }
}
