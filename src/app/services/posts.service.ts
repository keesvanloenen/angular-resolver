import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private readonly url = 'https://jsonplaceholder.typicode.com/posts';
  private http = inject(HttpClient);

  getPosts() {
    return this.http.get<Post[]>(this.url);
  }
}
