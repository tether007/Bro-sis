import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: true
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        story: 'pages/story.html',
        impact: 'pages/impact.html',
        locations: 'pages/locations.html',
        menu: 'pages/menu.html',
        catering: 'pages/catering.html',
        shop: 'pages/shop.html',
        contact: 'pages/contact.html',
        careers: 'pages/careers.html',
        philanthropy: 'pages/philanthropy.html',
        stories: 'pages/stories.html',
        signup: 'pages/signup.html',
        press: 'pages/press.html',
        privacy: 'pages/privacy.html',
        order: 'pages/order.html'
      }
    }
  }
});