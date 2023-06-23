import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {FixturesResult} from '../../types/fixtures/fixturesResult';
import {ActivatedRoute} from '@angular/router';
import {FixturesService} from '../../services/fixtures.service';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.page.html',
  styleUrls: ['./fixtures.page.scss'],
})
export class FixturesPage implements OnInit {

  fixtures: Observable<FixturesResult[]>;

  constructor(private fixturesService: FixturesService) {
    this.fixtures = this.fixturesService.getFixturesOfEventFromFixtures(1);
  }

  ngOnInit() {
    this.setData();
  }

  setData(): void {
    /*    const id = this.activatedRoute.snapshot.paramMap.get('id');

        // No need to continue with the function if no parameter was specified.
        if (id === null) {
          return;
        }*/
  }

  getBestTeamsPerGameweek() {
    this.fixturesService.getSelectedTeamsByGameweek().subscribe();
  }

}
