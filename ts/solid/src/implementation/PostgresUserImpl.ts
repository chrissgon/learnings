import { User } from "../entity/User";
import { IUserRepository } from "../repository/UserRepository";

export class PostgresUserImpl implements IUserRepository{
    private users: User[] = []

    async findByEmail(email: string): Promise<User> {
        return this.users.find(user=> user.email === email)
    }
    async create(User: User): Promise<User[]> {
        this.users.push(User)
        return this.users
    }
}