import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MediaService {
  private url = 'http://media.mw.metropolia.fi/wbma/media';
  private token;

  constructor(private http: Http, private router: Router) {
    this.token = JSON.parse(localStorage.getItem('user')).token;
  }

  getMedia = () => {
    return this.http.get(this.url);
  }

  getNew = () => {
    return this.http.get(this.url + '?limit=10');
  }

  upload = (data) => {
    return this.http.post(this.url + '?token=' + this.token, data);
  }

  getDetails = (id) => {
    return this.http.get(this.url + '/' + id);
  }
}
