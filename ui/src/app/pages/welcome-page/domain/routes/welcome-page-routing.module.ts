import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from 'src/app/pages/welcome-page/ui/welcome-page.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class WelcomePageRoutingModule {
}
