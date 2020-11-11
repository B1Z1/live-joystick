import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePageComponent } from 'src/app/pages/welcome-page/ui/welcome-page.component';
import { WelcomePageRoutingModule } from 'src/app/pages/welcome-page/domain/routes/welcome-page-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [WelcomePageComponent],
    imports: [
        CommonModule,
        WelcomePageRoutingModule,
        FormsModule
    ],
  exports: [WelcomePageComponent]
})
export class WelcomePageModule {
}
