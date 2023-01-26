import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `<div>
    <h1>{{ pageTitle }}</h1>
    <div>Not my first component</div>
  </div>`,
})
export class AppComponent {
  pageTitle: string = 'Mikes Acme Product Management';
}
