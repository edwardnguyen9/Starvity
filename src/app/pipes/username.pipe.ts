import { Http } from '@angular/http';
import { Pipe, PipeTransform } from '@angular/core';
import 'rxjs/add/operator/map';


@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {
  private url: String = 'http://media.mw.metropolia.fi/wbma/users/';
  private token: String;
  private users: any = [];
  constructor(private http: Http) {
    this.token = JSON.parse(localStorage.getItem('user')).token;
    this.http.get(this.url + '?token=' + this.token).subscribe(
      (res) => {
        this.users = res.json();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  transform(id: any): String {
    let name: String = '';
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].user_id === id) {
        name = this.users[i].username;
        break;
      }
    }
    return name;
  }

}
