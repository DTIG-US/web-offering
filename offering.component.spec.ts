import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OfferingComponent } from './offering.component';
import * as siteData from '../../data.json';

describe('OfferingComponent', () => {
  let component: OfferingComponent;
  let fixture: ComponentFixture<OfferingComponent>;
  let host: HTMLElement;

  const offerings = (siteData as any).default.offerings as Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    url: string;
  }>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OfferingComponent);
    component = fixture.componentInstance;
    host = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  // ── Smoke ────────────────────────────────────────────────────────────────

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ── Data wiring ──────────────────────────────────────────────────────────

  it('should render exactly as many offering rows as data.json offerings', () => {
    const rows = host.querySelectorAll('.offering-row');
    expect(rows.length).toBe(offerings.length);
  });

  it('should render the correct title for each offering', () => {
    const titles = host.querySelectorAll<HTMLElement>('.offering-title');
    titles.forEach((el, i) => {
      expect(el.textContent?.trim()).toBe(offerings[i].title);
    });
  });

  it('should render the correct description for each offering', () => {
    const descs = host.querySelectorAll<HTMLElement>('.offering-desc');
    descs.forEach((el, i) => {
      expect(el.textContent?.trim()).toBe(offerings[i].description);
    });
  });

  it('should render the correct label/id for each offering', () => {
    const labels = host.querySelectorAll<HTMLElement>('.offering-label');
    labels.forEach((el, i) => {
      expect(el.textContent?.trim()).toBe(offerings[i].id);
    });
  });

  it('should render the correct image src for each offering', () => {
    const imgs = host.querySelectorAll<HTMLImageElement>('.offering-img');
    imgs.forEach((img, i) => {
      expect(img.getAttribute('src')).toBe(offerings[i].image);
    });
  });

  // ── Accessibility ────────────────────────────────────────────────────────

  it('should use the offering title as the image alt text', () => {
    const imgs = host.querySelectorAll<HTMLImageElement>('.offering-img');
    imgs.forEach((img, i) => {
      expect(img.getAttribute('alt')).toBe(offerings[i].title);
    });
  });

  it('should have an aria-label on the section element', () => {
    const section = host.querySelector('section');
    expect(section?.getAttribute('aria-label')).toBeTruthy();
  });

  // ── Layout: alternating row reversal ─────────────────────────────────────

  it('should apply .offering-row--reversed to every odd-indexed row (0-based)', () => {
    // The template uses `i % 2 !== 0` to alternate layout direction.
    // This prevents accidental removal of the alternating design pattern.
    const rows = host.querySelectorAll<HTMLElement>('.offering-row');
    rows.forEach((row, i) => {
      if (i % 2 !== 0) {
        expect(row.classList.contains('offering-row--reversed')).toBeTrue();
      } else {
        expect(row.classList.contains('offering-row--reversed')).toBeFalse();
      }
    });
  });
});


