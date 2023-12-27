import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewCompComponent } from './new-comp/new-comp.component';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [CommonModule, RouterOutlet,NewCompComponent],
  template: `
  <div>
    <textarea class="class1">Marvellous Infosystems</textarea>
    <br>
    <input type="text" placeholder="This is textfield">
  </div>
  <app-new-comp></app-new-comp>
`,
styles: [`
.class1 {
  color: blue;
}

`]
})
export class AppComponent {
  title = 'A6';
}
