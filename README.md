# Website Refresh

Modern rebuild of the company website using a lightweight static frontend stack and automated edge deployment.

---

## Overview

This repository contains the source code for the refreshed website.  
The goal of the project is to provide a fast, maintainable, and easily deployable alternative to legacy CMS-based hosting.

Key objectives:

- Improve performance and load time
- Simplify deployment workflow
- Maintain version-controlled changes
- Enable scalable edge hosting

---

## Tech Stack

### Frontend
- HTML5 / CSS3
- JavaScript (ES Modules)
- Vite (build tooling)

### Runtime / Package Management
- Bun  
  or  
- Node.js + npm

### Deployment & Hosting
- GitHub — Version control
- Cloudflare Pages — CI/CD pipeline
- Cloudflare Edge CDN — Static hosting

### Development Tools
- VSCode
- Git CLI

---

## Project Structure

/
├── public/ # Static assets
├── src/ # Application source files
├── index.html # Entry point
├── package.json # Dependencies & scripts
├── vite.config.js # Build configuration
└── README.md


---

## Local Development

Install dependencies:

```bash
npm install

## Start development server:

npm run dev

## Preview locally:
http://localhost:5173

## Deployment Workflow

Deployment is automated via Cloudflare Pages.
- Standard Workflow
- Make changes locally
- Commit updates
    git add .
    git commit -m "Update site content"
    git push
## Cloudflare will automatically:
Pull latest code
Install dependencies
Run build
Deploy to edge network

## Customization
Page Title
Edit
    index.html

Layout / Components
Modify files under:
    src/

Branding / Metadata
Review:
    public/manifest.json
    index.html meta tags
    favicon assets

## Project Goals

- Fast static delivery
- Reduced operational overhead
- Infrastructure-friendly deployment model
- Clear version tracking
- Maintainable frontend structure