import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { GalleryServiceService } from '../gallery-service.service';

@Component({

  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']

})

export class AlbumsComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, private _GalleryServiceService: GalleryServiceService,private _router: Router) { }
  AlbumsList;
  filterAlbums;

  Id: string = this._activatedRoute.snapshot.params['id'];


  ngOnInit() {
    
    this._GalleryServiceService.getAlbums()

    .subscribe(data => {
      
      this.AlbumsList = data;
      console.log(this.AlbumsList);

      this.filterAlbums = this.AlbumsList.filter((data) => {
            return(data.userId==this.Id)
       })

       console.log(this.filterAlbums);

    });

  }

  showPhotos = function(id) {
    this._router.navigate(['/photos',id]);
  }

  goToUser(){
    console.log("call");
    this._router.navigate(['/user']);
  }

}

