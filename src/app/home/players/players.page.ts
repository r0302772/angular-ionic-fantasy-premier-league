import { Component, OnInit } from '@angular/core';
import {from, Observable} from 'rxjs';
import {Element} from '../../types/bootstrap-static/element';
import {BootstrapStaticService} from '../../services/bootstrap-static.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {

  elementsObservable: Observable<Element[]> = from([]);

  constructor(private bootstrapStaticService: BootstrapStaticService) {
    this.elementsObservable = this.bootstrapStaticService.getElementsFromBootstrapStatic();
  }

  ngOnInit() {
  }

}
