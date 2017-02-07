import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MediaService {
  private url = 'http://media.mw.metropolia.fi/wbma/';
  private token;

  constructor(private http: Http, private router: Router) {
    this.token = JSON.parse(localStorage.getItem('user')).token;
  }

  getMedia = () => {
    return this.http.get(this.url + 'media');
  }

  getNew = () => {
    return this.http.get(this.url + 'media?limit=10');
  }

  upload = (data) => {
    return this.http.post(this.url + 'media?token=' + this.token, data);
  }
}
