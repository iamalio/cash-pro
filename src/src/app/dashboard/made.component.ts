import { Component } from '@angular/core';

@Component({
  selector: 'made',
  template: `
  
  <form class="newmade-form">
  <select class="input">
    <option value="" selected disabled hidden>Where did it come from?</option>
      <option value="Work">Work</option>
      <option value="Gift">Gift</option>
  </select>
  <input class="input" type="number" placeholder="Amount?">
  <input class="input" type="date" placeholder="When?">
  <button class="btn btn-success">Add Income</button>
</form>

`,
  styleUrls: [ './made.component.css' ]
})
export class MadeComponent  {

}