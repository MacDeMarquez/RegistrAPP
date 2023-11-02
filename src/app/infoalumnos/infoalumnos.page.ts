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
  ramos : any = [];
  ngOnInit() {
    this.activated.paramMap.subscribe(p => {
      const idRamos = p.get('id')??'';
      this.db.getRamos(idRamos);
    })
  }

  ionViewDidEnter()
  {
    this.ramos = this.db.ramos;
  }

  

}
