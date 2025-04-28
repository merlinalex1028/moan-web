import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3334/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      console.error('cypress.config.ts', on, config)
    }
  },

  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite'
    }
  }
})
