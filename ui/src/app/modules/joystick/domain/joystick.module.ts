import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoystickPadComponent } from 'src/app/modules/joystick/ui/joystick-pad/joystick-pad.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { JoystickComponent } from 'src/app/modules/joystick/ui/joystick.component';
import { JoystickTextComponent } from 'src/app/modules/joystick/ui/joystick-text/joystick-text.component';
import { FormsModule } from '@angular/forms';
import { JoystickClearButtonComponent } from 'src/app/modules/joystick/ui/joystick-clear-button/joystick-clear-button.component';
import { JoystickApiService } from 'src/app/modules/joystick/domain/api/joystick-api.service';

const socketConfig: SocketIoConfig = {
  url: 'http://192.168.0.15:3000',
  options: {
    withCredentials: false
  }
};

@NgModule({
  declarations: [JoystickComponent, JoystickPadComponent, JoystickTextComponent, JoystickClearButtonComponent],
  providers: [JoystickApiService],
  imports: [
    CommonModule,
    SocketIoModule.forRoot(socketConfig),
    FormsModule
  ],
  exports: [
    JoystickComponent
  ]
})
export class JoystickModule {
}
