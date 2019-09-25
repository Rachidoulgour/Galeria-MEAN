import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PhotoserviceService} from '../../services/photoservice.service'

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  photos = [];
  constructor(private photoserviceService: PhotoserviceService, private router: Router) { }

  ngOnInit() {
    this.photoserviceService.getPhoto()
    .subscribe(res => {this.photos = res;
    },
    err => console.log(err))
  };
  selectedCard(id: string){
    this.router.navigate(['/photos, id']);
    // this.photoserviceService.getimage(id)
    // .subscribe(
    //   res =>console.log(res),
    //   err =>console.log(err)
    // )
  }

}
