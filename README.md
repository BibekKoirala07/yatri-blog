# Yatri Blog App

A simple and efficient blog application built using **Next.js** and **TypeScript** with pagination and search functionality.

## Features

- 🚀 **Responsive UI**
- 🔍 **Search Functionality**: Filter blog posts by title or summary
- 📄 **Pagination**: Efficiently loads blog posts with pagination
- 🎨 **Styled with Tailwind CSS**
- 🏗 **Component-Based Architecture**

# Overview

The application has two main routes:
/ - Displays the list of blog posts with pagination and search functionality.
/blog/:slug/ - Displays individual blog posts based on their slug.

## Implementation Details

Implementation Details

**Skeleton Implementation**: A loading state is displayed while fetching blog posts.
**Error Handling**: If an error occurs while fetching posts, a message is shown to the user.
**Mock Data**: Blog posts are stored in mock data with a delay to simulate API calls with delays.
**Dynamic Search**: Filters blog posts dynamically based on the search term.

## Tech Stack

- **Next.js** - React Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Mock Data** - Simulated Blog Posts for Development

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/BibekKoirala07/yatri-blog.git
   cd yatri-blog
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## How It Works

- **Pagination**: The app fetches blog posts in chunks, displaying only a set number per page.
- **Search**: When a search term is entered, the app filters blog posts dynamically.
- **API mocked by using artificial delay from mocked data**

## Contributing

Made by Bibek Koirala
