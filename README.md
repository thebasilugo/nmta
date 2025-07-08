# NMTA Awards Website

The official website for the Nigerian Movie & Television Awards (NMTA) - celebrating excellence in Nigerian cinema and television.

## Features

- **Modern Design**: Clean, minimalist interface with professional aesthetics
- **Award Categories**: Comprehensive showcase of all nine award categories
- **News & Blog**: Dynamic news system with featured articles and updates
- **Jury Information**: Detailed profiles of distinguished jury members and advisory board
- **Responsive**: Fully responsive design optimized for all devices
- **Performance**: Optimized for fast loading and smooth user experience
- **SEO Optimized**: Proper meta tags and structured data for search engines

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Images**: Next.js Image optimization
- **Deployment**: Vercel

## Getting Started

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── awards/            # Awards page
│   ├── news/              # News and blog pages
│   ├── about/             # About page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── ui/               # UI components
│   └── ...               # Feature components
├── data/                 # Data files
│   ├── award-categories.ts
│   ├── jury-members.ts
│   ├── news-articles.ts
│   ├── contact-info.ts
│   └── content.json
└── public/               # Static assets
\`\`\`

## Content Management

All content is managed through structured data files in the `/data` directory:

- `content.json`: Site-wide content and configuration
- `award-categories.ts`: Award category information
- `jury-members.ts`: Jury and advisory board profiles
- `news-articles.ts`: News articles and blog posts
- `contact-info.ts`: Contact information and social media links

## Deployment

The site is optimized for deployment on Vercel:

1. Connect your repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push to main branch

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

© 2024 Nigerian Movie & Television Awards. All rights reserved.
