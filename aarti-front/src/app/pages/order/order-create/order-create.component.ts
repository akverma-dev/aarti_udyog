import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { IDropdownSettings } from "ng-multiselect-dropdown";

@Component({
  selector: "app-order-create",
  templateUrl: "./order-create.component.html",
  styleUrls: ["./order-create.component.scss"],
})
export class OrderCreateComponent implements OnInit {
  products: any;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.dropdownList = [
      { item_id: 1, item_text: "Mumbai" },
      { item_id: 2, item_text: "Bangaluru" },
      { item_id: 3, item_text: "Pune" },
      { item_id: 4, item_text: "Navsari" },
      { item_id: 5, item_text: "New Delhi" },
    ];
    this.selectedItems = [
      { item_id: 3, item_text: "Pune" },
      { item_id: 4, item_text: "Navsari" },
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: "item_id",
      textField: "item_text",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }

  AddOrder(proFrm: NgForm) {
    if (proFrm.form.invalid) {
      console.log(proFrm.form.value);
      alert("please fill require fields..");
    } else {
      console.log(proFrm.form.value);
      this.http.post("http://localhost:4000/orders/", proFrm.value).subscribe(
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

  // fetchProduct() {
  //   this.http.get("http://localhost:4000/products/").subscribe(
  //     (resp: any) => {
  //       this.products = resp;
  //       this.dropdownList = resp;
  //       console.log(resp);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }

  // AddOrder(proFrm: NgForm) {
  //   this.http
  //     .post("http://localhost:4000/orders/", proFrm.form.value)
  //     .subscribe(
  //       (resp: any) => {
  //         console.log(resp);
  //         console.log("testing");
  //       },
  //       (err) => {
  //         console.log(err);
  //       }
  //     );
  // }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
