![poster](./.github/poster.png)

# 🚀 QA Automation Project | Playwright + GitHub Actions

Projeto de automação de testes E2E desenvolvido com Playwright e TypeScript, utilizando integração contínua com GitHub Actions para execução automatizada dos testes, geração de evidências e relatórios HTML.

---

# 📌 Sobre o Projeto

Este projeto simula um ambiente real de QA Automation, aplicando boas práticas utilizadas em times profissionais de qualidade de software.

A aplicação contempla:

- Automação de testes End-to-End (E2E)
- Execução automatizada de regressão
- Integração contínua (CI/CD)
- Geração automática de evidências
- Relatórios HTML
- Captura de screenshots e vídeos
- Estrutura escalável para automação

---

# 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
|---|---|
| Playwright | Automação E2E |
| TypeScript | Linguagem dos testes |
| Node.js | Ambiente de execução |
| GitHub Actions | Pipeline CI/CD |
| HTML Report | Relatórios automatizados |

---

# 📂 Estrutura do Projeto

```bash
PLAYWRIGHT-ACTIONS/
├── .github/
│   ├── workflows/
│   │   └── playwright.yml
│   └── poster.png
│
├── e2e/
│   └── login.spec.ts
│
├── playwright-report/
├── test-results/
│
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
```

---

# 💻 Pré-requisitos

Antes de executar o projeto, é necessário possuir instalado:

- Node.js 18+
- npm
- Git

---

# ⬇️ Como Baixar o Projeto

## Clonar o repositório

```bash
git clone https://github.com/ThaisdosSantos/playwright-actions.git
```

---

## Acessar a pasta do projeto

```bash
cd playwright-actions
```

---

# ⚙️ Instalação

## Instalar dependências

```bash
npm install
```

---

## Instalar navegadores do Playwright

```bash
npx playwright install
```

---

# ▶️ Execução dos Testes

## Executar todos os testes

```bash
npx playwright test
```

---

## Executar em modo visual

```bash
npx playwright test --headed
```

---

## Executar um teste específico

```bash
npx playwright test e2e/login.spec.ts
```

---

## Executar em modo debug

```bash
npx playwright test --debug
```

---

# 📊 Relatórios Automatizados

Após a execução dos testes:

```bash
npx playwright show-report
```

O relatório HTML apresenta:

- Resultado dos testes
- Tempo de execução
- Logs
- Screenshots
- Vídeos
- Evidências de falha

---

# 📸 Evidências de Teste

O projeto está configurado para gerar automaticamente:

- Screenshots em falhas
- Vídeos das execuções
- Relatórios HTML
- Artefatos no GitHub Actions

---

# 🔄 Integração Contínua (CI/CD)

A automação é executada automaticamente via GitHub Actions em:

- Push na branch principal
- Pull Requests
- Execuções manuais

Arquivo do workflow:

```bash
.github/workflows/playwright.yml
```

---

# 🧪 Estratégias de Teste Aplicadas

- Testes End-to-End (E2E)
- Testes de regressão
- Validação de fluxo crítico
- Captura automática de evidências
- Execução contínua em pipeline

---

# 📈 Objetivos Técnicos

Este projeto tem como foco:

- Aplicação de boas práticas de QA Automation
- Simulação de ambiente corporativo de testes
- Estruturação de pipeline CI/CD
- Garantia de qualidade contínua
- Escalabilidade da automação
---


# 👩‍💻 Autor

Projeto desenvolvido para estudos, práticas e evolução em QA Automation, utilizando Playwright e GitHub Actions.

---

# 📚 Referências

- https://playwright.dev/
- https://github.com/microsoft/playwright
- https://docs.github.com/actions

---