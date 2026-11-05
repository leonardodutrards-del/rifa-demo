# GiraPrêmio

Protótipo independente para organização de campanhas promocionais e prêmios, isolado do projeto Noite DF.

## Objetivo
Demonstrar um fluxo administrativo para cadastrar campanhas, organizar prêmios, acompanhar etapas de documentação e exportar os registros em CSV.

## Funcionalidades desta versão
- Página institucional e vitrine demonstrativa.
- Cadastro local de campanhas e prêmios.
- Campos de período, certificado de autorização e regulamento.
- Etapas internas: rascunho, aguardando autorização, autorizada e encerrada.
- Exportação CSV dos registros.
- Layout responsivo.

## Limitações técnicas
- Os registros são armazenados apenas no localStorage do navegador usado. Não há backend, sincronização entre dispositivos, autenticação ou contas de organizador.
- Não há cadastro de participantes, venda de números, checkout, pagamentos, reserva de bilhetes, apuração de ganhadores ou sorteio automático.
- O status "Autorizada" é apenas um marcador manual; o sistema não consulta nem valida certificados em fontes oficiais.
- Não inserir dados pessoais reais ou documentos sensíveis nesta demonstração.

## Atenção jurídica — Brasil
O produto deve ser usado apenas para organizar campanhas em modalidade legalmente permitida e com as autorizações aplicáveis. Rifas com venda de bilhetes numerados são proibidas como regra geral. Promoções comerciais com distribuição gratuita de prêmios dependem de autorização prévia da Secretaria de Prêmios e Apostas do Ministério da Fazenda; há regras específicas para operações filantrópicas de entidades elegíveis. A plataforma não habilita práticas proibidas nem substitui a análise jurídica.

Fontes oficiais:
- [Ministério da Fazenda — Promoção Comercial](https://www.gov.br/fazenda/pt-br/composicao/orgaos/secretaria-de-premios-e-apostas/promocao-comercial/promocao-comercial)
- [Ministério da Fazenda — As rifas são permitidas?](https://www.gov.br/fazenda/pt-br/composicao/orgaos/secretaria-de-premios-e-apostas/promocao-comercial/promocao-comercial/promocoes-comerciais/36-as-rifas-sao-permitidas)

## Rodar localmente
```bash
npm install
npm run dev
```

## Publicação Cloudflare Pages
- Repositório: `noite-df-mvp`
- Branch: `feat/plataforma-giro-commerce`
- Diretório raiz: `rifa-commerce`
- Build: `npm run build`
- Saída: `out`

A aplicação usa exportação estática para o Cloudflare Pages. Não configure credenciais ou dados bancários no repositório.
