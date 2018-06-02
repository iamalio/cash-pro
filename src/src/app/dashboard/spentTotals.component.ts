import { Component } from '@angular/core';

@Component({
  selector: 'spentTotals',
  template: `
  <section class="main">
<p>This is what you have spent up to now</p>
      <div>
        <p>Food</p>
        <p class="bad-number">{{ foodTotal }}</p>
      </div>
    <br>
      <div>
        <p>Clothes</p>
        <p class="bad-number">{{ clothesTotal }}</p>
      </div>
    <br>
      <div>
        <p>Housing</p>
        <p class="bad-number">{{ housingTotal }}</p>
      </div>
      <div>
        <p>Transportation</p>
        <p class="bad-number">{{ transportTotal }}</p>
      </div>
      <div>
        <p>Entertainment</p>
        <p class="bad-number">{{ entertainTotal }}</p>
      </div>
 
  <div>
    <p>Your grand total spent is: <span class="bad-number"></span></p>
  </div>
   </section>
  `,
  styleUrls: [ './spentTotals.component.css' ]
})
export class SpenttotalsComponent  {
  
}