import { Injectable } from '@angular/core';
import { env } from 'app/env/env';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../models/post.model';

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    private url: string;

    constructor(
        private http: HttpClient
    ) {
        this.url = env.URL;
    }

    public createPost(post: IPost): Observable<IPost> {
        return this.http.post<IPost>(`${this.url}posts/add`, post);
    }

    public updatePost(id: string, post: IPost): Observable<IPost> {
        return this.http.patch<IPost>(`${this.url}posts/update/${id}`, post);
    }

    public getPosts(): Observable<IPost[]> {
        return this.http.get<IPost[]>(`${this.url}posts`);
    }

    public getPost(id: string): Observable<IPost> {
        return this.http.get<IPost>(`${this.url}posts/post/${id}`);
    }

    public removePost(id: string): Observable<IPost> {
        return this.http.delete<IPost>(`${this.url}posts/delete/${id}`);
    }

}
