import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directives-demo';
  condition = false;
  // boxColor = 'lightblue';
  boxColor = null;
  message: string | null = null;
  isInside: boolean = false;
  
  toggleCondition() {
    this.condition = !this.condition;
  }
  
  onClickedOutside() {
    this.message = 'You clicked OUTSIDE the box!';
    this.isInside = false;
  }

  onClickedInside() {
    console.log('Clicked inside!');
    this.message = 'You clicked INSIDE the box!';
    this.isInside = true;
  }
}
