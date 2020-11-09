import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from 'src/app/ui/app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/domain/routes/app-routing.module';
import { WelcomePageModule } from 'src/app/pages/welcome-page/domain/welcome-page.module';
import { PilotPageModule } from 'src/app/pages/pilot-page/domain/pilot-page.module';

const PAGE_IMPORTS = [
  WelcomePageModule,
  PilotPageModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ...PAGE_IMPORTS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
