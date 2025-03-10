# Dragonball Next Modern 🐉

This is a Next.js project generated with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and configured to provide a modern, scalable web experience.

## Table of Contents 📑

- [Installation](#installation)
- [Development Usage](#development-usage)
- [Building and Deployment](#building-and-deployment)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Resources and Configuration](#resources-and-configuration)
- [Environment Variables](#environment-variables)

## Installation 🚀

1. Make sure you have the recommended Node version installed (v23.3.0).
2. Install project dependencies using [pnpm](https://pnpm.io/):

   ```bash
   pnpm install
   ```

## Development Usage 💻

To start the development server, run:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

## Building and Deployment 🏗️

- **Build for production:**

  ```bash
  pnpm build
  ```

- **Start the application in production mode:**

  ```bash
  pnpm start
  ```

For more details about deployment, check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Project Structure 📂

The project is organized as follows:

```
.
├── .env               # Environment variables definition
├── .gitignore         # Files and folders ignored by Git
├── next.config.ts     # Next.js configuration
├── package.json       # Project scripts and dependencies
├── pnpm-lock.yaml     # pnpm lockfile
├── tsconfig.json      # TypeScript configuration
├── components.json    # Components configuration (shadcn/UI)
├── public             # Static files (images, SVGs, etc.)
└── src
    ├── app/         # Pages, layouts and API (includes app/page.tsx, app/api, etc.)
    ├── components/  # Reusable components (app-sidebar, nav-main, ui, etc.)
    ├── hooks/       # Custom hooks
    ├── lib/         # Utilities and global configuration
    ├── server/      # API and server logic
    └── trpc/        # tRPC configuration and clients
```

## Technologies 🛠️

- **Next.js**: Robust React framework. Check [Next.js Documentation](https://nextjs.org/docs) for details.
- **TypeScript**: Typed language, configured in [tsconfig.json](tsconfig.json).
- **Tailwind CSS**: Used for creating modern interfaces.
- **tRPC**: Type-safe client-server communication.
- **ESLint** and **Prettier**: Tools to ensure code quality and formatting.

## Resources and Configuration ⚙️

- **Prettier**: Configured in [prettier.config.mjs](prettier.config.mjs)
- **PostCSS**: Configuration in [postcss.config.mjs](postcss.config.mjs)
- **ESLint**: Configured in [eslint.config.mjs](eslint.config.mjs)
- **UI Components**: Configuration in [components.json](components.json)

## Environment Variables 🔐

Environment variables configuration is managed in the [.env](.env) file:

```properties
API_URL="https://dragonball-api.com/api"
```

---

Enjoy working on **Dragonball Next Modern** and contribute to making this project exceptional! 🎉
