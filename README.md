# web-offering

Click [here](/CHANGELOG.md) for the CHANGE LOG

Click [here](/CLIFF_NOTES.md) for the CLIFF NOTES

## Offerings

This project includes the following components related to offerings:

### OfferingComponent

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-offering',
  templateUrl: './offering.component.html',
  styleUrls: ['./offering.component.css']
})
export class OfferingComponent {

}
```

The `OfferingComponent` is an Angular component responsible for handling offerings. It's defined in the `offering.component.ts` file.

### Testing OfferingComponent

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferingComponent } from './offering.component';

describe('OfferingComponent', () => {
  let component: OfferingComponent;
  let fixture: ComponentFixture<OfferingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfferingComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OfferingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}
```

This file contains tests for the `OfferingComponent` to ensure its functionality. It is part of the testing suite for this component.

### HTML Template for Offerings

```html
<section class="container-fluid mt-4 offerings">
  <div class="row">
    <div class="col-md-12 pt-5">
      <h2 class="text-center text-white">Offerings</h2>
    </div>
  </div>
</section>
```

This HTML code is part of the `offering.component.html` file and defines the structure for the offerings section.

For more detailed information, please refer to the respective files in this repository.
