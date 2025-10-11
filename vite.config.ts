import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
plugins: [react()],
server: {
https: {
key: fs.readFileSync(path.resolve('/etc/letsencrypt/live/snfifteen.com/privkey.pem')),
cert: fs.readFileSync(path.resolve('/etc/letsencrypt/live/snfifteen.com/fullchain.pem')),
},
host: '0.0.0.0', // Listen on all network interfaces
port: 443,
allowedHosts: ['https://www.snfifteen.com',],
  //allowedHosts: ['snfifteen.com', 'www.snfifteen.com'],
proxy: {
'/api': {
target: 'http://192.168.29.15:5000',
changeOrigin: true,
rewrite: (path) => path.replace(/^\/api/, ''),
},
},
}
});

