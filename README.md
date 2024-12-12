# @zaujulio/components

## Description

**@zaujulio/components** is a private shared components library designed for use in modern React projects. It includes reusable components, styles, utilities, and services to streamline development and maintain a consistent UI/UX across applications.

---

## Features

- **Reusable React components**: Build robust UIs with pre-designed components.
- **Storybook integration**: Visualize and test components in isolation.
- **TypeScript support**: Type-safe development with robust type definitions.
- **Custom utilities and services**: Simplify your codebase with built-in tools.
- **CSS module support**: Encapsulated styles for better maintainability.

---

## Scripts

| Script            | Description                                            |
| ----------------- | ------------------------------------------------------ |
| `build`           | Compiles the library and builds the production bundle. |
| `serve`           | Serves the static Storybook build locally.             |
| `test`            | Runs all test cases.                                   |
| `test:watch`      | Runs tests in watch mode.                              |
| `test:ui`         | Opens the interactive test runner.                     |
| `typecheck`       | Type-checks the project without emitting output.       |
| `storybook`       | Starts the Storybook development server.               |
| `build-storybook` | Builds the Storybook static assets.                    |

---

## Installation

This library is private and cannot be installed from a public package registry. To include it in your project, clone the repository and install its dependencies using:

```bash
npm install
```

---

## Usage

Import the components and utilities into your project as follows:

```tsx
import { Button } from '@zaujulio/components';

const App = () => (
  <Button label="Click Me" onClick={() => alert('Button clicked!')} />
);

export default App;
```

---

## Development

To start the development environment, run:

```bash
npm run storybook
```

This command launches Storybook to visualize and test components in isolation.

---

## Testing

Run the tests using:

```bash
npm test
```

For interactive test runs:

```bash
npm run test:ui
```

---

## Build

Build the library for production using:

```bash
npm run build
```

---

## License

This project is licensed as **MIT** and is open for public use.

---

## Contributing

This project is managed internally. If you are part of the development team, ensure you:

- Follow coding standards.
- Write tests for any new components or utilities.
- Document new features and changes in Storybook.

---

## Contact

For any issues or feature requests, please contact the project maintainer.

---
