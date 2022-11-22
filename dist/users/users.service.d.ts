import { Repository } from 'typeorm';
import { User } from './user.entity/user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    getUsers(user: User): Promise<User[]>;
    getUser(_id: number): Promise<User[]>;
    updateUser(user: User): Promise<void>;
    deleteUser(user: User): Promise<void>;
}
