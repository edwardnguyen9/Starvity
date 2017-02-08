import { UserService } from './../services/user.service';
import { Router } from '@angular/router';
import { MediaService } from './../services/media.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {
  private images: any = [];
  constructor(private mediaService: MediaService, private router: Router, private userService: UserService) { }

  ngOnInit() {
    if (!this.userService.logged) {
      this.router.navigate(['login']);
    } else {
      this.mediaService.getMedia().subscribe(
        (res) => {
          this.images = res.json();
          console.log(this.images);
        }
      );
      // this.getNew();
    }
  }

  toPost = (id) => {
    // localStorage.setItem('postId', id);
    this.router.navigate(['/post', id]);
  }

  getNew = () => {
    this.mediaService.getNew().subscribe(
      (res) => {
        this.images = res.json();
        console.log(this.images);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
