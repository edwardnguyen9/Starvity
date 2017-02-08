import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FavouritesService {
  private url = 'http://media.mw.metropolia.fi/wbma/favourites/';
  private token;
  private message = { 'file_id': ''};
  constructor(private http: Http) {
    this.token = JSON.parse(localStorage.getItem('user')).token;
  }
  getFavorite = (id) => {
    return this.http.get(this.url + 'file/' + id);
  }
  addFavorite = (id) => {
    this.message.file_id = id;
    return this.http.post(this.url + '?token=' + this.token, this.message);
  }
  removeFavorite = (id) => {
    return this.http.delete(this.url + 'file/' + id + '?token=' + this.token);
  }
}
