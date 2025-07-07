// Configurações da API
export const API_CONFIG = {
  // URL da planilha do Google Sheets via SheetDB
  SHEETDB_URL: process.env.VITE_SHEETDB_URL || '',
  
  // Outras configurações de API podem ser adicionadas aqui
  GOOGLE_ANALYTICS_ID: 'G-0LH5V00NQP',
  FACEBOOK_PIXEL_ID: '1086131660072186',
} as const; 