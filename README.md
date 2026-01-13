# Weather App 🌤️

A simple React Native weather application built with Expo that fetches real-time weather data from the OpenWeather API.

## Features

* Displays current weather for any city
* Shows temperature in Celsius
* Displays weather description (sunny, rainy, foggy, etc.)
* Loading indicator while fetching data
* Error handling for API failures
* Clean and professional UI

## Tech Stack

* **React Native** - Cross-platform mobile framework
* **Expo** - Development platform for React Native
* **OpenWeather API** - Real-time weather data
* **React Hooks** - State management (useState, useEffect)

## Getting Started

### Prerequisites

* Node.js installed
* Expo Go app (download from App Store or Google Play)
* OpenWeather API key (free account at [openweathermap.org](https://openweathermap.org))

### Installation

1. **Clone this repository**
```bash
git clone https://github.com/YOUR-USERNAME/weather-app.git
cd weather-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Get your API Key**
   * Go to [openweathermap.org](https://openweathermap.org)
   * Sign up for a free account
   * Go to "My API Keys" and copy your key
   * Wait 10-15 minutes for it to activate

4. **Add your API key**
   * Open `App.js`
   * Replace `'REPLACE_ME'` with your actual API key

5. **Start the app**
```bash
npx expo start
```

6. **Run on your device**
   * **iPhone:** Open Camera app, scan the QR code, tap the notification
   * **Android:** Open Expo Go app, tap the QR icon, scan the QR code

## Project Structure
```
weather-app/
├── app/
│   ├── App.js          # Main weather app component
│   └── index.js        # Entry point
├── assets/             # Images and icons
├── app.json            # Expo configuration
├── package.json        # Dependencies
└── .gitignore          # Git ignore file
```

## How It Works

1. App launches and immediately fetches weather data for Lahore
2. While loading, displays a loading spinner
3. Once data arrives, displays:
   * City name (large bold text)
   * Current temperature (very large text)
   * Weather description
4. If an error occurs, displays error message

## Customization

Want to change the city? Open `app/App.js` and modify:
```javascript
const CITY = 'Lahore'; // Change this to any city name
```

## What I Learned

This project taught me:

* Fetching data from external APIs using `fetch()`
* Handling asynchronous operations with async/await
* React Hooks (useState, useEffect)
* Error handling with try/catch
* React Native styling with Flexbox
* Managing loading and error states in UI

## Future Improvements

- [ ] Add search functionality to change cities
- [ ] Display more weather details (humidity, wind speed, etc.)
- [ ] Add weather icons based on conditions
- [ ] Save favorite cities
- [ ] Add temperature unit toggle (Celsius/Fahrenheit)

## Resources

* [React Native Docs](https://reactnative.dev/)
* [Expo Docs](https://docs.expo.dev/)
* [OpenWeather API Docs](https://openweathermap.org/api)


## License

This project is open source and available under the [MIT License](LICENSE).
