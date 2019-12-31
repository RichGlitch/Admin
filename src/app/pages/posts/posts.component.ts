import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/service.index';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;
  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this.getPosts();
  }
  getPosts(){
    this._apiService.getPosts().subscribe(
      response => {
        this.posts = response;
        console.log(this.posts);
      }
    );
  }
}
