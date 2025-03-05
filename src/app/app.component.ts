import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directives-demo';
  condition = false;
  boxColor = 'lightblue';
  message = '';
  
  toggleCondition() {
    this.condition = !this.condition;
  }
  
  onClickedOutside() {
    this.message = 'Clicked outside!';
    setTimeout(() => this.message = '', 3000);
  }
}
