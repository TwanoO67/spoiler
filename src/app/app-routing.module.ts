import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'game',
    children: [
      {
        path: '',
        loadChildren: '../game/game.module#GamePageModule'
      }
    ]
  },
  {
    path: 'settings',
    children: [
      {
        path: '',
        loadChildren: '../settings/settings.module#SettingsPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'game',
    pathMatch: 'full'
  }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
