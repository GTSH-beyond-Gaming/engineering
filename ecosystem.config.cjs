module.exports = {
  apps: [{
    name: 'gtsh-chat-api',
    script: 'chat-api-server.cjs',
    cwd: __dirname,
    watch: false,
    autorestart: true,  // Auto-restart nach Crash!
    restart_delay: 100, // Schneller Restart
    max_restarts: 1000, // Viele Restarts erlaubt
    min_uptime: 100,
    env: {
      NODE_ENV: 'production'
    }
  }]
};
