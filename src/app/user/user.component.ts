import { Component, OnInit } from '@angular/core';
import { GalleryServiceService } from '../gallery-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  
  empList:any[]

  constructor(private _GalleryServiceService: GalleryServiceService,private _router: Router) {}

  ngOnInit() {

    this._GalleryServiceService.getUsers()
      .subscribe(data => {
        this.empList = data;
        console.log(this.empList)
    });

  }

  showAlbums = function(id) {
     this._router.navigate(['/albums',id]);
  }

}
