# Portfolio Website

A modern, scalable portfolio website showcasing personal and school projects with a sleek, interactive design.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be available at `http://localhost:5173`

## 📁 Project Structure

```
Portfolio/
├── public/
│   └── assets/
│       ├── profile/          # Your profile photo
│       └── projects/         # Project screenshots/videos
├── src/
│   ├── data/
│   │   └── projects.json     # Project data (edit this!)
│   ├── js/                   # JavaScript modules
│   ├── styles/               # CSS files
│   └── utils/                # Utility functions
├── index.html                # Dashboard page
└── project.html              # Project detail template
```

## ✨ Adding a New Project

### Step 1: Add Project Images

1. Create a folder in `public/assets/projects/` with your project name (e.g., `my-new-project`)
2. Add your images/videos to this folder
3. Recommended: Include a `thumb.jpg` for the thumbnail

### Step 2: Update projects.json

Open `src/data/projects.json` and add a new project entry:

```json
{
  "id": "my-project-slug",
  "title": "My Awesome Project",
  "category": "personal",  // or "school"
  "tagline": "A short, catchy description",
  "description": "Detailed description of what this project does and why it's cool.",
  "techStack": ["React", "Node.js", "AI"],
  "liveUrl": "https://myproject.com",  // or "#" if no live site
  "thumbnail": "/assets/projects/my-new-project/thumb.jpg",
  "media": [
    {
      "type": "image",
      "src": "/assets/projects/my-new-project/screenshot1.jpg",
      "caption": "Homepage design"
    },
    {
      "type": "video",
      "src": "/assets/projects/my-new-project/demo.mp4",
      "caption": "Feature demo"
    }
  ],
  "highlights": [
    "Key feature 1",
    "Key feature 2",
    "Key feature 3"
  ]
}
```

### Step 3: Done! 🎉

The project will automatically appear on your dashboard. No coding required!

## 🎨 Customization

### Update Your Name and Photo

1. **Name**: Edit the `<span id="heroName">` text in `index.html` or it will use localStorage
2. **Photo**: Replace `public/assets/profile/photo.jpg` with your photo

### Change Colors

Edit the CSS custom properties in `src/styles/main.css`:

```css
:root {
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --color-text-accent: #667eea;
  /* ... more colors */
}
```

## 🌐 Deployment

This is a static site that can be deployed anywhere:

### GitHub Pages
```bash
npm run build
# Upload the 'dist' folder to GitHub Pages
```

### Netlify / Vercel
1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `dist`

## 📝 Project Data Schema

Each project in `projects.json` has the following structure:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | ✅ | Unique identifier (URL-friendly) |
| `title` | string | ✅ | Project name |
| `category` | string | ✅ | "personal" or "school" |
| `tagline` | string | ✅ | Short description (1 line) |
| `description` | string | ✅ | Detailed description |
| `techStack` | array | ✅ | Technologies used |
| `liveUrl` | string | ✅ | Live site URL (use "#" if none) |
| `thumbnail` | string | ✅ | Path to thumbnail image |
| `media` | array | ❌ | Images/videos for gallery |
| `highlights` | array | ❌ | Key features/achievements |

## 🎯 Features

- ✨ Modern, sleek dark theme with vibrant gradients
- 🎨 Glassmorphism and smooth animations
- 📱 Fully responsive design
- 🚀 Fast page transitions (View Transitions API)
- 📊 Separate sections for personal and school projects
- 🖼️ Media galleries with images and videos
- 🎭 Interactive hover effects and micro-animations
- 📦 Easy to add new projects (just edit JSON!)

## 🛠️ Tech Stack

- **Vite** - Fast build tool
- **Vanilla JavaScript** - No framework overhead
- **Modern CSS** - Custom properties, animations, glassmorphism
- **View Transitions API** - Smooth page transitions

## 📄 License

This is your personal portfolio - customize it however you want!

---

Built with ❤️ and AI assistance
