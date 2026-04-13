# ramais-lognet-bdp

Diretório de ramais VoIP da Prefeitura Municipal de Barra do Piraí. SPA Angular com busca em tempo real por secretaria ou número de ramal.

## Tecnologias

| Tecnologia   | Versão |
|--------------|--------|
| Angular      | 20     |
| TypeScript   | 5.x    |
| Bootstrap    | 5.3    |
| Font Awesome | 6.5    |
| RxJS         | 7.x    |

## Pré-requisitos

- Node.js 22+
- Angular CLI 20: `npm install -g @angular/cli`

## Como rodar localmente

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie a aplicação:
   ```bash
   ng serve
   ```

3. Acesse: `http://localhost:4200`

## Como atualizar os ramais

Edite o arquivo `src/assets/data/ramais.json`. Cada entrada segue o formato:

```json
{ "setor": "NOME DA SECRETARIA", "ramal": 2001 }
```

A ordem no JSON determina a ordem de exibição na página.

## Assets (logos)

Os logos estão na pasta `resources/` na raiz do projeto:

| Arquivo | Uso |
|---|---|
| `resources/logo-PMBP.png` | Logo da Prefeitura (header, lado esquerdo) |
| `resources/logo_horizontal.png` | Logo LOGNET (header, lado direito) |
| `resources/favicon.ico` | Ícone da aba do navegador |

O `angular.json` está configurado para copiar esses arquivos automaticamente no build.

## Estrutura de pastas

```
src/app/
  components/
    alert/          → mensagens de feedback
    badge-status/   → badge colorido de status
    footer/         → rodapé
    header/         → cabeçalho com logos
    ramal-card/     → card individual de ramal
    ramais-grid/    → grade de cards + skeleton + estado vazio
    search-bar/     → campo de busca com debounce
    spinner/        → overlay de carregamento
  services/
    alert.ts        → serviço de alertas
    loading.ts      → serviço de spinner
    loading-interceptor.ts
    ramais.ts       → carrega o JSON de ramais
  shared/
    models/ramal.ts → interface Ramal
  app.ts|html|css   → componente raiz
  app.config.ts     → configuração do Angular
src/assets/
  data/ramais.json  → dados dos ramais
src/environments/   → configurações de ambiente
```
