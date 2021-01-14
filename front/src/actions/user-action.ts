import { Jwt } from "src/app/models/jwt";
import { User } from "src/app/models/user";

export class AddUser {
    static readonly type = "[User] Add";
    constructor(public user: User) {}
}

export class AddToken {
    static readonly type = "[User] Update";
    constructor(public token: Jwt) {}
}

export class RemoveUser {
    static readonly type = "[User] Remove";
    constructor() {}
}