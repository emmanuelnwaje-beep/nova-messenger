# NOVA Messenger — UI Starter

NOVA is a cross-platform messaging application concept built with Expo, React Native, TypeScript and Expo Router.

## Important status notice

This ZIP is the **front-end foundation only**. It contains navigation and interface screens. It does not yet provide:
- Real account creation or email verification
- Password storage or authentication
- NOVA ID allocation
- Live messaging or message delivery
- End-to-end encryption
- Voice/video calling
- A production backend

The login and registration buttons deliberately explain that the backend is not connected. Do not enter real passwords into this starter.

## Project structure

- `app/` — Expo Router screens
- `src/components/` — shared UI components
- `src/theme/` — NOVA dark theme tokens

## Run on a computer with Node.js

1. Install Node.js LTS.
2. Extract this ZIP.
3. Open a terminal in the `NOVA` folder.
4. Run `npm install`.
5. Run `npx expo install --fix` to align native package versions with the installed Expo SDK.
6. Run `npx expo start`.
7. Use Expo Go for basic UI preview, or a development build when native modules are introduced.

For web preview, run `npx expo start --web`.

## Android phone workflow

Acode can edit the source files, but it does not compile native iOS/Android apps. For a phone-only workflow, use a cloud development environment with Node.js and Git support, or use Expo Snack for small isolated experiments. Full native Matrix encryption will require a custom development build.

## Next engineering milestones

1. Create a GitHub repository and commit this starter.
2. Confirm the Expo project runs on web and Android.
3. Build the real identity service: email verification, username rules and collision-safe NOVA IDs.
4. Deploy a Matrix homeserver with PostgreSQL and HTTPS.
5. Integrate the supported Matrix SDK separately for web and native mobile.
6. Implement and test device verification, key backup and encrypted conversations.
7. Conduct independent security review before claiming production-grade E2EE.

## Before public release

Choose a domain and Matrix server name before creating the production homeserver. Matrix server names are durable identifiers and are difficult to change later.


## Deploy to GitHub Pages

This project includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

1. Push the project to the repository's `main` branch.
2. Open **Settings → Pages** on GitHub.
3. Set **Build and deployment → Source** to **GitHub Actions**.
4. Open **Actions** and wait for **Deploy NOVA web app to GitHub Pages** to finish.
5. Visit `https://YOUR-USERNAME.github.io/nova-messenger/`.

The Expo web export is configured with `/nova-messenger` as its base path.
