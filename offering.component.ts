import { Component } from '@angular/core';
import * as siteData from '../../data.json';

@Component({
  selector: 'app-offering',
  imports: [],
  templateUrl: './offering.component.html',
  styleUrls: ['./offering.component.css']
})
export class OfferingComponent {
  data: any = (siteData as any).default;
}
