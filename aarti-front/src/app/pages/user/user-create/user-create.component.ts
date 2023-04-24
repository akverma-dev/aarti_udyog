import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { UserService } from "../../service/user.service";

@Component({
  selector: "app-user-create",
  templateUrl: "./user-create.component.html",
  styleUrls: ["./user-create.component.scss"],
})
export class UserCreateComponent implements OnInit {
  constructor(private http: HttpClient, private userserivce: UserService) {}

  ngOnInit(): void {
    this.userserivce.profile();
  }

  AddUser(data: any) {
    this.http
      .post("http://localhost:4000/users/", data.value)
      .subscribe((resp: any) => {
        this.AddUser = resp;
        console.log(resp);
      });
  }
}
