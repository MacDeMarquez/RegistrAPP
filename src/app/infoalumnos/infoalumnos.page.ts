import { Component, OnInit } from '@angular/core';
import { JsondbService } from '../login/jsondb.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-infoalumnos',
  templateUrl: './infoalumnos.page.html',
  styleUrls: ['./infoalumnos.page.scss'],
})
export class InfoalumnosPage implements OnInit {

  constructor(private db:JsondbService,
    private activated: ActivatedRoute) { }
    userId: any;
    ramos: any = [];
    ngOnInit() {
      this.activated.paramMap.subscribe(params => {
        this.userId = params.get('id');
        if (this.userId) {
          this.db.getRamosByUserId(this.userId)
            .subscribe(ramos => {
              this.ramos = ramos;
            });
        }
      });
    }
  

  
  

}
