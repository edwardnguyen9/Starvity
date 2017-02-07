import { MediaService } from './../services/media.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
  }
  upload = (evt, value) => {
    const fileElement = evt.target.querySelector('input[type=file]');
    const formData = new FormData();
    formData.append('file', fileElement.files[0]);
    formData.append('title', value.title);
    formData.append('description', value.description);
    return this.mediaService.upload(formData).subscribe(
      (res) => {
        console.log(res.json());
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
