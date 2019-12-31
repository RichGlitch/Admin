import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/service.index';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: any;
  
  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this.categories = [
      {
        categoryName: "Test 1"
      },
      {
        categoryName: "Test 2"
      },
      {
        categoryName: "Test 4"
      },
      {
        categoryName: "Test 8"
      },
      {
        categoryName: "Test 27"
      },
      {
        categoryName: "Test 2"
      },
      {
        categoryName: "Test 4"
      },
      {
        categoryName: "Test 8"
      },
      {
        categoryName: "Test 27"
      }
    ];
   // console.log(this.categories);
    this.getCategories();
  }

  
  getCategories(){
    this._apiService.getCategories().subscribe(
      response => {
        this.categories = response;
      }
    );
  }
}
