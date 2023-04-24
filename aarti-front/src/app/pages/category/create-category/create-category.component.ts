import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "src/app/services/api.service";


@Component({
  selector: "app-create-category",
  templateUrl: "./create-category.component.html",
  styleUrls: ["./create-category.component.scss"],
})
export class CreateCategoryComponent implements OnInit {
  constructor(private http: HttpClient,
              private router: Router,
              private api: ApiService ) {}

  ngOnInit(): void {}

  AddCategory(proFrm: NgForm) {
    if (proFrm.form.invalid) {
      console.log(proFrm.form.value);
      alert("please fill require fields..");
    } else {
      console.log(proFrm.form.value);
      this.api.post('category', proFrm.form.value).subscribe(
        (resp: any) => {
          console.log(resp);
          this.router.navigate(['/category/create-list'])

        }
      );
    }
    return;
  }
}
