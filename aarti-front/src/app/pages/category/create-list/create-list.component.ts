import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/services/api.service";



@Component({
  selector: "app-create-list",
  templateUrl: "./create-list.component.html",
  styleUrls: ["./create-list.component.scss"],
})
export class CreateListComponent implements OnInit {
  category: any = [];
  singleCategory: any;

  constructor(private http: HttpClient, private router: Router,
              private api: ApiService) {
    this.fetchCategory();
  }

  ngOnInit(): void {}

  fetchCategory() {
    this.api.get('category',{}).subscribe(
      (resp: any) => {
        this.category = resp.data;
        console.log(resp);
      }
    );
  }



  deleteCategory(cateId: any){
    if(confirm("Are you sure you want to delete this category?")){

      this.api.delete("category", cateId).subscribe((resp: any)=>{
        console.log(resp);
        if(resp){
          alert(resp.message);
         this.fetchCategory();

        }

      })

    }else{
      this.fetchCategory();
    }

  }
}
