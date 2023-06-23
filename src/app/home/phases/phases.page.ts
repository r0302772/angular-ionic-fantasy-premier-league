import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Phase} from '../../types/bootstrap-static/phase';
import {BootstrapStaticService} from '../../services/bootstrap-static.service';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-phases',
  templateUrl: './phases.page.html',
  styleUrls: ['./phases.page.scss'],
})
export class PhasesPage implements OnInit {

  phasesObservable: Observable<Phase[]>;

  constructor(private bootstrapStaticService: BootstrapStaticService, private apiService:ApiService) {
    this.phasesObservable = this.bootstrapStaticService.getPhasesFromBootstrapStatic();
  }

  ngOnInit() {
  }

}
