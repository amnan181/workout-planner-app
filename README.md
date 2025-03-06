# React Native Expo (Assessment)

## Getting Started

This guide will help you set up and run the project on your local machine.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-project.git
   ```
2. Navigate to the project directory:
   ```sh
   cd your-project
   ```
3. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Project

#### Start the Expo development server

```sh
npm run start
# or
yarn start
```

#### Running on a Device or Emulator

- **Expo Go App (Recommended for quick testing)**

  - Install Expo Go on your Android/iOS device from the app store.
  - Scan the QR code from the terminal or Expo Developer Tools.

- **Android Emulator**
  ```sh
  npm run android
  ```
  ```sh
  yarn android
  ```
- **iOS Simulator (macOS required)**
  ```sh
  npm run ios
  ```
  ```sh
  yarn ios
  ```
- **Web Preview**
  ```sh
  npm run web
  ```
  ```sh
  yarn web
  ```

### Environment Variables

Create a `.env` file in the root directory and configure necessary environment variables:

```sh
API_URL=https://your-api-url.com
OTHER_ENV_VAR=value
```

Ensure you have `react-native-dotenv` installed if using environment variables.

### Building the Project

To prebuild the project before running:

```sh
npm run prebuild
```

```sh
yarn prebuild
```

### Linting and Formatting

- To check for linting issues:
  ```sh
  npm run lint
  ```
  ```sh
  yarn lint
  ```
- To format code:
  ```sh
  npm run format
  ```
  ```sh
  yarn format
  ```

### Troubleshooting

- **Clear Cache**:
  ```sh
  expo start -c
  ```
- **Reinstall Node Modules**:
  ```sh
  rm -rf node_modules && npm install
  ```
- **Check Expo Doctor**:
  ```sh
  npx expo doctor
  ```

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

### License

This project is licensed under the MIT License.
