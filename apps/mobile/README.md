# KOMPLEX Mobile App 📱

The mobile application for KOMPLEX - an educational platform for learning and discovery.

## Getting Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the development server

   ```bash
   npx expo start
   ```

## Development

This project uses:

- [Expo](https://expo.dev) for cross-platform development
- [Expo Router](https://docs.expo.dev/router/introduction/) for file-based routing
- TypeScript for type safety

### Project Structure

```
app/
├── (tabs)/          # Tab navigation screens
│   ├── index.tsx    # Home screen
│   ├── explore.tsx  # Explore screen
│   └── _layout.tsx  # Tab layout configuration
├── modal.tsx        # Modal screen
└── _layout.tsx      # Root layout

components/
├── themed-*.tsx     # Themed components
└── ui/              # UI components
```

## Building for Production

- **Android**: `npx expo build:android`
- **iOS**: `npx expo build:ios`
- **Web**: `npx expo build:web`

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
