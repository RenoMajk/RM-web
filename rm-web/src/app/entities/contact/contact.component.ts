import { Component } from '@angular/core';

interface Social {
  url: string;
  name: string;
  img: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public readonly picturePath: string = '../../../assets/pictures/contact.jpg';

  socialList: Social[] = [
    { url: '', name: 'renomajk', img: '../../../assets/images/fb.png' },
    { url: '', name: '@renomajk', img: '../../../assets/images/insta.png' },
    { url: '', name: '@renomajk', img: '../../../assets/images/tiktok.png' },
  ];

}
