import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {BootstrapStaticResult} from '../../types/bootstrap-static/bootstrapStaticResult';
import {ApiService} from '../../services/api.service';
import {JsonDataService} from '../../services/json-data.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {

  result: Observable<BootstrapStaticResult>;

  constructor(private apiService: ApiService, private jsonDataService:JsonDataService) {
    this.result = this.jsonDataService.getBootstrapStaticResult();
    this.result.subscribe(response => {
      console.log(response);
    });
  }

  ngOnInit() {
  }

}
