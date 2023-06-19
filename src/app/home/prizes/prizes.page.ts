import {Component, OnInit} from '@angular/core';
import {from, Observable} from 'rxjs';
import {Prize} from '../../types/prizes/prizesResult';
import {PrizesService} from '../../services/prizes.service';

@Component({
  selector: 'app-prizes',
  templateUrl: './prizes.page.html',
  styleUrls: ['./prizes.page.scss'],
})
export class PrizesPage implements OnInit {

  overallPrizesObservable: Observable<Prize[]>;
  monthlyPrizesObservable: Observable<Prize[]>;
  weeklyPrizesObservable: Observable<Prize[]>;
  secondChancePrizesObservable: Observable<Prize[]>;

  constructor(private prizesService: PrizesService) {
    this.overallPrizesObservable = prizesService.getOverallPrizesFromPrizes();
    this.monthlyPrizesObservable = prizesService.getMonthlyPrizesFromPrizes();
    this.weeklyPrizesObservable = prizesService.getWeeklyPrizesFromPrizes();
    this.secondChancePrizesObservable = prizesService.getSecondChancePrizesFromPrizes();
  }

  ngOnInit() {
  }

}
