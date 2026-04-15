# Ramais LOGNET - Prefeitura de Barra do Piraí

Aplicação Angular para consulta de ramais VoIP da Prefeitura Municipal de Barra do Piraí. O projeto carrega uma base estática em JSON, exibe os setores em cards e permite busca por nome do setor ou número do ramal.

## Visão geral

- SPA Angular 20 com componentes standalone
- Busca em tempo real com debounce
- Base de dados local em JSON
- Layout responsivo com foco em mobile first
- Header com resumo dos ramais e área de busca separada

## Funcionalidades

- Consulta de ramais por setor
- Consulta de ramais por número
- Filtro com normalização de texto
  Aceita variações com e sem acento
- Indicadores de quantidade no header
- Estado de carregamento durante leitura da base
- Estado de erro quando o arquivo de dados não pode ser carregado
- Cards de listagem com leitura rápida para uso institucional

## Stack

- Angular `20`
- TypeScript `~5.8.0`
- RxJS `~7.8.0`
- Zone.js `~0.15.0`
- Angular standalone components

## Requisitos

- Node.js `22+` recomendado
- npm

## Como executar

Instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm start
```

A aplicação será servida em:

```text
http://localhost:4200
```

## Scripts disponíveis

- `npm start`: sobe o servidor de desenvolvimento com `ng serve`
- `npm run build`: gera o build de produção
- `npm run watch`: gera build em modo watch com configuração de desenvolvimento

## Build

Para gerar a versão de produção:

```bash
npm run build
```

Saída gerada em:

```text
dist/ramais-lognet-bdp
```

## Estrutura do projeto

```text
.
├── resources/                  # logos e favicon usados pelo build
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── alert/
│   │   │   ├── footer/
│   │   │   ├── header/
│   │   │   ├── ramais-grid/
│   │   │   ├── ramal-card/
│   │   │   ├── search-bar/
│   │   │   └── spinner/
│   │   ├── services/
│   │   │   ├── alert.ts
│   │   │   ├── loading-interceptor.ts
│   │   │   ├── loading.ts
│   │   │   ├── ramais.ts
│   │   │   └── theme.ts
│   │   ├── shared/models/
│   │   ├── app.config.ts
│   │   ├── app.css
│   │   ├── app.html
│   │   └── app.ts
│   ├── assets/
│   │   ├── data/ramais.json
│   │   └── logo.png
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
└── README.md
```

## Fluxo de dados

1. O app inicializa em [src/app/app.ts](src/app/app.ts)
2. O serviço [src/app/services/ramais.ts](src/app/services/ramais.ts) busca `assets/data/ramais.json`
3. O interceptor [src/app/services/loading-interceptor.ts](src/app/services/loading-interceptor.ts) ativa o estado de carregamento
4. Os dados são armazenados em `signal()`
5. A busca filtra a lista com `computed()`
6. O resultado é renderizado em [src/app/components/ramais-grid/ramais-grid.html](src/app/components/ramais-grid/ramais-grid.html)

## Modelo de dados

Cada item da base segue a interface [src/app/shared/models/ramal.ts](src/app/shared/models/ramal.ts):

```ts
export interface Ramal {
  setor: string;
  ramal: number;
}
```

Exemplo de registro em [src/assets/data/ramais.json](src/assets/data/ramais.json):

```json
{
  "setor": "SECRETARIA DE SAUDE",
  "ramal": 2045
}
```

## Atualização da base de ramais

Edite o arquivo:

- [src/assets/data/ramais.json](src/assets/data/ramais.json)

Boas práticas ao editar:

- manter `setor` como texto descritivo
- manter `ramal` como número
- evitar duplicidade desnecessária
- revisar ordem de exibição, pois a listagem segue a ordem do JSON

## Busca

A busca fica no componente [src/app/components/search-bar/search-bar.ts](src/app/components/search-bar/search-bar.ts) e possui:

- `debounceTime(300)`
- `distinctUntilChanged()`
- emissão por `EventEmitter`
- limpeza manual do termo

No app principal, o filtro:

- converte tudo para minúsculas
- remove acentos com normalização Unicode
- compara tanto `setor` quanto `ramal`

## Componentes principais

- [src/app/components/header/header.ts](src/app/components/header/header.ts)
  Exibe identidade visual, resumo e contato
- [src/app/components/search-bar/search-bar.ts](src/app/components/search-bar/search-bar.ts)
  Campo de busca com debounce
- [src/app/components/ramais-grid/ramais-grid.ts](src/app/components/ramais-grid/ramais-grid.ts)
  Controla grid, skeleton e estado vazio
- [src/app/components/ramal-card/ramal-card.ts](src/app/components/ramal-card/ramal-card.ts)
  Exibe setor e número do ramal
- [src/app/components/spinner/spinner.ts](src/app/components/spinner/spinner.ts)
  Indicador de carregamento global
- [src/app/components/alert/alert.ts](src/app/components/alert/alert.ts)
  Exibição de alertas
- [src/app/components/footer/footer.ts](src/app/components/footer/footer.ts)
  Rodapé institucional

## Assets

Os arquivos institucionais ficam em [resources](resources) e são copiados pelo build conforme [angular.json](angular.json).

Arquivos atualmente usados:

- [resources/favicon.ico](resources/favicon.ico)
- [resources/logo-PMBP.png](resources/logo-PMBP.png)
- [resources/logo_horizontal.png](resources/logo_horizontal.png)
- [resources/logo.png](resources/logo.png)

Além disso, existe uma cópia de `logo.png` em:

- [src/assets/logo.png](src/assets/logo.png)

## Configuração Angular

O projeto usa [src/app/app.config.ts](src/app/app.config.ts) para:

- habilitar `provideZoneChangeDetection`
- configurar `provideHttpClient`
- registrar o interceptor de loading

## Responsividade e interface

Pontos de interface relevantes no estado atual:

- mobile first
- hero institucional no desktop
- cabeçalho compacto no mobile
- faixa de busca separada do header
- cards padronizados para leitura rápida

Estilos principais:

- globais em [src/styles.css](src/styles.css)
- composição da página em [src/app/app.css](src/app/app.css)
- cabeçalho em [src/app/components/header/header.css](src/app/components/header/header.css)
- busca em [src/app/components/search-bar/search-bar.css](src/app/components/search-bar/search-bar.css)

## Observações

- O arquivo [src/app/services/theme.ts](src/app/services/theme.ts) permanece no repositório, mas o modo escuro foi removido da interface atual.
- O componente `badge-status` existe na estrutura, porém não faz parte do fluxo visual principal no estado atual do projeto.

## Manutenção recomendada

- validar o JSON antes de publicar alterações de ramais
- manter nomes de setores consistentes
- revisar o build com `npm run build` após mudanças visuais
- atualizar screenshots e documentação quando houver mudança de layout

## Verificação rápida

Fluxo mínimo para revisão local:

```bash
npm install
npm start
npm run build
```

## Licença

Uso institucional / interno, conforme política da organização responsável pelo projeto.
