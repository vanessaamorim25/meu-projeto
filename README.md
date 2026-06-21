# Projeto CI com GitHub Actions

## Objetivo

Implementar uma pipeline de integração contínua utilizando GitHub Actions.

## Tecnologias

- Node.js
- Mocha
- Mochawesome
- GitHub Actions

## Execução automática

A pipeline é disparada por push no repositório.

## Execução manual

Pode ser executada através da opção Run Workflow na aba Actions.

## Execução agendada

Utiliza cron:

0 12 * * *

Executando diariamente às 12h UTC.

## Etapas da pipeline

1. Checkout do código.
2. Configuração do Node.js.
3. Instalação das dependências.
4. Execução dos testes automatizados.
5. Geração do relatório.
6. Publicação do relatório como artifact.

## Relatório de testes

O relatório é gerado pelo Mochawesome e armazenado nos artifacts da execução.