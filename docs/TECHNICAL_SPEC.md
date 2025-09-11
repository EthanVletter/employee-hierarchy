# Installation Instructions

## Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- Docker & Docker Compose
- PostgreSQL (if not using Docker)

## Steps

### 1. Clone the repository:

```bash
git clone https://github.com/EthanVletter/employee-hierarchy.git cd
employee-hierarchy
```

### 2. Copy `.env.example` to `.env` and update the environment variables

- Database credentials

- Backend & frontend ports

- API URLs

You can do this by using this simple terminal command

```bash
cp .env.example .env

```

### 3. Option A: Start the project with Docker Compose

_Note: Make sure PostgreSQL is NOT running locally and `.env` has `DB_HOST=employee-hierarchy-db`._

(simple run command)

```bash
docker compose up --build
```

or

(run in background command)

```bash
docker compose up --build -d
```

The frontend will be available at :

```bash
http://localhost:5173
```

and the backend API at:

```bash
http://localhost:4000
```

Stop the project with Docker Compose

(stop the simple startup command)

```bash
CTRL + C
```

or

(stop the background running command)

```bash
docker compose down
```

Remove docker volumes (if needed) using:

```bash
docker compose down -v
```

### 4, Option B: Run frontend and backend separately (without Docker)

Frontend

```bash
cd frontend
npm install
npm run build
npm run dev
```

The frontend will be available at :

```bash
http://localhost:5173
```

Backend

_Note: Make sure PostgreSQL is running locally and `.env` has `DB_HOST=localhost`._

```bash
cd backend
npm install
npm run build
npm run dev
```

The backend API will be available at:

```bash
http://localhost:4000
```
