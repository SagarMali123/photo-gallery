import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { GalleryServiceService } from '../gallery-service.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,private _router: Router,private _GalleryServiceService: GalleryServiceService) { }
  PhotoList;
  filterphoto;
  photos;

  Id: string = this._activatedRoute.snapshot.params['id'];
  prevId: string = this._activatedRoute.snapshot.params['prevId'];

  ngOnInit() {
    this._GalleryServiceService.getPhotos()
    
    .subscribe(data => {

      this.PhotoList = data;

      console.log(this.PhotoList);

      this.filterphoto = this.PhotoList.filter((data) => {
            return(data.albumId == this.Id)
       }).slice(0,5);

    });
  }

  goToAlbums(){
    this._router.navigate(['/albums',this.prevId]);
  }

}
