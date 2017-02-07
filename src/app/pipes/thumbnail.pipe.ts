import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumbnail'
})
export class ThumbnailPipe implements PipeTransform {

  transform(name: String, size = 'small'): String {
    let link = '-tn';
    switch (size) {
      case 'small':
        link += '160';
        break;
      case 'medium':
        link += '320';
        break;
      case 'large':
        link += '640';
        break;
      default:
        link += '160';
    }
    link += '.png';
    return name.substring(0, name.lastIndexOf('.')) + link;
  }

}
