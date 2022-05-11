import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Users } from "../models/Users";
import {Observable} from "rxjs";
import {UserFormComponent} from "./users-form/form.component";

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  message: string | undefined;
  messageStyle: string | undefined;

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getListUsersAPI(): Observable<Users[]> {
    return this.httpClient.get<Users[]>('https://reqres.in/api/users');
  }

  public insertUser(users: Users) {

  }

  public updateUser(users: Users[], userId: number) {
    const userOnUpdate = users.findIndex((user: Users) => user.id === userId);
    console.log(userOnUpdate);
  }

  public deleteUser(users: Users[], userId: number) {
    const userOnDelete = users.findIndex((user: Users) => user.id === userId);
    users.splice(userOnDelete, 1);

    if (users.length === 0) {
      this.message = "Không có dữ liệu tồn tại. Hãy thêm dữ liệu mới!";
      this.messageStyle = "display: block;";
    }
  }
}
