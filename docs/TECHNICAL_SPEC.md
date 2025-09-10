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

### 2. Copy `.env.example` to `.env` and update teh environment variables

(database credentials, API URLs)

### 3. Start the project with Docker Compose

(simple run command)

```bash
docker compose up --build
```

or

(run in background command)

```bash
docker compose up --build -d
```

### 4. The frontend should be available at :

```bash
http://localhost:5173
```

and the backend API at:

```bash
http://localhost:4000
```

### 5. Stop the project with Docker Compose

(stop the simple startup command)

```bash
CTRL + C
```

or

(stop the background running command)

```bash
docker compose down
```

### 6. Alternatively you can remove docker volumes using:

```bash
docker compose down -v
```
