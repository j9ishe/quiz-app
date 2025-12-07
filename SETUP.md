# Quick Setup Guide

## Prerequisites
- Node.js 18+ installed
- npm or yarn

## Step 1: Backend Setup

```bash
cd backend
npm install
npm run dev
```

The backend will start on `http://localhost:8787`

## Step 2: Frontend Setup

In a new terminal:

```bash
cd frontend
npm install

# Create .env.local file
echo "NEXT_PUBLIC_API_URL=http://localhost:8787" > .env.local

npm run dev
```

The frontend will start on `http://localhost:3000`

## Step 3: Test the Application

1. Open `http://localhost:3000` in your browser
2. Answer the quiz questions
3. Submit to see results

## Deployment

See the main README.md for deployment instructions to Vercel (frontend) and Cloudflare Workers (backend).

