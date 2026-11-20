import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'resend-email-middleware',
        configureServer(server) {
          server.middlewares.use('/api/send-email', async (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.end(JSON.stringify({ error: 'Method Not Allowed' }));
              return;
            }

            let body = '';
            req.on('data', chunk => {
              body += chunk.toString();
            });

            req.on('end', async () => {
              try {
                const parsedBody = JSON.parse(body || '{}');
                const apiKey = env.VITE_RESEND_API_KEY || process.env.VITE_RESEND_API_KEY || process.env.RESEND_API_KEY;

                if (!apiKey) {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ 
                    error: 'Missing VITE_RESEND_API_KEY in .env file. Please add your Resend API key to enable email delivery.' 
                  }));
                  return;
                }

                // Send request directly to Resend API from Node.js (no CORS issues)
                const resendResponse = await fetch('https://api.resend.com/emails', {
                  method: 'POST',
                  headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(parsedBody),
                });

                const data = await resendResponse.json();
                res.statusCode = resendResponse.status;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(data));
              } catch (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: err.message }));
              }
            });
          });
        },
      },
    ],
    server: {
      port: 3000,
      host: true,
    },
  };
});
