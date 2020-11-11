import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import { IpcRenderer } from 'electron';

declare var electron: any;

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomePageComponent implements OnInit {

  isActivated = false;
  pilotAddress: string;

  @ViewChild('buttonElement')
  buttonElement: ElementRef<HTMLButtonElement>;

  @ViewChild('inputElement')
  inputElement: ElementRef<HTMLInputElement>;

  @HostBinding('class.welcome-page')
  private readonly classWelcomePage = true;

  private ipc: IpcRenderer;

  constructor(
    private readonly renderer: Renderer2,
    private readonly changeDetector: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.setIpcRenderer();
  }

  onButtonClick(): void {
    if (!this.pilotAddress) {
      return;
    }

    if (this.isActivated) {
      this.renderer.removeClass(this.buttonElement.nativeElement, 'welcome-page__button--active');
      this.inputElement.nativeElement.disabled = false;
      this.turnOffServer();
    } else {
      this.renderer.addClass(this.buttonElement.nativeElement, 'welcome-page__button--active');
      this.inputElement.nativeElement.disabled = true;
      this.turnOnServer();
    }

    this.isActivated = !this.isActivated;
    this.changeDetector.detectChanges();
  }

  private setIpcRenderer(): void {
    if (electron) {
      this.ipc = electron.ipcRenderer;
    } else {
      console.warn('Sth go wrong');
    }
  }

  private turnOnServer(): void {
    this.ipc.sendSync('turnon', this.pilotAddress);
  }

  private turnOffServer(): void {
    this.ipc.sendSync('turnoff');
  }
}
