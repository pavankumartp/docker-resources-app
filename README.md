# Docker Resources App

A fully functional resource library page with advanced filtering, search functionality, and a responsive design. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Pixel-Perfect UI**: Recreated from the original screenshot with exact colors, spacing, and typography
- 🔍 **Advanced Filtering**: Search by keywords, filter by year and resource type
- 📱 **Fully Responsive**: Mobile-first design that works seamlessly across all devices
- ⚡ **Fast & Modern**: Built with Next.js App Router and React Server Components
- 🎯 **TypeScript**: Fully typed for better developer experience and code quality
- 💅 **Tailwind CSS**: Utility-first CSS with custom theme colors
- 🪝 **Custom Hooks**: Reusable logic with useResourceFilters hook
- 📦 **Modular Architecture**: Clean component structure for easy maintenance

## Tech Stack

- **Framework**: Next.js 15.1.3
- **React**: 19.0.0
- **TypeScript**: 5.7.2
- **Styling**: Tailwind CSS 3.4.17
- **Icons**: Lucide React 0.469.0

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/pavankumartp/docker-resources-app.git
cd docker-resources-app
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## Project Structure

```
docker-resources-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx             # Main page component
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── HeroSection.tsx      # Hero banner component
│   │   ├── FilterSidebar.tsx    # Filters panel
│   │   ├── ResourceGrid.tsx     # Resource grid layout
│   │   └── ResourceCard.tsx     # Individual resource card
│   ├── hooks/
│   │   └── useResourceFilters.ts # Custom hook for filter logic
│   ├── types/
│   │   └── index.ts             # TypeScript type definitions
│   └── data/
│       └── mockResources.ts     # Sample resource data
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## Features in Detail

### Filtering System

- **Search**: Real-time search across resource titles and descriptions
- **Year Filter**: Filter resources by publication year
- **Type Filter**: Multi-select checkboxes for resource categories
- **Sorting**: Sort by date (newest first) or alphabetically by title
- **Reset**: Clear all filters with one click

### Resource Types

- White Papers
- Infographics
- Videos
- Blogs
- Guides
- Webinars

### Responsive Design

- Desktop: Two-column grid with sidebar
- Tablet: Stacked layout with optimized spacing
- Mobile: Single column with collapsible filters

## Customization

### Adding New Resources

Edit `src/data/mockResources.ts` to add or modify resources:

```typescript
{
  id: '13',
  category: 'Blog',
  title: 'Your Resource Title',
  description: 'Your resource description...',
  date: '2024-12-01',
  year: 2024,
  link: '#',
}
```

### Changing Colors

Modify `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    DEFAULT: "#1E88E5", // Change primary color
    dark: "#0066FF",
  },
}
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Author

Built with ❤️ by [Pavan Kumar TP](https://github.com/pavankumartp)

## Acknowledgments

- Design inspired by Docker Resources page
- Icons from [Lucide](https://lucide.dev/)
- Built with [Next.js](https://nextjs.org/)
