import { Component } from '@angular/core';

@Component({
  selector: 'madeTotals',
  template: `
  <section class="main">
  <p>This is what you have made up to now</p>
    
        <div>
          <p>Work</p>
          <p class="good-number">{{ workTotal }}</p>
        </div>
      <br>
        <div>
          <p>Gift</p>
          <p class="good-number">{{ giftTotal }}</p>
          <p>
        </div>
    
    <div>
      <p>Your grand total made is: <span class="good-number">{{ madeTotal }}</span></p>
    </div>
</section>
`,
  styleUrls: [ './madeTotals.component.css' ]
})
export class MadetotalsComponent  {

}