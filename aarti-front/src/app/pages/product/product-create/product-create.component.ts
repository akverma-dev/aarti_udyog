import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.scss"],
})
export class ProductCreateComponent implements OnInit {
  category: any;
  constructor(private http: HttpClient) {
    this.FetchCategory();
  }

  ngOnInit(): void {}

  AddProduct(proFrm: NgForm) {
    if (proFrm.form.invalid) {
      console.log(proFrm.form.value);
      alert("please fill require fields..");
    } else {
      console.log(proFrm.form.value);
      this.http.post("http://localhost:4000/products/", proFrm.value).subscribe(
        (resp: any) => {
          console.log(resp);
        },
        (err) => {
          console.log(err);
        }
      );
    }
    return;
  }
  FetchCategory() {
    this.http.get("http://localhost:4000/category/").subscribe((resp: any) => {
      if (resp) {
        this.category = resp;
        console.log(resp);
      }
    });
  }
}
