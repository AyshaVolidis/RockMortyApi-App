# Rick & Morty Characters App

A **React + TypeScript** web application that fetches characters from the [Rick and Morty API](https://rickandmortyapi.com/documentation/). Built with **clean architecture, proper state management, and TanStack Query** for data fetching.

---

## Features

- **Characters Page**
  - Display a list of characters with images and basic info.
  - Search characters by name with **debounced input** to reduce API calls.
  - Loading and error handling with spinners and messages.

- **Character Details Page**
  - Show character image in full size.
  - Display detailed info: status, species, gender, origin.
  - List all episodes the character appeared in.

- **State Management**
  - Data fetching and caching with **TanStack Query**.
  - Efficient handling of `isLoading` and `isFetching`.

- **Clean Project Structure**
  - Components organized for scalability.
  - Custom hooks for API calls.
  - Types defined for TypeScript safety.

---

## Tech Stack

- **React 19**  
- **TypeScript**  
- **TanStack Query (React Query)**  
- **CSS-in-JS** for inline styling  
- **React Router v6** for navigation  

---

## Installation

```bash
# Clone repository
git clone https://github.com/AyshaVolidis/RockMortyApi-App.git

# Navigate to project
cd rick-and-morty-app

# Install dependencies
npm install

# Start development server
npm run dev
