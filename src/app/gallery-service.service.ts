

import { Injectable } from '@angular/core';
// import { IEmployee } from './employee';
import {HttpClient} from '@angular/common/http';
// import {EmplyeeModel} from './IEmployee.model';
import { Observable} from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, retry, catchError } from 'rxjs/operators';


@Injectable()
export class GalleryServiceService {   
    
    getUserUrl = 'https://jsonplaceholder.typicode.com/users';
    getAlbumsUrl = 'https://jsonplaceholder.typicode.com/albums';
    getPhotosUrl = 'https://jsonplaceholder.typicode.com/photos';

    
    constructor(private http: HttpClient) { }

    getUsers(): Observable<any[]> {
        return this.http.get<any[]>(this.getUserUrl);
    }

    getAlbums(): Observable<any[]> {
        return this.http.get<any[]>(this.getAlbumsUrl);
    }


    getPhotos(): Observable<any[]> {
        return this.http.get<any[]>(this.getPhotosUrl);
    }
    

}