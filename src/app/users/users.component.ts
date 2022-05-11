import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { UsersService } from "./users.service";
import { Users } from "../models/Users";
import {UserFormComponent} from "./users-form/form.component";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usersFromAPI: Users[] = [];
  message: string | undefined;
  messageStyle: string | undefined;
  ufc!: UserFormComponent;

  constructor(
    private userService: UsersService,
  ) { }

  ngOnInit(): void {
    this.getUsersFromAPI();
  }

  public getUsersFromAPI() {
    this.userService.getListUsersAPI().subscribe(
      (response: any) => { this.usersFromAPI = response.data; }
    );
  }

  public insertUser(users: Users) {}

  public updateUser(userId: number) {
    this.userService.updateUser(this.usersFromAPI, userId);
  }

  public deleteUser(userId: number) {
    this.userService.deleteUser(this.usersFromAPI, userId);
    this.message = this.userService.message;
    this.messageStyle =this.userService.messageStyle;
  }

  public onDisplayForm() {

  }
}
