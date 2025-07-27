# Frontend Template

You can use this repository as a template for your frontend. It provides a very simple
React Router layout with a navbar, an `AuthContext` with login and register pages, and an
`ApiContext` with two custom hooks: `useQuery` and `useMutation`.

## Usage

1. Change the name of the package in `package.json`.
2. Update the environment variables in `example.env` and rename the file to `.env`.
3. Build components and add routes to them in `App.jsx`.


## 30 Second Elevator Pitch
<!-- Buying a semi-trailer shouldn't feel like solving a puzzle. My capstone project, The Trailer Bible, is designed to help logistics companies, fleet managers, and owner-operators make informed decisions when purchasing trailers. It breaks down specifications, regulations, cost analysis, and compatibility across various trailer types—saving buyers time, money, and major headaches. -->

## Concrete core features that will be implemented in the MVP
1. Trailer Type Comparison Tool:
highlights the differences between flatbeds, drop decks, reefers, dry vans and more

2. Spec Breakdown by Use Case:
details weight ratings, axle configurations, load demensions, and flooring types 
relevant to different industries

3. Budget Calculator:
Estimate total cost including taxes, fees, and shipping based on location.

4. Complicance Checklist:
includes DOT regualtion, brake valve certifactions and other must have legal features.

5. Quick-View Image Gallery:
visual reference for componenets like hubs, suspension, and tarp systems.

## Stretch Goals:
1. Interactive Q and A Decision Feature:
user answers question to get a tailored trailer recommendation.

2. Vendor Directory with Reviews:
ratings and contact info for regional dealers.

3. Fiance Simulator:
allows users to model different payment plans, factoring intrest and down payments.

4. parts cross reference tool:
identifty and compare alertnate parts:


## Your project management system
# high-level tickets on what needs to be done
# how tickets will be assigned

 <!-- FRONTEND -->
 1. Interactive UI
 2. Componenets, Comparison Charts and Form Inputs
 3. Responsive Design for Desktop and Mobile
 4. Visual Elements, gallerys and data tables

 <!-- BACKEND -->
 1. API (PSQL) servers the trailer date and users preferences and Info
 2. Trailer Spec database using PSQL
 3. budget calculator logic on server side for reliable processing

 <!-- INTERGRATION  -->
 1. User authentication for saving trailers
 2. secure endpoints for regulatory prefernces 
 3. state management with context to keep everything running smoothly


 # detailed database schema with all tables, properties, and relations defined\
  <!-- TABLES -->
  1. USER - authentifaction info, saved prefernces, role types
  2. TRAILERS - specs, dimensions, types, makes, models, images
  3. INDUSTRY - constructionm, aggriculture, freight, oil, gas, ect

# list of API endpoints and how they interact with the tables
1. one user -> many saved trailers
2. one trailer -> many features
3. one industry -> many recommended trailer types

# detailed wireframe of your frontend all pages, forms, routes, etc
<!-- PAGES -->
1. HEADER/NAVBAR: Logo + Name, navigation links, Search bar, profile drop down when logged in. 
2. HOME PAGE: Brief Intro, Featured trailer types or industry highlights.
3. TRAILER COMPARISON PAGE: sidbar filter by specification
4. Budget Calculator: form inputs, trailer type, location, fee. cost breakdown and total, option to save qoute?
5. TRAILER DETAILS PAGE: Spec table, gallery, industry tags fiance options
6. USER PROFILE PAGE: Save trailers, saved budget estimates, editable account info

WIRE FRAME + COMPONENETS TREE

┌────────────────────────────────────────────────────┐
│                        Navbar                      │
│  [Logo] [Home] [Compare] [Budget Tool] [Compliance]│
│        [Saved] [Login/Profile] [Search]           │
└────────────────────────────────────────────────────┘

▼ Home Page
┌────────────────────────────────────────────────────┐
│ [Hero Section]                                     │
│  "Simplify Your Trailer Purchase" + CTA Button     │
│----------------------------------------------------│
│ [Featured Industries] [Browse Trailer Types]       │
│ [How It Works: 3-Step Buying Process]              │
└────────────────────────────────────────────────────┘

▼ Compare Trailers
┌────────────────────────┬───────────────────────────┐
│ [Filter Sidebar]       │ [Trailer Grid or Table]   │
│ - Type                 │ ┌───────────────────────┐ │
│ - Industry             │ │ TrailerCard (Preview) │ │
│ - Axles / Weight       │ └───────────────────────┘ │
│                        │ [Save] [View Details]     │
└────────────────────────┴───────────────────────────┘

▼ Trailer Details Page
┌────────────────────────────────────────────────────┐
│ [Spec Table] [Image Gallery]                       │
│ [Industry Tags] [Features List]                    │
│ [Compliance Status] [Financing Options]            │
└────────────────────────────────────────────────────┘

▼ Budget Calculator
┌────────────────────────────────────────────────────┐
│ [Form Inputs]                                      │
│ - Location, Type, Fees                             │
│----------------------------------------------------│
│ [Estimated Costs Breakdown]                        │
│ [Save Estimate]                                    │
└────────────────────────────────────────────────────┘

▼ Compliance Checklist
┌────────────────────────────────────────────────────┐
│ [Checklist by Trailer Type]                        │
│ [Expandable Rows with Requirements]                │
│ [Document Links / Highlights]                      │
└────────────────────────────────────────────────────┘

▼ User Profile
┌────────────────────────────────────────────────────┐
│ [Saved Trailers]                                   │
│ [Saved Estimates]                                  │
│ [Account Details]                                  │
└────────────────────────────────────────────────────┘


<!-- src/
├── App.jsx
├── index.js
├── assets/
│   └── images, icons, logos
├── components/
│   ├── NavBar.jsx
│   ├── Footer.jsx
│   ├── TrailerCard.jsx
│   ├── SpecTable.jsx
│   ├── BudgetForm.jsx
│   ├── ComplianceSection.jsx
│   ├── ImageGallery.jsx
│   ├── AuthModal.jsx
│   ├── FeatureTag.jsx
│   ├── IndustryBadge.jsx
│   ├── SearchBar.jsx
│   ├── VendorInfo.jsx
│   └── FinancingWidget.jsx
├── pages/
│   ├── Home.jsx
│   ├── Compare.jsx
│   ├── TrailerDetails.jsx
│   ├── BudgetTool.jsx
│   ├── Compliance.jsx
│   ├── Profile.jsx
│   └── Login.jsx
├── routes/
│   ├── PrivateRoute.jsx
│   └── AppRoutes.jsx
├── context/
│   ├── AuthContext.jsx
│   ├── TrailerContext.jsx
│   └── BudgetContext.jsx
├── services/
│   ├── api.js 
│   ├── trailerService.js
│   ├── userService.js
│   └── vendorService.js
├── utils/
│   ├── calcBudget.js
│   ├── validateCompliance.js
│   └── formatSpecs.js
└── styles/
    ├── Global.css
    └── theme.js -->





