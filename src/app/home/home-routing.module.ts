import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'fixtures',
    loadChildren: () => import('./fixtures/fixtures.module').then( m => m.FixturesPageModule)
  },
  {
    path: 'teams',
    loadChildren: () => import('./teams/teams.module').then( m => m.TeamsPageModule)
  },
  {
    path: 'phases',
    loadChildren: () => import('./phases/phases.module').then( m => m.PhasesPageModule)
  },
  {
    path: 'players',
    loadChildren: () => import('./players/players.module').then( m => m.PlayersPageModule)
  },
  {
    path: 'prizes',
    loadChildren: () => import('./prizes/prizes.module').then( m => m.PrizesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
