import {Component, OnInit} from '@angular/core';
import {from, Observable} from 'rxjs';
import {Team} from '../../types/bootstrap-static/team';
import {BootstrapStaticService} from '../../services/bootstrap-static.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
  teamsObservable: Observable<Team[]> = from([]);

  constructor(private bootstrapStaticService: BootstrapStaticService) {
    this.teamsObservable = this.bootstrapStaticService.getTeamsFromBootstrapStatic();
  }

  ngOnInit() {
  }

}
