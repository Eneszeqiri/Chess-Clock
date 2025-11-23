# Chess-Clock

A React Native chess clock application built with Expo. Track time for two players with customizable time controls and increments.

## Prerequisites

Before running this app, make sure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** (comes with Node.js)
- **Expo CLI** (optional, but recommended)
- **Expo Go app** on your phone:
  - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
  - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

## Installation

1. **Clone or navigate to the project directory:**
   ```powershell
   cd Chess-Clock
   ```

2. **Install dependencies:**
   ```powershell
   npm install
   ```
   or if you're using yarn:
   ```powershell
   yarn install
   ```

## Running on Your Phone

### Method 1: Using Expo Go (Recommended for Development)

1. **Start the Expo development server:**
   ```powershell
   npm start
   ```
   or
   ```powershell
   expo start
   ```

2. **On your phone:**
   - Open the **Expo Go** app
   - Make sure your phone and computer are on the same Wi-Fi network
   - Scan the QR code that appears in your terminal or browser
     - **iOS**: Use the Camera app to scan the QR code
     - **Android**: Use the Expo Go app to scan the QR code

3. The app will load on your phone!

### Method 2: Using Development Build (Android/iOS)

**For Android:**
```powershell
npm run android
```

**For iOS (macOS only):**
```powershell
npm run ios
```

This will open the app in an Android emulator or iOS simulator if you have them set up.

### Method 3: Using Tunnel (If on Different Networks)

If your phone and computer are on different networks, you can use Expo's tunnel:

```powershell
npm start -- --tunnel
```

Note: This requires an Expo account (free to create).

## Troubleshooting

- **Can't connect to the development server?**
  - Ensure your phone and computer are on the same Wi-Fi network
  - Try using the tunnel method: `npm start -- --tunnel`
  - Check that your firewall isn't blocking the connection

- **QR code not scanning?**
  - Make sure you have the latest version of Expo Go installed
  - Try typing the connection URL manually in the Expo Go app

- **App not loading?**
  - Clear the Expo Go app cache and try again
  - Restart the development server: Press `r` in the terminal to reload

- **Dependencies issues?**
  - Delete `node_modules` and `package-lock.json`, then run `npm install` again:
    ```powershell
    Remove-Item -Recurse -Force node_modules, package-lock.json
    npm install
    ```

## Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android emulator/device
- `npm run ios` - Run on iOS simulator/device (macOS only)
- `npm run web` - Run in web browser

## Features

- Two-player chess clock with customizable time controls
- Time increment support
- Pause and reset functionality
- Settings dialog for time configuration
