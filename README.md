# Yasmin & Jordi Wedding Website

A beautiful, bilingual wedding website built with React, featuring RSVP functionality with Google Sheets integration.

## 🌟 Features

- **Bilingual Support**: Hebrew and English language switching
- **Elegant Design**: Inspired by TheKnot.com with custom fonts and colors
- **RSVP System**: Google Sheets integration for guest management
- **Responsive Design**: Mobile-friendly across all devices
- **Modern Stack**: React 18 with hooks and modern CSS

## 🎨 Design Specifications

- **Primary Font**: La Belle Aurore (elegant script)
- **Secondary Font**: Reenie Beanie (decorative)
- **Colors**: Soft beige (#F1ECE8) with deep blue accents (#0f598b)
- **Style**: Romantic, elegant wedding theme

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd yasmin-jordi-wedding

# Install dependencies
npm install

# Start development server
npm start
```

The website will open at `http://localhost:3000`

## 📋 Google Sheets RSVP Setup

### Step 1: Create Google Sheet
1. Create a new Google Sheet
2. Add headers: `Name`, `Email`, `Phone`, `Attending`, `Guests`, `Dietary`, `Timestamp`

### Step 2: Google Apps Script
1. Go to `Extensions > Apps Script`
2. Replace the default code with:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.name,
    data.email,
    data.phone,
    data.attending,
    data.guests,
    data.dietary,
    data.timestamp
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### Step 3: Deploy
1. Click `Deploy > New Deployment`
2. Choose `Web app`
3. Set execute as: `Me`
4. Set access: `Anyone`
5. Copy the deployment URL

### Step 4: Update Website
Replace `YOUR_DEPLOYMENT_ID` in `src/components/RSVP.js` with your deployment URL.

## 🌐 Deployment to Netlify

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `build`
   - Deploy!

### Method 2: Manual Deploy

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Go to [Netlify](https://netlify.com)
   - Drag and drop the `build` folder

## 🔧 Configuration

### Environment Variables
Create `.env` file for any environment-specific configurations:

```env
REACT_APP_GOOGLE_SHEETS_URL=your_deployment_url_here
```

### Custom Domain
To use `yasmin&jordi.love`:
1. Purchase domain from registrar
2. In Netlify: Site settings > Domain management
3. Add custom domain
4. Update DNS records as instructed

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🛠️ Development

### Available Scripts

- `npm start` - Development server
- `npm run build` - Production build
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation
│   ├── Hero.js         # Main hero section
│   ├── OurStory.js     # Story section
│   ├── EventDetails.js # Event timeline
│   ├── RSVP.js         # RSVP form
│   └── Footer.js       # Footer
├── i18n/               # Internationalization
│   └── config.js       # Language configurations
├── App.js              # Main app component
├── index.js            # Entry point
└── index.css           # Global styles
```

## 📞 Support

For technical support or customizations, contact the development team.

## 📄 License

This project is created specifically for Yasmin & Jordi's wedding.

---

*Created with ♥ for Yasmin & Jordi*