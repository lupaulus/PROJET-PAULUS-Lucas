import { Injectable } from "@angular/core";
import { NgxsModule, Action, Selector, State, StateContext } from "@ngxs/store";
import { AddToken, AddUser, RemoveUser } from "src/actions/user-action";
import { Jwt } from "src/app/models/jwt";
import { User } from "src/app/models/user";
import { UserStateModel } from "./user-state-model";


@State<UserStateModel>({
  name: "userInfo",
  defaults: {
    connectUser: null,
    token : null,
  }
})

@Injectable()
export class UserState {
  @Selector()
  static getJwt(state: UserStateModel): Jwt {
    return state.token;
  }

  @Selector()
  static getUser(state : UserStateModel):User
  {
    return state.connectUser;
  }

  @Action(AddUser)
  add(
    { getState, patchState }: StateContext<UserStateModel>,
    { user }: AddUser
  ) {
    const state = getState();
    patchState({
      connectUser: user,
      token : state.token
    });
  }

  @Action(RemoveUser)
  del(
    { getState, patchState }: StateContext<UserStateModel>,
    { }: RemoveUser
  ) {
    const state = getState();
    patchState({
      // supprimer le payload dans Produits
      connectUser: null,
      token : null
    });
  }

  @Action(AddToken)
  update(
    { getState, patchState }: StateContext<UserStateModel>,
    { token }: AddToken
  ) {
    const state = getState();
    patchState({
      connectUser: state.connectUser,
      token : token
    });
  }
  
  
  
}
