# GiraPrêmio

Protótipo independente para organização de campanhas promocionais. Este repositório contém a vitrine e o painel demonstrativo.

## Funcionalidades presentes
- Página institucional responsiva.
- Catálogo com exemplos fictícios.
- Cadastro e edição de campanhas no navegador (`localStorage`).
- Controle manual de etapas e exportação CSV.
- Informações de conformidade e links oficiais.

## Limitações
Esta versão não possui backend, autenticação, banco de dados, cadastro de participantes, venda de números, checkout, pagamentos, apuração ou sorteio. Os dados ficam apenas no navegador local. O status "Autorizada" é manual e não valida documentos em fonte oficial.

## Executar localmente
Requer Node.js compatível com Next.js 16.

```bash
npm install
npm run dev
```

Para gerar a versão estática:

```bash
npm run build
```

A saída estática é gerada em `out/`.

## Atenção jurídica — Brasil
O protótipo não deve ser usado para oferecer rifas com venda de bilhetes. Promoções comerciais com distribuição gratuita de prêmios podem exigir autorização prévia da Secretaria de Prêmios e Apostas do Ministério da Fazenda. Verifique o enquadramento e as regras oficiais antes de realizar qualquer campanha.

- [Ministério da Fazenda — Promoção Comercial](https://www.gov.br/fazenda/pt-br/composicao/orgaos/secretaria-de-premios-e-apostas/promocao-comercial/promocao-comercial)
- [Ministério da Fazenda — As rifas são permitidas?](https://www.gov.br/fazenda/pt-br/composicao/orgaos/secretaria-de-premios-e-apostas/promocao-comercial/promocao-comercial/promocoes-comerciais/36-as-rifas-sao-permitidas)

Não insira dados pessoais reais ou documentos sensíveis nesta demonstração.
