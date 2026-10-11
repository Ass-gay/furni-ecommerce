import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../models/post';
import { Observable } from 'rxjs';
import { environment } from '../../../../environnement/environnement';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private http = inject(HttpClient);
  private apiUrl = environment.BASE_API+"/posts";

  // 1. GET - Récupérer tous les posts
  getAll(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

   // 2. GET - Récupérer un Post unique par son ID
  getById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }



}
