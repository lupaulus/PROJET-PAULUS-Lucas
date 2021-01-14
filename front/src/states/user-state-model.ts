import { User } from "src/app/models/user";
import { Jwt } from "src/app/models/jwt";

export class UserStateModel {
    connectUser: User;
    token : Jwt;
}