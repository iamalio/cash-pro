import { Component } from '@angular/core';

@Component({
  selector: 'spent',
  template: `
  <div>
  <form class="newspent-form">
  <select class="input">
    <option value="" selected disabled hidden>What did you buy?</option>
      <option value="Food">Food</option>
      <option value="Clothes">Clothes</option>
      <option value="Housing">Housing</option>
      <option value="Transportation">Transportation</option>
      <option value="Entertainment">Entertainment</option>
  </select>
  <input class="input" type="number" placeholder="Amount?">
  <input class="input" type="date" placeholder="When?">
  <button class="btn btn-danger">Add Expense</button>
</form>
</div>
  `,
  styleUrls: [ './spent.component.css' ]
})
export class SpentComponent  {
  
}