# Premium NYC Dental Website Implementation Guide

## 1) Full Sitemap
- Home (`/index.html`)
- Service Page Template (`/service-template.html`)
  - Future child pages: implants, invisalign, smile-makeover, root-canal, whitening
- About / Doctor (`/about.html`)
- Reviews & Smile Gallery (`/reviews-gallery.html`)
- Pricing & Financing (`/pricing-financing.html`)
- Contact / Booking (`/contact-booking.html`)
- FAQ Hub (`/faq.html`)
- Blog / Resources (`/blog.html`)
- Technology / Clinic Tour (`/technology-tour.html`)

## 2) Page Wireframe Structure
### Home (Decision Page)
1. Sticky header with persistent **Book Appointment** CTA
2. Hero: value proposition + primary and secondary CTAs + clinic image placeholder
3. Trust bar: experience, credentials, patients, rating
4. Services overview (top 5)
5. Why choose us + urgency microcopy card
6. Before/After gallery preview
7. Testimonials preview with star visuals
8. Insurance/financing logos strip
9. FAQ teaser cards
10. Final conversion CTA band
11. Footer (contact, hours, map, nav links)

### Service Template
1. Outcome headline
2. Problem → solution narrative
3. Who it’s for
4. Benefits
5. Step-by-step process
6. Recovery/comfort
7. Before/after placeholder
8. Pricing guidance
9. FAQs
10. Booking CTA block

### Remaining pages
- About: doctor story, credentials, philosophy, awards, memberships, clinic visuals
- Reviews/Gallery: video placeholders, review cards, filterable case grid
- Pricing: starting ranges, cost factors, insurance + financing, new patient offer
- Contact: short booking form, click-to-call, map placeholder, emergency + directions
- FAQ Hub: grouped categories
- Blog: SEO placeholder cards
- Technology Tour: equipment, sterilization, comfort, digital workflow, photos

## 3) Suggested Copy for Key Sections
- Hero headline: **“Confident smiles, long-term oral health, and a dental experience that feels effortless.”**
- Hero subcopy: Outcome-driven, NYC lifestyle aligned, credibility-forward.
- Trust cue near form: **“Usually replies within 15 minutes during business hours.”**
- Urgency microcopy: **“New patient consult slots this week: 7.”**
- Final CTA: **“Get expert guidance on your next best step.”**

## 4) Component Breakdown for Development
- `Header` (sticky, nav, CTA)
- `TopStrip` (location + phone)
- `HeroSection`
- `TrustStatsGrid`
- `ServicesCardGrid`
- `DifferentiatorSection`
- `BeforeAfterPreview`
- `TestimonialsGrid`
- `InsuranceFinancingBadges`
- `FAQTeaser`
- `CTABand`
- `BookingForm`
- `FooterWithMap`
- `StickyFloatingCTA`

## 5) SEO Meta Title & Description Examples
- Home:
  - **Title:** `Luxury Dental Care NYC | Midtown Modern Dentistry`
  - **Description:** `Modern, high-trust dental care in New York. Implants, Invisalign, smile makeovers, and preventative care with a comfort-first approach.`
- Implants page (future):
  - **Title:** `Dental Implants in NYC | Natural-Looking, Lasting Results`
  - **Description:** `Replace missing teeth with precision implants in NYC. Get transparent pricing, expert planning, and comfort-first care.`
- Invisalign page (future):
  - **Title:** `Invisalign in New York | Straighten Your Smile Discreetly`
  - **Description:** `Custom Invisalign treatment for NYC adults. See expected timeline, costs, and suitability in one consultation.`
