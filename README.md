

# Recipe Search App

A simple Recipe Search application built with Next.js, React, and TypeScript, allowing users to search for recipes based on ingredients. This project leverages the [Edamam Recipe API](https://developer.edamam.com/) to fetch recipe data, including ingredients, images, and direct links to the full recipes.

## Features

- **Recipe Search**: Enter an ingredient to fetch recipes from the Edamam API.
- **Responsive Design**: Styled with Tailwind CSS for a sleek, dark-themed, and mobile-friendly interface.
- **Error Handling**: Displays error messages for failed API requests.
- **Next.js Image Optimization**: Utilizes `next/image` for optimized recipe images.
- **Dynamic Styling**: Hover and interaction effects for a more engaging user experience.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/recipe-search-app.git
   cd recipe-search-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your Edamam API credentials:
   ```env
   NEXT_PUBLIC_EDAMAM_APP_ID=your_app_id
   NEXT_PUBLIC_EDAMAM_APP_KEY=your_app_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Visit `http://localhost:3000` in your browser to use the app.

## Usage

1. Enter an ingredient in the search bar (e.g., "chicken").
2. Press **Search** to view a list of recipes containing that ingredient.
3. Click on a recipe card for more details or on the **Full Recipe** link to view the complete recipe on the source website.

## Technologies Used

- **Next.js**: Framework for server-side rendering and routing.
- **TypeScript**: Provides static typing for better code reliability.
- **React**: For building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for responsive and dark-themed styling.
- **Edamam Recipe API**: Used to fetch recipe data based on user search.


