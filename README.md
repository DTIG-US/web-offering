# web-offering — Product Offerings Component

This submodule contains the `OfferingComponent` for the **IH Hand Sanitation** portal. It renders an alternating-layout product and service feature grid, driven by `data.json`.

- [CHANGELOG](CHANGELOG.md)
- [CLIFF NOTES](CLIFF_NOTES.md)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Layout & Styling](#layout--styling)
- [Data Structure](#data-structure)
- [Dependencies](#dependencies)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

The `OfferingComponent` renders a full-width section of product and service rows. Each row contains an image column (33%) and a description column (67%) that alternate left/right alignment on desktop screens, creating an elegant feature matrix layout.

Files in this submodule:

| File | Purpose |
| --- | --- |
| `offering.component.ts` | Component class — loads `data.json` and exposes offering rows |
| `offering.component.html` | Template — iterates offering rows with image and text columns |
| `offering.component.css` | Component-scoped styles (alternating alignment, glassmorphism, responsive layout) |
| `offering.component.spec.ts` | Unit tests (Karma + Jasmine) |

---

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/DTIG-US/web-offering.git
   cd web-offering
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

> [!NOTE]
> In normal use, this component is consumed as a Git submodule of `ih-hand-sanitation-www`. See the [parent README](https://github.com/DTIG-US/ih-hand-sanitation-www) for the full setup workflow.

---

## Usage

Add the selector to your root application template (`app.html`):

```html
<app-offering></app-offering>
```

Import the component in your root `App` component (Angular v20+ standalone — no NgModule required):

```typescript
import { Component } from '@angular/core';
import { OfferingComponent } from './web-offering/offering.component';

@Component({
  selector: 'app-root',
  imports: [OfferingComponent],
  templateUrl: './app.html',
})
export class App {}
```

---

## Layout & Styling

The component uses the following visual design patterns (documented in detail in [`doc/README_AligningComponents.md`](https://github.com/DTIG-US/ih-hand-sanitation-www/blob/main/doc/README_AligningComponents.md) in the parent repo):

- **Transparent background** — allows the parent page's blue/purple gradient to show through, contrasting with the dark glassmorphic Partners section above and the solid Footer below.
- **Alternating text alignment** — on desktop (`min-width: 768px`), odd rows align text left and even rows align text right.
- **Uniform row height** — all rows are `260px` tall for visual consistency.
- **Accessible landmark** — the section uses `aria-label="Product Offerings"` for screen reader compatibility.
- **Responsive images** — `max-width: 85%` and `object-fit: contain` ensure images scale cleanly inside fixed-height containers.

---

## Data Structure

The component reads `../../data.json`. The expected structure for the offerings section:

```json
{
  "offerings": [
    {
      "image": "path/to/product-image.png",
      "title": "Offering Title",
      "description": "Short description of the product or service."
    }
  ]
}
```

---

## Dependencies

| Package | Purpose |
| --- | --- |
| `bootstrap` | Grid layout and utility classes |
| `@angular/common` | Structural directives (control flow via `@for`, `@if`) |

---

## Testing

Run the unit test suite with:

```bash
ng test
```

---

## Contributing

1. Fork this repository.
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Description of changes"`
4. Push to your fork: `git push origin feature/your-feature-name`
5. Open a pull request to `DTIG-US/web-offering`.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.
