import { Component } from '@angular/core';

interface Person {
  name: string;
  checkedIn: boolean;
  state: string | null;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title: string;
  showContent: boolean;
  persons: Person[] = [
    {
      checkedIn: true,
      name: 'Jeroen',
      state: null
    },
    {
      checkedIn: false,
      name: 'Bob',
      state: 'yey'
    }
  ];

  constructor() {
    this.title = 'Jeroen';
  }

  handleButtonClick(value: string) {
    alert('Button clicked! ' + value);
    this.showContent = true;
  }
}
