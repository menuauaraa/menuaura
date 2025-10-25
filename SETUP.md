# MenuAura - Quick Setup Guide

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Production Build

```bash
npm run build
npm start
```

## Project Features

### 1. 3D Animated Background
- Interactive Three.js scene with floating geometric shapes
- Mouse-responsive camera movement
- Animated particles and dynamic lighting

### 2. Glass Morphism Design
- Modern glassmorphic UI components
- Backdrop blur effects
- Smooth transitions and hover effects

### 3. Countdown Timer
- Dynamic countdown to launch date (30 days from now)
- Animated number transitions
- Customizable launch date

### 4. Email Subscription
- Beautiful form with loading states
- Success animation
- Ready for backend integration

### 5. QR Code Animation
- Animated QR code representation
- Floating food icons
- Scanning line effect

### 6. Feature Showcase
- 6 key features with icons
- Hover animations
- Gradient effects

## Customization Guide

### Change Colors

Edit [tailwind.config.ts](tailwind.config.ts):

```typescript
colors: {
  primary: { /* Your colors */ },
  accent: { /* Your colors */ },
}
```

### Modify Launch Date

Edit [app/components/CountdownTimer.tsx](app/components/CountdownTimer.tsx):

```typescript
const launchDate = new Date('2025-12-31'); // Set your date
```

### Update Features

Edit [app/components/FeatureCards.tsx](app/components/FeatureCards.tsx):

```typescript
const features = [
  {
    icon: YourIcon,
    title: 'Your Feature',
    description: 'Description',
    gradient: 'from-color to-color',
  },
  // Add more features
];
```

### Connect Email Form

Edit [app/components/EmailSubscription.tsx](app/components/EmailSubscription.tsx):

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  // Add your API call here
  await fetch('/api/subscribe', {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
};
```

## File Structure

```
app/
├── components/
│   ├── ThreeBackground.tsx       # 3D scene
│   ├── CountdownTimer.tsx        # Countdown
│   ├── EmailSubscription.tsx     # Email form
│   ├── QRCodeAnimation.tsx       # QR animation
│   └── FeatureCards.tsx          # Features
├── styles/
│   └── globals.css               # Global styles
├── layout.tsx                    # App layout
├── page.tsx                      # Main page
└── loading.tsx                   # Loading state
```

## Performance Tips

1. **Image Optimization**: Use Next.js Image component for any images
2. **Font Loading**: Consider using next/font for custom fonts
3. **Code Splitting**: Components are already lazy-loaded
4. **Production Build**: Always test with `npm run build` before deploying

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Other Platforms

Build the project and deploy the `.next` folder:

```bash
npm run build
```

## Troubleshooting

### Three.js not rendering
- Check browser console for WebGL support
- Ensure window is defined (client-side only)

### Styles not applying
- Clear `.next` cache: `rm -rf .next`
- Restart dev server: `npm run dev`

### Build errors
- Update dependencies: `npm update`
- Clear node_modules: `rm -rf node_modules && npm install`

## Support

For issues or questions, please check the README.md or create an issue in the repository.

## Next Steps

1. Add your actual logo/branding
2. Connect email form to your backend
3. Add analytics tracking
4. Set up SEO metadata
5. Add social share images
6. Configure custom domain

Enjoy your MenuAura coming soon page!
