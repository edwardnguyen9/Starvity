import { Router } from '@angular/router';
import { MediaService } from './../services/media.service';
import { UserService } from './../services/user.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  private post: any = {};
  private id: String = '';
  private filename: String;

  constructor(private http: Http, private userService: UserService, private mediaService: MediaService, private router: Router) {
    this.id = localStorage.getItem('postId');
  }

  ngOnInit() {
    if (!this.userService.logged) {
      this.router.navigate(['login']);
    } else if (this.id === undefined || this.id === null || this.id === '') {
      this.router.navigate(['front']);
    } else {
      this.getInfo();
    }
  }

  getInfo = () => {
    this.mediaService.getDetails(this.id).subscribe(
      (res) => {
        this.post = res.json();
        console.log(this.post);
        this.filename = this.post.filename;
        console.log(this.filename);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
