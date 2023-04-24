import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-order-list",
  templateUrl: "./order-list.component.html",
  styleUrls: ["./order-list.component.scss"],
})
export class OrderListComponent implements OnInit {
  orders: any = [];

  constructor(private http: HttpClient) {
    this.fetchOrder();
  }

  ngOnInit(): void {}

  fetchOrder() {
    this.http.get("http://localhost:4000/orders/").subscribe(
      (resp: any) => {
        this.orders = resp;
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
