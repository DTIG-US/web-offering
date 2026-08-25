import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as siteData from '../../data.json';

@Component({
  selector: 'app-offering',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offering.component.html',
  styleUrls: ['./offering.component.css']
})
export class OfferingComponent {
  data: any = (siteData as any).default;
}
