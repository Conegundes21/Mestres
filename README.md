# Mestres do Desenvolvimento

## Como Funciona

1. O usuário completa o quiz
2. Os dados são enviados para a planilha via SheetDB
3. A URL da planilha está configurada no código
4. Funciona imediatamente sem configuração adicional

## Estrutura do Projeto

```
src/
├── config/
│   └── api.ts          # Configurações centralizadas da API
├── pages/
│   ├── Quizz.tsx       # Quiz principal
│   └── QuizTeste.tsx   # Quiz de teste
└── ...
```

## Deploy

Pode fazer deploy diretamente no Vercel sem configuração adicional. O código já está pronto para funcionar.

## Segurança

- ✅ A URL da planilha está no código mas pode ser alterada facilmente
- ✅ Para maior segurança, você pode tornar a planilha privada no Google Sheets
- ✅ Compartilhe a planilha apenas com o e-mail de serviço do SheetDB

## Próximos Passos

1. Faça o deploy no Vercel
2. Teste o quiz no site publicado
3. Verifique se os dados chegam na planilha
4. Considere tornar a planilha privada no Google Sheets