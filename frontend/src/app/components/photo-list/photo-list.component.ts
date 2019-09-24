import { Component, OnInit } from '@angular/core';

import {PhotoserviceService} from '../../services/photoservice.service'

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  photos = [];
  constructor(private photoserviceService: PhotoserviceService) { }

  ngOnInit() {
    this.photoserviceService.getPhoto()
    .subscribe(res => {this.photos = res;
    },
    err => console.log(err))
  }

}
