import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePageComponent } from 'src/app/pages/welcome-page/ui/welcome-page.component';
import { WelcomePageRoutingModule } from 'src/app/pages/welcome-page/domain/routes/welcome-page-routing.module';


@NgModule({
  declarations: [WelcomePageComponent],
  imports: [
    CommonModule,
    WelcomePageRoutingModule
  ],
  exports: [WelcomePageComponent]
})
export class WelcomePageModule {
}
