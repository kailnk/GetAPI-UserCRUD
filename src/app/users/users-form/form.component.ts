import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-users-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class UserFormComponent implements OnInit {
  displayBlock!: undefined | string;
  formZIndex!: undefined | string;

  constructor() { }

  ngOnInit(): void {}

  public onDisplayForm() {
    this.displayBlock = "display: block;";
    this.formZIndex = "z-index: 1;";
  }

  public onCloseForm() {
    this.displayBlock = "display: none;";
    this.formZIndex = "z-index: 0;";
  }
}
