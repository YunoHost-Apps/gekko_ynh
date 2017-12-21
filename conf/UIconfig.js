// This config is used in both the
// frontend as well as the web server.

// see https://github.com/askmike/gekko/blob/stable/docs/installing_gekko_on_a_server.md

const CONFIG = {
  headless: true,
  api: {
    host: '127.0.0.1',
    port: 3050,
    timeout: 120000 // 2 minutes
  },
  ui: {
    ssl: true,
    host: 'YNH_DOMAIN',
    port: 3050,
    path: 'YNH_PATH'
  },
  adapter: 'sqlite'
}

if(typeof window === 'undefined')
  module.exports = CONFIG;
else
  window.CONFIG = CONFIG;
