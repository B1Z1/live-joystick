import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../../pages/welcome-page/domain/welcome-page.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'pilot',
    loadChildren: () => import('../../pages/pilot-page/domain/pilot-page.module').then(m => m.PilotPageModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
