
# QR Code Component — React Native

A mobile implementation of the [Frontend Mentor QR Code Component challenge](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H), built with **React Native, Expo, and JavaScript**.

## Overview

This project recreates the Frontend Mentor QR Code Component as a native mobile application for iOS and Android.

It is part of my learning approach of building the same UI challenge in three different environments:

1. **HTML & CSS** — Understanding layout and styling fundamentals.
2. **React** — Practicing JSX, components, and JavaScript-based styling.
3. **React Native** — Applying familiar frontend concepts to native mobile development.

The goal is to reinforce core concepts through repetition and understand how they transfer between web and mobile development.

## Screenshot

<p align="center">
  <img
    src="./assets/Screenshot_20261109_031834_Expo%20Go.jpg"
    alt="QR Code Component running in Expo Go"
    width="300"
  />
</p>

## Built With

- React Native
- Expo
- JavaScript (JSX)
- React Native StyleSheet
- Flexbox
- Expo Google Fonts (Outfit)

## Features

- QR code image with rounded corners
- Centered card layout using React Native Flexbox
- Custom Outfit typography with regular and bold font weights
- Consistent spacing, colors, and dimensions based on the original design
- Native UI components using `View`, `Text`, and `Image`

## Getting Started

### Prerequisites

- Node.js and npm
- Expo Go installed on an iOS or Android device

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/glovatskiy/frontend-mentor-challenges.git
```

**2. Navigate to the project**

```bash
cd frontend-mentor-challenges/react-native/qr-code-component
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npx expo start
```

**5. Run the application**

Open Expo Go on your mobile device and scan the QR code displayed in the terminal.

Your computer and mobile device should be connected to the same Wi-Fi network.

## What I Learned

### React Native Fundamentals

- Using `View` instead of HTML `<div>` elements
- Rendering text with `Text` instead of HTML headings and paragraphs
- Displaying local images using `Image` and the `source` prop
- Understanding the differences between web and native components

### Styling and Layout

- Creating styles with `StyleSheet.create()`
- Applying styles through the `style` prop
- Using Flexbox for horizontal and vertical alignment
- Working with padding, gaps, dimensions, and border radii
- Understanding React Native's default column-based Flexbox layout
- Understanding how React Native styling differs from browser CSS

### Fonts and React Hooks

- Installing Google Fonts through Expo
- Loading custom fonts using the `useFonts` hook
- Applying different font families to headings and paragraphs
- Conditionally rendering the interface after fonts have loaded

## Related Implementations

This challenge is part of my [Frontend Mentor Challenges monorepo](https://github.com/glovatskiy/frontend-mentor-challenges), where I explore different frontend technologies by recreating the same designs.

The three implementations demonstrate how common UI concepts can be applied across HTML/CSS, React, and React Native.

## Acknowledgments

- Challenge and design by [Frontend Mentor](https://www.frontendmentor.io/)
- Built with [React Native](https://reactnative.dev/) and [Expo](https://expo.dev/)
- Typography provided by [Google Fonts — Outfit](https://fonts.google.com/specimen/Outfit)
