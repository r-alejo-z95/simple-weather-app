# Simple Weather App

This project is a simple weather application developed as a Solo Project for my application to [Chingu.io](https://chingu.io). The app allows users to view the current weather conditions for different locations. It was built using modern web development technologies and practices.

## Features

- **Current Weather Information**: Displays the current temperature, weather conditions, and an icon representing the weather.
- **Location Search**: Users can search for different locations to view their weather information.
- **Unit Toggle**: Users can switch between Celsius and Fahrenheit units for temperature display.
- **Responsive Design**: The app is fully responsive and works well on both desktop and mobile devices.

## Technologies Used

- **React**: The app is built using React, a popular JavaScript library for building user interfaces.
- **Tailwind CSS**: Tailwind CSS is used for styling the app, providing a utility-first approach to design.
- **Shadcn/ui**: The app has a couple of components from the Shadcn library.
- **Weather API**: The app fetches weather data from the [WeatherAPI](https://weatherapi.com/), allowing users to get real-time weather information.
- **Vite**: Vite is used as the build tool, providing fast and efficient development and build processes.

## Concepts Used

- **State Management**: Managing state in a React application using hooks like `useState` and `useEffect`.
- **API Integration**: Fetching data from an external API and handling asynchronous operations.
- **Responsive Design**: Implementing responsive design principles to ensure the app works well on different screen sizes.
- **Component-Based Architecture**: Building a modular and maintainable codebase using React components.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/simple-weather-app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd simple-weather-app
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
4. Create a .env file in the root directory and add your WeatherAPI key:
   ```sh
   VITE_WEATHER_API_KEY=your_api_key_here
   ```
5. Start the development server:
   ```sh
   npm run dev
   ```

## Usage

1. Open the app in your browser.
2. Click on the location change it.
3. View the current weather information.
4. Toggle between Celsius and Fahrenheit units using the unit toggle button.
