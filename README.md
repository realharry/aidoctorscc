# AI Doctors CC

A modern, responsive Next.js website showcasing specialized AI medical agents. The platform presents an elegant landing page featuring AI doctors with expertise in various medical specialties including Cardiology, Neurology, Ophthalmology, Pharmacology, General Practice, and Diagnostics.

## 🩺 Features

- **AI Medical Specialists Showcase**: Interactive cards displaying 6 specialized AI doctors, each with unique medical expertise
- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices
- **Modern UI Components**: Built with shadcn/ui components and Tailwind CSS for a clean, professional appearance
- **FAQ Section**: Comprehensive frequently asked questions about AI medical agents
- **Smooth Animations**: Elegant hover effects and transitions throughout the interface
- **Accessibility**: ARIA-compliant components and keyboard navigation support
- **Dark/Light Mode**: Automatic theme switching based on user preferences

## 🚀 Technology Stack

- **Framework**: [Next.js 15.5.3](https://nextjs.org/) with App Router and Turbopack
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) with Radix UI primitives
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: Turbopack for fast development and builds

## 📋 AI Medical Specialists

The platform features six specialized AI doctors:

1. **Dr. CardioAI** - Cardiovascular health analysis and heart condition assessment
2. **Dr. NeuroMind** - Advanced neurological diagnostics and brain health monitoring
3. **Dr. VisionCare** - Ophthalmology and comprehensive eye health evaluations
4. **Dr. PharmaGuide** - Intelligent medication management and drug interaction analysis
5. **Dr. VitalWatch** - Real-time vital signs monitoring and health trend analysis
6. **Dr. DiagnosticPro** - Comprehensive diagnostic support and clinical decision assistance

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/realharry/aidoctorscc.git
   cd aidoctorscc
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📜 Available Scripts

- `npm run dev` - Starts the development server with Turbopack
- `npm run build` - Creates an optimized production build
- `npm start` - Starts the production server
- `npm run lint` - Runs ESLint to check code quality

## 🏗️ Project Structure

```
aidoctorscc/
├── app/                    # Next.js App Router directory
│   ├── favicon.ico        # Application favicon
│   ├── globals.css        # Global styles and Tailwind CSS
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page component
├── components/            # Reusable UI components
│   └── ui/               # shadcn/ui components
│       ├── accordion.tsx
│       ├── button.tsx
│       └── card.tsx
├── lib/                   # Utility functions
├── public/               # Static assets
├── components.json       # shadcn/ui configuration
├── next.config.ts        # Next.js configuration
├── package.json          # Dependencies and scripts
├── postcss.config.mjs    # PostCSS configuration
├── tsconfig.json         # TypeScript configuration
└── eslint.config.mjs     # ESLint configuration
```

## 🎨 Styling & Theme

The application uses a custom CSS variable-based theming system with support for both light and dark modes:

- **Light Mode**: Clean, medical-professional color scheme with blue accents
- **Dark Mode**: Automatically adapts based on user's system preferences
- **Custom Components**: Styled with Tailwind CSS utilities and CSS variables
- **Responsive Breakpoints**: Mobile-first design with responsive layouts

## 🚀 Deployment

The application is built with Next.js and can be deployed to various platforms:

### Vercel (Recommended)
1. Push your code to a Git repository
2. Import the project to [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings

### Other Platforms
The application generates static assets and can be deployed to any hosting provider that supports Node.js applications.

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## ⚠️ Disclaimer

This website is for demonstration purposes. The AI doctors shown are conceptual representations of medical AI technology. Always consult with qualified healthcare professionals for actual medical advice and diagnosis.
