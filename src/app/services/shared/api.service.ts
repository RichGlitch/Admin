import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/Category';
import { Post } from 'src/app/models/Post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    private _urlBack: string;

    constructor(private _httpClient : HttpClient ) {
      this._urlBack = environment.urlBack + "/api";
    }
      
    getCategories():Observable<Category[]>{
        return this._httpClient.get<Category[]>(`${this._urlBack}/categories`);
    }

    getPosts():Observable<Post[]>{
        return this._httpClient.get<Post[]>(`${this._urlBack}/posts`);

    }
}
