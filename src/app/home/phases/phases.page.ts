import { Component, OnInit } from '@angular/core';
import {from, Observable} from 'rxjs';
import {Phase} from '../../types/bootstrap-static/phase';
import {BootstrapStaticService} from '../../services/bootstrap-static.service';

@Component({
  selector: 'app-phases',
  templateUrl: './phases.page.html',
  styleUrls: ['./phases.page.scss'],
})
export class PhasesPage implements OnInit {

  phasesObservable: Observable<Phase[]> = from([]);

  constructor(private bootstrapStaticService: BootstrapStaticService) {
    this.phasesObservable = this.bootstrapStaticService.getPhasesFromBootstrapStatic();
  }

  ngOnInit() {
  }

}
