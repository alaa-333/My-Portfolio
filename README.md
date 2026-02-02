# 🚀 Portfolio Website

> A modern, responsive portfolio website built with Angular 18, showcasing professional experience, projects, and technical skills.

[![Angular](https://img.shields.io/badge/Angular-18.0-DD0031?style=flat&logo=angular&logoColor=white)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

---

## ✨ Features

- 🏠 **Home Page** - Professional introduction with technology stack showcase
- 📄 **CV Section** - Detailed resume and professional experience
- 💼 **Projects Gallery** - Portfolio of completed projects
- 📧 **Contact Form** - Easy way to get in touch
- 📱 **Fully Responsive** - Optimized for all device sizes
- 🎨 **Modern UI** - Clean design with Bootstrap 5 and FontAwesome icons

---

## 🛠️ Tech Stack

### Frontend Framework
- **Angular 18** - Latest version with standalone components
- **TypeScript 5.6** - Type-safe development
- **RxJS 7.8** - Reactive programming

### UI & Styling
- **Bootstrap 5.3** - Responsive grid and components
- **FontAwesome 6.5** - Icon library
- **Custom CSS** - Tailored styling

### Development Tools
- **Angular CLI 18** - Project scaffolding and build tools
- **Karma & Jasmine** - Unit testing framework

---

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Angular CLI](https://angular.dev/tools/cli) (optional but recommended)

```bash
npm install -g @angular/cli
```

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:4200/`
   
   The app will automatically reload when you make changes to the source files.

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── All-Components/          # Feature components
│   │   ├── home/                # Home page component
│   │   ├── cv/                  # CV/Resume component
│   │   ├── project/             # Projects showcase
│   │   ├── contact/             # Contact form
│   │   ├── navbar/              # Navigation bar
│   │   ├── footer/              # Footer component
│   │   └── profile-form/        # Profile form component
│   ├── app/                     # Root application module
│   │   ├── app.component.*      # Root component
│   │   ├── app.config.ts        # App configuration
│   │   └── app.routes.ts        # Routing configuration
│   ├── index.html               # Main HTML file
│   ├── main.ts                  # Application entry point
│   └── styles.css               # Global styles
├── public/                      # Static assets (images, icons)
├── angular.json                 # Angular workspace config
├── package.json                 # Dependencies and scripts
└── tsconfig.json                # TypeScript configuration
```

---

## 🧪 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server at `http://localhost:4200` |
| `npm run build` | Build the project for production (output in `dist/`) |
| `npm run watch` | Build in watch mode for development |
| `npm test` | Run unit tests with Karma |
| `ng generate component <name>` | Generate a new component |
| `ng generate --help` | See all available generators |

---

## 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory, optimized for:
- ⚡ Performance
- 📦 Minimal bundle size
- 🔒 Security
- 🚀 Fast loading times

---

## 🧭 Application Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` or `/home` | HomeComponent | Landing page with introduction |
| `/cv` | CvComponent | Resume and experience |
| `/projects` | ProjectComponent | Project portfolio |
| `/contact` | ContactComponent | Contact form |
| `/**` | Redirect to home | 404 fallback |

---

## 🎯 Key Technologies Showcased

- ☕ Java 17/21
- 🍃 Spring Boot
- 🗄️ Oracle & MySQL
- ⚡ Redis
- 🔄 Hibernate ORM
- ✅ JUnit 5

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is private and for portfolio purposes.

---

## 📬 Contact

For any inquiries, please use the contact form on the website or reach out directly.

---

## 🙏 Acknowledgments

- Built with [Angular CLI](https://angular.dev/tools/cli) version 18
- Icons by [FontAwesome](https://fontawesome.com/)
- Styling with [Bootstrap](https://getbootstrap.com/)

---


