
# Calculator App

This project is a simple desktop calculator application built using Electron. It demonstrates how to create a basic calculator with an embedded HTML interface and JavaScript functionality, wrapped in an Electron desktop application.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division.
- A clear button to reset the display.
- Responsive user interface with modern button styling.
- Built with embedded HTML and CSS, allowing for a single file setup.

## Requirements

- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- [Electron](https://www.electronjs.org/)

## Getting Started

Follow these instructions to get the Electron Calculator App up and running on your local machine.

### 1. Clone the Repository

Clone the project to your local machine using the following command:

```bash
git clone https://github.com/Umar9823/CalculatorApp.git
```

Navigate to the project directory:

```bash
cd electron-calculator-app
```

### 2. Install Dependencies

Install the required dependencies by running:

```bash
npm install
```

This will install `electron` and other necessary packages specified in the `package.json` file.

### 3. Run the Application

To start the application, run the following command:

```bash
npm start
```

This will launch the calculator app in an Electron window.

## Packaging the Application

To create an executable file (`.exe`) for the application, follow these steps:

1. **Install `electron-builder`**:

   Make sure you have `electron-builder` set up in your `devDependencies`. It should already be included in the `package.json` file:

   ```json
   "devDependencies": {
       "electron": "^33.0.2",
       "electron-builder": "^25.1.8"
   }
   ```

2. **Configure the `package.json`**:

   Ensure the `package.json` includes the following configuration for building the app:

   ```json
   "scripts": {
       "start": "electron .",
       "build": "electron-builder"
   },
   "build": {
       "appId": "com.example.calculatorapp",
       "win": {
           "target": "nsis",
           "icon": "icon.ico"
       },
       "nsis": {
           "oneClick": false,
           "perMachine": true,
           "allowToChangeInstallationDirectory": true,
           "createDesktopShortcut": true
       }
   }
   ```

3. **Run the Build Command**:

   To create the executable, run:

   ```bash
   npm run build
   ```

   The built executable can be found in the `dist` folder.

## Project Structure

The basic structure of the project is as follows:

```
electron-calculator-app/
├── index.js        # Main Electron script that creates the window
├── package.json   # Project configuration and dependencies
└── README.md      # Documentation for the project
```

The `main.js` file contains the code for setting up the Electron window and embedding the HTML-based calculator.

## Code Explanation

### `index.js`

The `index.js` file creates an Electron window, loads an embedded HTML string as the content, and defines basic window behaviors (like closing the app when all windows are closed).

### HTML and CSS

The calculator interface is defined directly within the JavaScript file using a data URL format. It includes:

- **Basic HTML structure** for the calculator.
- **CSS styling** to make the calculator visually appealing and user-friendly.
- **JavaScript functions** for performing calculations and clearing the display.

## Dependencies

- [Electron](https://www.electronjs.org/) - For creating the desktop app.
- [Electron Builder](https://www.electron.build/) - For packaging the application into an executable format.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. Any contributions to improve the functionality or styling are welcome.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
