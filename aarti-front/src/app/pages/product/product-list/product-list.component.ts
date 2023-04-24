import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  products: any = [];

  constructor(private http: HttpClient) {
    this.fetchProduct();
  }

  ngOnInit(): void {}

  fetchProduct() {
    this.http.get("http://localhost:4000/products/").subscribe(
      (resp: any) => {
        this.products = resp;
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteProduct(id: string) {
    this.http.delete(`http://localhost:4000/products/${id}`).subscribe(
      (resp: any) => {
        console.log("Product deleted successfully");
        this.fetchProduct();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
