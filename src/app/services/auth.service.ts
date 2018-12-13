import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { env } from 'app/env/env';
import { ILogin } from 'app/models/auth.model';

@Injectable()
export class AuthService {
    private baseUrl: string;

    constructor(
        private http: HttpClient
    ) {
        this.baseUrl = env.URL;

    }

    public login(data: ILogin): Observable<any> {
        return this.http.post(`${this.baseUrl}login`, data);
    }

}
