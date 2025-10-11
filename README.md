# My Site

> Multilingual portfolio website built with React

## Purpose

A multilingual portfolio website for personal projects and introductions. Built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Frontend**: React 18 + TypeScript 5
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3 + MUI 6
- **State Management**: Zustand 5
- **Data Fetching**: TanStack Query 5
- **Internationalization**: i18next
- **Linting**: ESLint 9 + Prettier 3

## Key Features

- 🌐 Multilingual support (Korean, English, Japanese)
- 🎨 Dark/Light theme toggle
- 📱 Responsive design
- 🚀 Fast development with Vite
- 📄 Project detail pages
- 🎯 SEO optimized

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Run Prettier

## Project Structure

```
src/
├── app/                    # App providers
├── features/              # Feature modules
│   ├── language/          # Language switching
│   └── theme/             # Theme management
├── pages/                 # Page components
│   ├── main/              # Main page
│   └── detail/            # Project detail pages
├── shared/                # Shared components and utilities
│   ├── components/        # Reusable components
│   ├── config/            # Configuration files
│   ├── fonts/             # Font management
│   └── i18n/              # Internationalization resources
└── styles/                # Global styles
```

## Environment Variables

Create a `.env` file and set the following variables:

```env
VITE_SITE_OWNER="Your Name"
VITE_CONTACT_EMAIL="your.email@example.com"
```

## Deployment

```bash
npm run build
```

Deploy the contents of the `dist/` folder to your static hosting service.

## License

MIT