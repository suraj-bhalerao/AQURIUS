# Aquaress -- 

A modern, responsive website for Aquaress, a premium bottled water company. Built with React for the frontend and Express.js for the backend, featuring a sleek design with Tailwind CSS and smooth animations powered by Framer Motion.

## Features

- **Responsive Design**: Optimized for all devices with a mobile-first approach
- **Interactive UI**: Smooth animations and transitions using Framer Motion
- **Company Showcase**: Sections for Hero, About, Manufacturing, Gallery, Testimonials, and Location
- **Contact Form**: Enquiry form with backend integration for customer inquiries
- **Admin Dashboard**: View submitted enquiries through the backend API
- **SEO Friendly**: Clean structure and semantic HTML

## Tech Stack

### Frontend
- **React 18** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icons

### Backend
- **Express.js** - Web application framework for Node.js
- **MongoDB** - NoSQL database for storing enquiries
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing middleware

### Deployment
- **Vercel** - Serverless deployment platform

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 16 or higher)
- npm or yarn
- MongoDB (local or cloud instance like MongoDB Atlas)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/aquaress.git
   cd aquaress
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the `server` directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   NODE_ENV=development
   ```

4. **Start the development server:**
   ```bash
   # Start the frontend (in one terminal)
   npm run dev

   # Start the backend (in another terminal)
   npm run server
   ```

5. **Open your browser:**
   Navigate to `http://localhost:5173` for the frontend and `http://localhost:5000` for the backend API.

## Usage

### Development
- `npm run dev` - Start the Vite development server
- `npm run server` - Start the Express backend server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

### API Endpoints

- `POST /api/enquiry` - Submit a new enquiry
- `GET /api/enquiries` - Retrieve all enquiries (for admin use)

### Enquiry Form Fields
- Name
- Location
- Email
- Mobile
- Quantity (500ml bottles)
- Quantity (1L bottles)
- Consent checkbox

## Project Structure

```
aquaress/
├── public/                 # Static assets
├── server/                 # Backend server
│   ├── index.js           # Express server setup
│   └── .env               # Environment variables
├── src/                   # Frontend source
│   ├── assets/            # Images and other assets
│   ├── components/        # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── FloatingActions.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   ├── Hero.jsx
│   │   ├── Location.jsx
│   │   ├── Logos.jsx
│   │   ├── Manufacturing.jsx
│   │   ├── Navbar.jsx
│   │   └── Testimonials.jsx
│   ├── services/          # API services
│   │   ├── dbService.js
│   │   └── googleSheets.js
│   ├── App.jsx            # Main app component
│   ├── index.css          # Global styles
│   └── main.jsx           # App entry point
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── vercel.json            # Vercel deployment config
```

## Deployment

This project is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard:
   - `MONGODB_URI`
   - `NODE_ENV=production`
3. Deploy automatically on push to main branch

The `vercel.json` file handles API routing for the serverless backend.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Contact

For questions or support, please contact the development team.
## Repository Notes

- Last reviewed: 2026-02-20
- Scope: learning and practice focused implementation
- Suggested next update: add setup/run steps for new contributors

