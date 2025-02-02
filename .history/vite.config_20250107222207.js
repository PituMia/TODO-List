import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Esto hace que Vite escuche en todas las interfaces de red (LAN)
    port: 3000,        // Puedes mantener el puerto predeterminado (3000) o cambiarlo si lo prefieres
    open: true,        // Opcional: abre el navegador automáticamente al iniciar el servidor
  }
})