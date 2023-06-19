import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BootstrapStaticResult} from '../../types/bootstrap-static/bootstrapStaticResult';
import {ApiService} from '../../services/api.service';
import {JsonDataService} from '../../services/json-data.service';
import {FixturesResult} from '../../types/fixtures/fixturesResult';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.page.html',
  styleUrls: ['./fixtures.page.scss'],
})
export class FixturesPage implements OnInit {

  result: Observable<BootstrapStaticResult>;
  fixtures: Observable<FixturesResult[]>;

  constructor(private apiService: ApiService, private jsonDataService: JsonDataService, public activatedRoute: ActivatedRoute) {
    this.result = this.jsonDataService.getBootstrapStaticResult();
    this.result.subscribe(response => {
      console.log(response);
    });

    this.fixtures = this.jsonDataService.getFixturesResult();
    this.fixtures.subscribe(response => {
      console.log(response);
    });
  }

  ngOnInit() {
    this.setData();
  }

  setData(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    // No need to continue with the function if no parameter was specified.
    if (id === null) {
      return;
    }
  }

}
