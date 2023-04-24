import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}

  login(data: any) {
    this.http
      .post("http://localhost:4000/login/", data)
      .subscribe((resp: any) => {
        localStorage.setItem("token", resp.token);
        this.router.navigate(["/dashboard"]);
      });
  }
  profile() {
    let headers = new HttpHeaders().set(
      "Authorization",
      `bearer ${localStorage.getItem("token")}`
    );
    this.http
      .get("http://localhost:4000/user/", { headers })
      .subscribe((resp: any) => {});
  }
}
