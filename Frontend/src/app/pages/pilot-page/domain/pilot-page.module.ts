import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilotPageComponent } from 'src/app/pages/pilot-page/ui/pilot-page.component';
import { JoystickModule } from 'src/app/modules/joystick/domain/joystick.module';


@NgModule({
  declarations: [PilotPageComponent],
  imports: [
    CommonModule,
    JoystickModule
  ],
  exports: [PilotPageComponent]
})
export class PilotPageModule {
}
