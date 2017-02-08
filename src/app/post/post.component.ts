import { FavouritesService } from './../services/favourites.service';
import { Router, ActivatedRoute } from '@angular/router';
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
  private userId: String;
  private id: String = '';
  private likes: any = {};
  private liked: boolean;
  private button: String;
  private displayText: String = '';

  constructor(private http: Http, private router: Router, private route: ActivatedRoute,
    private userService: UserService, private mediaService: MediaService, private favouriteService: FavouritesService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (res: any) => {
        this.id = res.id;
      }
    );
    if (!this.userService.logged) {
      this.router.navigate(['login']);
    } else {
      this.userId = JSON.parse(localStorage.getItem('user')).user_id;
      this.getInfo();
      this.getLikes();
    }
  }

  getInfo = () => {
    this.mediaService.getDetails(this.id).subscribe(
      (res) => {
        this.post = res.json();
        console.log(this.post);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getLikes = () => {
    this.favouriteService.getFavorite(this.id).subscribe(
      (res) => {
        this.likes = res.json();
        console.log(this.likes);
        this.liked = false;
        this.button = 'Like';
        for (let i = 0; i < this.likes.length; i++) {
          if (this.likes[i].user_id === this.userId) {
            this.liked = true;
            this.button = 'Unlike';
            break;
          }
        }
        this.display();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  display = () => {
    if (this.likes.length === 0 || this.likes.length === undefined) {
      this.displayText = '';
    } else if (this.likes.length === 1 && this.liked) {
      this.displayText = 'You liked this';
    } else if (this.likes.length === 1 && !this.liked) {
      this.displayText = 'One person liked this';
    } else if (this.likes.length === 2 && this.liked) {
      this.displayText = 'You and one other person liked this';
    } else {
      if (this.liked) { this.displayText += 'You and'; }
      this.displayText += this.likes.length + ' people liked this';
    }
  }
  click = () => {
    if (!this.liked) {
      this.favouriteService.addFavorite(this.id).subscribe(
        (res) => {
          console.log(res);
          this.button = 'Unlike';
          this.liked = true;
          this.favouriteService.getFavorite(this.id).subscribe(
            (res) => {
              this.likes = res.json();
              this.display();
            }
          );
        }
      );
    } else {
      this.favouriteService.removeFavorite(this.id).subscribe(
        (res) => {
          console.log(res);

          this.button = 'Like';
          this.liked = false;
          this.favouriteService.getFavorite(this.id).subscribe(
            (res) => {
              this.likes = res.json();
              this.display();
            }
          );
        }
      );
    }
  }
}
