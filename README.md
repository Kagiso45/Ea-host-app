# Phantom VPS 👻

A modern, high-performance VPS management platform built with React, Vite, and Tailwind CSS.

## 🌟 Features

- **Dashboard** - Real-time monitoring with interactive charts and metrics
- **Server Management** - Create, manage, and control VPS instances
- **Analytics** - Comprehensive performance analytics and reporting
- **Billing** - Invoice management and payment methods
- **Settings** - Account preferences and security configuration
- **Responsive Design** - Fully responsive UI for desktop and mobile
- **Dark Theme** - Eye-friendly dark mode with Phantom branding
- **Interactive Charts** - Real-time data visualization with Recharts

## 🛠 Tech Stack

- **Frontend**: React 18.2
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3.3
- **Routing**: React Router 6
- **Charts**: Recharts 2.10
- **Icons**: Lucide React
- **State Management**: Zustand (ready to use)

## 📋 Prerequisites

- Node.js 16.x or higher
- npm 7+ or yarn

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Kagiso45/Ea-host-app.git
cd Ea-host-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will automatically open in your browser at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized build will be created in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Top navigation bar
│   ├── Sidebar.jsx         # Side navigation menu
│   └── StatCard.jsx        # Reusable stat card component
├── pages/
│   ├── Dashboard.jsx       # Main dashboard with charts
│   ├── Servers.jsx         # Server management page
│   ├── Analytics.jsx       # Analytics and reports
│   ├── Billing.jsx         # Billing and invoices
│   └── Settings.jsx        # Account settings
├── App.jsx                 # Main app component
├── main.jsx                # React entry point
└── index.css              # Global styles with Tailwind
```

## 🗺 Routes

- `/` - Dashboard
- `/servers` - Server Management
- `/analytics` - Performance Analytics
- `/billing` - Billing & Invoices
- `/settings` - Account Settings

## 🎨 Customization

### Color Scheme

Edit the Phantom color palette in `tailwind.config.js`:

```javascript
phantom: {
  50: '#f8f7ff',
  100: '#f0effe',
  500: '#9d4edd',
  600: '#7b2cbf',
  700: '#5a189a',
  800: '#3c096c',
  900: '#240046',
}
```

### Global Styles

Modify `src/index.css` to customize component styles and add custom utilities.

## 📊 Features in Detail

### Dashboard
- Real-time system metrics (CPU, Memory, Disk, Uptime)
- Interactive CPU and Memory charts
- Recent activity feed
- Quick overview of all servers

### Servers
- Complete server inventory
- Server status monitoring
- Resource usage display
- Quick actions (start, stop, edit, delete)
- Contextual menu for server management

### Analytics
- Weekly performance charts
- Resource distribution pie charts
- Key metrics overview
- Bandwidth and request monitoring

### Billing
- Current balance and billing date
- Payment method management
- Complete invoice history
- Download invoices

### Settings
- Account information
- Notification preferences
- Security settings (2FA)
- Dangerous operations zone

## 🔧 Development

### Adding New Pages

1. Create a new file in `src/pages/`
2. Add the route in `src/App.jsx`
3. Add the menu item in `src/components/Sidebar.jsx`

### Adding New Components

1. Create a new file in `src/components/`
2. Export as default
3. Import and use in your pages

## 📦 Dependencies

- **react** - UI library
- **react-dom** - DOM rendering
- **react-router-dom** - Client-side routing
- **recharts** - React charting library
- **lucide-react** - Icon library
- **axios** - HTTP client (pre-installed)
- **zustand** - State management (pre-installed)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

MIT License - feel free to use this project for personal and commercial purposes.

## 👨‍💻 Author

Kagiso45

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, please create an issue on the GitHub repository.

---

**Phantom VPS** - Your ghostly-fast VPS management platform 👻⚡
