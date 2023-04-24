import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserService } from "../service/user.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private userService: UserService) {
    console.log("testing");
  }

  ngOnInit() {}
  ngOnDestroy() {}

  userlogin(data: any) {
    console.log(data);
    this.userService.login(data);
  }
  // userlogin(data: any) {
  //   this.http
  //     .post("http://localhost:4000/login/", data)
  //     .subscribe((resp: any) => {
  //       this.userlogin = resp;
  //       console.log(resp);
  //     });
  // }
}
