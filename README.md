# YelpCamp

> A full-stack campground review platform where users can discover, share and review campgrounds — with interactive maps, image upload and full authentication.

---

## 📸 Screenshots

| Home | All Campgrounds + Map |
|------|-----------------------|
| ![Home](.github/images/home.png) | ![All Campgrounds](.github/images/all_campgrounds.png) |

| Campground Details + Reviews | New Campground |
|------------------------------|----------------|
| ![Details](.github/images/details_campground.png) | ![New Campground](.github/images/new_campground.png) |

| Login |
|-------|
| ![Login](.github/images/login.png) |

---

## ✨ Features

- 🔐 Authentication — sign up, login and logout with session-based auth
- 🏕️ Campground listing — browse all campgrounds with photo, location and price
- 🗺️ Interactive map — clustered map of all campgrounds powered by Mapbox
- 📍 Campground detail — full page with photo carousel, location pin, price and reviews
- ⭐ Review system — authenticated users can leave star ratings and written reviews
- ➕ Create campground — add a new campground with title, location, price, description and images
- 🖼️ Image upload — upload campground photos via Cloudinary
- 🗑️ Delete — owners can delete their own campgrounds and reviews
- ✅ Authorization — only the owner of a campground or review can edit or delete it

---

## 🛠️ Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![Mapbox](https://img.shields.io/badge/Mapbox-000000?style=for-the-badge&logo=mapbox&logoColor=white)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- MongoDB database (local or Atlas)
- Cloudinary account (for image upload)
- Mapbox account (for maps)

### Installation

```bash
# Clone the repository
git clone https://github.com/nathalliavieira/yelpcamp.git
cd yelpcamp

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your credentials
```

### Environment Variables

```env
DATABASE_URL=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
MAPBOX_TOKEN=your_mapbox_token
```

### Seed the database (optional)

```bash
node seeds/index.js
```

### Running locally

```bash
node app.js
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Live Demo

👉 [yelpcamp-bay.vercel.app](https://yelpcamp-bay.vercel.app)
