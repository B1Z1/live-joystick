import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomePageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    console.log('welcome');
  }

}
