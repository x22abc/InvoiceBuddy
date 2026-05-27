# AR Tracker Frontend

Public UX-only frontend prototype for **AR Tracker**. This repo is intended to show how the website and future user interface could look. It does not include backend services, file uploads, authentication, report-generation logic, Excel-processing rules, client data, or private business workflows.

## Purpose

This repository is for public UI collaboration only:

- Marketing website layout
- Service positioning
- Mock dashboard screens
- Mock report previews
- Sample UX for AR visibility, Exceptions Reports, and CPA-ready packet concepts
- Responsive design exploration

## Not included

This repo intentionally does **not** include:

- Real client data
- Login/authentication
- File upload/download handling
- Backend API code
- Excel or QuickBooks processing logic
- Payment-matching rules
- Exceptions Report formulas/rules engine
- Pricing logic
- Private SOPs or internal workflows

All data shown in the interface is mock/demo data.

## Tech stack

- React
- Vite
- Tailwind CSS
- lucide-react icons

## Local setup

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in your terminal.

## Build

```bash
npm run build
npm run preview
```

## Suggested GitHub Pages deployment

This Vite project can be deployed to GitHub Pages, Netlify, Vercel, or similar static hosting. For GitHub Pages, you may need to configure the Vite `base` path depending on your repository name.

## Public/private repo boundary

Recommended repo split:

```text
Public repo: ar-tracker-frontend
Private repo: ar-tracker-internal-tools or ar-tracker-backend-private
```

The public repo should stay limited to UI/UX and mock data. Any future backend, report engine, Excel import/export tool, or client-data workflow should stay private.

## Working names

- Working project/service name: **AR Tracker**
- Possible future app/frontend name: **InvoiceBuddy**
- Company name: decide later
