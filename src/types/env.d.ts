/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SHEETDB_URL?: string
  // Adicione outras variáveis de ambiente aqui conforme necessário
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Extensões do Window para Google Analytics e Facebook Pixel
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    fbq?: (...args: any[]) => void
  }
} 