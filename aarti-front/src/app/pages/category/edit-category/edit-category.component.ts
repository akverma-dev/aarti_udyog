import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute} from "@angular/router";
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
categoryId: any;
category: any;

  constructor(private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService ) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: any)=>{
      this.categoryId = param.id;
      // console.log(param);
      this.getCategory();

    })


  }

  getCategory(){
    this.api.getById('category', this.categoryId).subscribe((resp: any)=>{
      this.category = resp;
      console.log(resp);
    })
  }
  updateCategory(proFrm: NgForm) {
    if (proFrm.form.invalid) {
      console.log(proFrm.form.value);
      alert("please fill require fields..");
    } else {
      console.log(proFrm.form.value);
      this.http.post("http://localhost:3000/category/", proFrm.value).subscribe(
        (resp: any) => {
          console.log(resp);
          this.router.navigate(['/category/create-list'])

        },
        (err) => {
          console.log(err);
        }
      );
    }
    return;
  }
}


