# 🌍 WanderLust Frontend

## Overview

WanderLust Frontend is a modern React-based web application for exploring and managing travel listings. It provides an intuitive and responsive user interface where users can browse destinations, view listing details, create new listings, edit existing ones, and securely manage their accounts.

The frontend communicates with the WanderLust Backend through REST APIs and offers a smooth user experience with client-side routing, responsive layouts, and real-time notifications.

**🌐 Live Demo:**
https://wander-lust-frontend-fawn.vercel.app

---

# 🛠 Tech Stack

### Frontend

* React.js
* Vite
* React Router DOM
* Tailwind CSS
* Material UI (MUI)
* Axios
* React Hook Form
* React Hot Toast

### Deployment

* Vercel

---

# ✨ Features

* 🔐 User Authentication (Signup & Login)
* 🏡 Browse all travel listings
* 🔍 View detailed listing information
* ➕ Create new listings
* ✏️ Edit existing listings
* 📱 Fully responsive design
* ⚡ Fast client-side routing
* 🌐 REST API integration
* 🍞 Toast notifications
* ❌ Error handling and custom error page

---

# 📚 Key Learnings

* Developed a Single Page Application (SPA) using React.
* Implemented client-side routing with React Router.
* Integrated frontend with REST APIs using Axios.
* Managed forms efficiently with React Hook Form.
* Built reusable React components.
* Designed responsive layouts using Tailwind CSS and Material UI.
* Deployed the application on Vercel.
* Configured Vercel rewrites for React Router page refresh support.

---

# ⚙️ Installation & Setup

### Clone the repository

```bash
git clone https://github.com/Mk72045/WanderLust_Frontend.git

cd WanderLust_Frontend
```

### Install dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file in the project root.

```env
VITE_API_URL=YOUR_BACKEND_API_URL
```

Example:

```env
VITE_API_URL=https://your-backend-url.onrender.com
```

### Start the development server

```bash
npm run dev
```

Visit:

```
http://localhost:5173
```

---

# 📦 Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

# 📂 Project Structure

```
src
│
├── Components
│
├── layouts
│   ├── Navbar
│   ├── Footer
│   ├── Layout
│   └── Flash
│
├── listings
│   ├── Dashboard
│   ├── Show
│   ├── New
│   ├── Edit
│   └── Error
│
├── user
│   ├── Login
│   └── Signup
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 🌐 Deployment

This project is deployed on **Vercel**.

For React Router page refresh support, create a `vercel.json` file:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

# 📌 Future Improvements

* 🔍 Search and filtering
* ❤️ Wishlist / Favorites
* 🌙 Dark mode
* 🗺️ Interactive maps
* 💬 Real-time chat
* 📅 Booking functionality
* 🌍 Multi-language support
* 📊 Better dashboard analytics

---

# 🔗 Related Links

**Frontend Repository**

https://github.com/Mk72045/WanderLust_Frontend

**Backend Repository**

https://github.com/Mk72045/WanderLust_Backend

**Live Website**

https://wander-lust-frontend-fawn.vercel.app

---

# 🤝 Contribution

Contributions are welcome.

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

# 👨‍💻 Developer

**Manoj Kumar**

**Email:** manoj53739@gmail.com 

**GitHub:** https://github.com/Mk72045

**LinkedIn:** https://linkedin.com/in/manoj-kumar-063715389

---

# ⭐ Support

If you found this project useful, please consider giving it a **⭐ Star** on GitHub.
