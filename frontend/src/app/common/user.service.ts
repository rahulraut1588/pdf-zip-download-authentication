import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()

export class UserService {

  public usersList: any;
  public user: any;
  public isLoggedIn = false;

  constructor ( public http: HttpClient, public router: Router) {}

  getUsers(): Observable<any> {
    this.usersList = this.http.get(
      'http://localhost:3000/users',
      { headers: { 'api-key': 'Coditas123', 'Content-Type': 'application/json' } }
    );
    return this.usersList;
  }

  getUser(id): Observable<any> {
    this.user = this.http.get(
      'http://localhost:3000/user/' + id,
      { headers: { 'api-key': 'Coditas123', 'Content-Type': 'application/json' } }
    );
    return this.user;
  }

  getUserByEmail(userData): Observable<any> {
    let payload = JSON.stringify(userData);
    this.user = this.http.post(
      'http://localhost:3000/login',
      payload,
      { headers: { 'api-key': 'Coditas123', 'Content-Type': 'application/json' } }
    );
    return this.user;
  }

  registerUser(userData) {
    let payload = JSON.stringify(userData);
    this.user = this.http.post(
      'http://localhost:3000/register',
      payload,
      { headers: { 'api-key': 'Coditas123', 'Content-Type': 'application/json' } }
    );
    return this.user;
  }

  checkIfLoggedIn() {
    this.isLoggedIn = (localStorage.getItem('CODITAS_USER')) ? true : false;
    return this.isLoggedIn;
  }

  logout() {
    localStorage.removeItem('CODITAS_USER');
    window.location.reload();
  }


  getPdf(userId) {
    this.user = this.http.get(
      'http://localhost:3000/download/'+userId,
      {
        headers: { 'Content-Type': 'application/pdf', 'Accept': 'application/json' },
        responseType: 'arraybuffer'
      }
    );
    return this.user;
  }

  multipleDownload(downloadArray) {
    const params = new HttpParams();
		params.set('downloadArray[]', downloadArray);
    this.user = this.http.get(
      'http://localhost:3000/bulkdownload/',
      {
        params: { 'downloadArray': downloadArray },
        headers: { 'Content-Type': 'application/zip' },
        responseType: 'arraybuffer'
      }
    );
    return this.user;
  }
}
