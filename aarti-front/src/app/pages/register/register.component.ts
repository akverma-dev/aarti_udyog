import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  register(data: any) {
    this.http
      .post("http://localhost:4000/users/", data.value)
      .subscribe((resp: any) => {
        this.register = resp;
        console.log(resp);
      });
  }
}
