import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title = 'Blips and Chitz';

  public hover(isHover: boolean) {
    if (isHover) {
      console.log(`isHover: ${isHover}`);
    }
  }
}
