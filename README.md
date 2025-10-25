# MenuAura - Coming Soon Page

A stunning coming soon page for MenuAura, a revolutionary digital menu system using QR codes.

## Features

- **3D Animated Background**: Interactive Three.js background with floating geometric shapes
- **Glass Morphism Effects**: Modern glassmorphic UI design throughout
- **Countdown Timer**: Dynamic countdown to launch date
- **Email Subscription**: Capture early adopters with email form
- **Animated QR Code**: Eye-catching QR code animation
- **Feature Showcase**: Beautiful cards highlighting key features
- **Responsive Design**: Optimized for all devices
- **Smooth Animations**: Powered by Framer Motion

## Tech Stack

- **Next.js 16**: React framework for production
- **TypeScript**: Type-safe development
- **Tailwind CSS 4**: Utility-first CSS framework
- **Three.js**: 3D graphics and animations
- **Framer Motion**: Advanced animations library
- **React Icons**: Beautiful icon library

## Color Theme

- **Primary**: Purple/Magenta gradient (#d946ef - #a21caf)
- **Accent**: Orange gradient (#f97316 - #ea580c)
- **Background**: Dark navy to slate gradient
- **Glass Effects**: Semi-transparent white overlays with backdrop blur

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the page.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
menuaura_comminsoon/
├── app/
│   ├── components/
│   │   ├── ThreeBackground.tsx     # 3D animated background
│   │   ├── CountdownTimer.tsx      # Launch countdown
│   │   ├── EmailSubscription.tsx   # Email capture form
│   │   ├── QRCodeAnimation.tsx     # Animated QR code
│   │   └── FeatureCards.tsx        # Feature showcase
│   ├── styles/
│   │   └── globals.css             # Global styles and utilities
│   ├── layout.tsx                  # Root layout
│   └── page.tsx                    # Main landing page
├── public/                         # Static assets
├── tailwind.config.ts              # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies

```

## Customization

### Change Launch Date

Edit `app/components/CountdownTimer.tsx`:

```typescript
// Set launch date (currently 30 days from now)
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 30);
```

### Modify Color Theme

Edit `tailwind.config.ts` to customize the color palette.

### Update Features

Edit `app/components/FeatureCards.tsx` to add/modify features.

## Performance

- Optimized Three.js rendering
- Lazy loading of components
- Responsive images
- Minimized bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC

## Author

MenuAura Team
