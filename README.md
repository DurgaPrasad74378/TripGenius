# TripGenius
TripGenius uses AI to create personalized travel itineraries with real-time weather, flight &amp; hotel search, budget tracking, and group collaboration. Built with React, Node.js, and MongoDB for a seamless, smart, and interactive travel planning experience.



# 🧠 TripGenius

> **Plan Smarter. Travel Better.**  
> An AI-powered travel planning platform that generates personalized itineraries, manages bookings, tracks budgets, and enables group collaboration — all in one seamless experience.

---

## 🚀 Tech Stack

### Frontend
- HTML, CSS, JavaScript  
- TailwindCSS / Bootstrap  

### Backend
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- JWT Authentication  

### External APIs
- OpenAI API (AI assistant)  
- Skyscanner API (Flight booking)  
- Booking.com / Agoda API (Hotel booking)  
- Google Maps API (Maps & routes)  
- OpenWeatherMap API (Weather)  
- Currency Exchange API  
- Yelp / Eventbrite API (Local events & restaurants)  

---

## ✨ Features

### Phase 1 — MVP Launch
- User Authentication (JWT)  
- AI-Powered Itinerary Generator (OpenAI)  
- Interactive Map View (Google Maps)  
- Real-time Weather Integration  
- Basic Flight & Hotel Search (Affiliate link-outs)  
- Trip Save & Load (MongoDB)  

### Phase 2 — Advanced Planning & Collaboration
- AI Chat Assistant for travel queries  
- Drag-and-Drop Calendar View for itinerary organization  
- Budget Planner + Currency Converter  
- Group Trip Planning & Real-Time Collaboration  
- Local Events & Restaurant Finder  
- Mood-Based Activity Suggestions (e.g., foodie, adventure)  

### Phase 3 — Monetization & Extras
- PDF Export & Offline Access  
- Visa & Travel Document Checker  
- Trip Template Marketplace (buy/sell curated trips)  
- Pro Subscriptions & Monetization Features  
- Smart Notifications & Alerts (weather, currency, visa)  

---

## 🌟 Unique Features Missing in Other Platforms

| Feature                          | TripGenius | Other Platforms (MakeMyTrip, Yatra, Booking, etc.) |
|---------------------------------|-----------------|----------------------------------------------------|
| AI-Generated Personalized Itineraries | ✅           | ❌                                                  |
| AI Chatbot Travel Assistant      | ✅               | ❌                                                  |
| Mood-Based Trip Customization    | ✅               | ❌                                                  |
| Real-Time Weather-Integrated Planning | ✅          | ❌                                                  |
| Interactive Drag-and-Drop Calendar | ✅            | ❌                                                  |
| Group Trip Real-Time Collaboration | ✅             | ❌                                                  |
| Offline PDF Export               | ✅               | ❌                                                  |
| Visa & Travel Doc Auto-Checker  | ✅               | Partial                                            |
| Local Events & Food Finder       | ✅               | Limited                                            |
| Trip Template Marketplace       | ✅               | ❌                                                  |
| Dynamic Budget + Currency Planner | ✅             | ❌                                                  |
| Smart Push Notifications        | ✅               | Limited                                            |

---

## 🛣 Development Roadmap

### Phase 1 — MVP Launch
- AI itinerary planner  
- Weather & map integration  
- Flight/hotel affiliate search  
- User authentication & trip dashboard  

### Phase 2 — Feature Expansion
- AI chat assistant  
- Drag-and-drop calendar  
- Budget & currency tracking  
- Group trip collaboration  
- Local events and restaurants integration  

### Phase 3 — Monetization & Growth
- PDF export & offline use  
- Visa/document checker  
- Trip template marketplace  
- Subscription plans and affiliate monetization  
- Influencer & guide collaborations  

---

## 📁 Project File Structure

```
TripGeniue/
├── client/                           # Frontend
│   ├── assets/                       # Images, icons, fonts
│   ├── css/                          # Custom styles (Tailwind, Bootstrap overrides)
│   │   ├── tailwind.css
│   │   └── styles.css
│   ├── js/                           # Vanilla JS modules or enhancements
│   │   └── main.js
│   ├── components/                   # Reusable HTML components
│   ├── pages/                        # Individual pages
│   │   ├── index.html
│   │   ├── planner.html
│   │   ├── login.html
│   │   └── dashboard.html
│   └── partials/                     # Shared HTML snippets (header, footer)
│
├── server/                           # Backend
│   ├── controllers/                  # Route handlers / logic
│   │   ├── authController.js
│   │   ├── tripController.js
│   │   └── aiController.js
│   ├── models/                       # Mongoose models
│   │   ├── User.js
│   │   ├── Trip.js
│   │   └── Template.js
│   ├── routes/                       # Express route files
│   │   ├── authRoutes.js
│   │   ├── tripRoutes.js
│   │   └── aiRoutes.js
│   ├── middlewares/                 # Auth, error handling, validators
│   ├── utils/                        # Helper functions (e.g., currency.js, weather.js)
│   ├── config/                       # DB & environment config
│   ├── app.js                        # Main Express app
│   └── .env                          # Environment variables
│
├── public/                           # Static assets served to frontend
│   └── uploads/                      # Profile pics, documents, etc.
│
├── README.md
├── package.json
├── .gitignore
└── tailwind.config.js

```

---

## 📬 Contact

Built with ❤️ by **Puspal Das with his HackStreet Boys Team**  
Email: puspal1703@gmail.com  

---

## 🙌 Contributing

Contributions are welcome! Please open issues or pull requests for improvements.

---

## 📄 License

MIT License
