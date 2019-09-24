import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Photo} from '../interfaces/Photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoserviceService {

  URI = 'http://localhost:3000/api/photos'

  constructor(private http: HttpClient) { }

  createPhoto(title: string, description: string, photo: File){
    const fdata = new FormData();
    fdata.append('title', title);
    fdata.append('description', description);
    fdata.append('image', photo);
    return this.http.post(this.URI, fdata);
  }

  getPhoto(){
    return this.http.get<Photo[]>(this.URI);
  }

}
