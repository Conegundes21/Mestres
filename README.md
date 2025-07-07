# Mestres do Desenvolvimento

## Configuração de Variáveis de Ambiente

Para proteger a URL da sua planilha do Google Sheets, siga estas instruções:

### 1. Criar arquivo .env

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
VITE_SHEETDB_URL=https://sheetdb.io/api/v1/SUA_URL_REAL_AQUI
```

### 2. Configurar no Vercel (ou outro provedor)

Se estiver usando Vercel, adicione a variável de ambiente nas configurações do projeto:

1. Vá para o dashboard do Vercel
2. Selecione seu projeto
3. Vá em "Settings" > "Environment Variables"
4. Adicione:
   - **Name**: `VITE_SHEETDB_URL`
   - **Value**: `https://sheetdb.io/api/v1/SUA_URL_REAL_AQUI`
   - **Environment**: Production (e Development se necessário)

### 3. Segurança

- ✅ A URL da planilha agora está protegida por variável de ambiente
- ✅ O código não expõe mais a URL diretamente
- ✅ Diferentes ambientes podem usar URLs diferentes
- ✅ A planilha pode ser privada sem afetar o código

### 4. Desenvolvimento Local

Para desenvolvimento local, crie o arquivo `.env` com sua URL real da planilha.

### 5. Estrutura do Projeto

```
src/
├── config/
│   └── api.ts          # Configurações centralizadas da API
├── pages/
│   ├── Quizz.tsx       # Quiz principal
│   └── QuizTeste.tsx   # Quiz de teste
└── ...
```

## Como Funciona

1. O usuário completa o quiz
2. Os dados são enviados para a planilha via SheetDB
3. A URL da planilha é obtida da variável de ambiente
4. Se não houver variável configurada, usa a URL padrão como fallback

## Próximos Passos

1. Crie o arquivo `.env` com sua URL real
2. Configure a variável no seu provedor de hospedagem
3. Teste o envio de dados para a planilha
4. Considere tornar a planilha privada no Google Sheets