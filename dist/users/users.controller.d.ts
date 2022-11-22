import { UsersService } from './users.service';
import { User } from './user.entity/user.entity';
export declare class UsersController {
    private service;
    constructor(service: UsersService);
    get(params: any): Promise<User[]>;
    update(user: User): Promise<void>;
    deleteUser(params: any): Promise<void>;
}
