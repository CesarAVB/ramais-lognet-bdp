# ramais-lognet-bdp

Diretório de ramais VoIP da Prefeitura Municipal de Barra do Piraí — SPA Angular 20 (standalone components) que carrega um JSON estático e permite busca em tempo real por secretaria ou número de ramal.

**Visão Geral**
- **Tipo:** SPA Angular 20 (standalone)
- **Dados:** arquivo estático em [src/assets/data/ramais.json](src/assets/data/ramais.json)
- **Design spec:** [docs/superpowers/specs/2026-04-13-ramais-design.md](docs/superpowers/specs/2026-04-13-ramais-design.md)

**Tecnologias principais**
- **Angular:** 20
- **TypeScript:** conforme `package.json`
- **RxJS, zone.js** — usadas pelo runtime Angular

**Pré-requisitos**
- **Node.js:** 22+ recomendado
- **npm** (vem com Node)

**Como rodar localmente**
1. Instale dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento (usa o `ng` local instalado por `npm install`):

```bash
npm start
# ou: npx ng serve
```

3. Abra no navegador: http://localhost:4200

**Build para produção**

```bash
npm run build
```

**Dados / Atualização de ramais**
- Edite [src/assets/data/ramais.json](src/assets/data/ramais.json). Cada item tem o formato:

```json
{ "setor": "NOME DA SECRETARIA", "ramal": 2001 }
```
- A ordem no JSON determina a ordem de exibição.

**Assets (logos)**
- Os logos estão na raiz em `resources/` e são copiados pelo build para `assets` conforme [angular.json](angular.json).
- Arquivos: [resources/logo-PMBP.png](resources/logo-PMBP.png), [resources/logo_horizontal.png](resources/logo_horizontal.png), [resources/favicon.ico](resources/favicon.ico).

**Arquitetura / Estrutura**
- Componentes principais: [src/app/app.ts](src/app/app.ts), [src/app/components/header/header.ts](src/app/components/header/header.ts), [src/app/components/search-bar/search-bar.ts](src/app/components/search-bar/search-bar.ts), [src/app/components/ramais-grid/ramais-grid.ts](src/app/components/ramais-grid/ramais-grid.ts), [src/app/components/ramal-card/ramal-card.ts](src/app/components/ramal-card/ramal-card.ts).
- Serviços: [src/app/services/ramais.ts](src/app/services/ramais.ts), [src/app/services/loading.ts](src/app/services/loading.ts).

**Notas de design importantes**
- Componentes standalone, uso de `signal()` e `computed()` para estado (ver o spec em [docs/superpowers/specs/2026-04-13-ramais-design.md](docs/superpowers/specs/2026-04-13-ramais-design.md)).
- Busca com debounce (300ms), normalização sem acentos e filtro por setor e ramal.

**Como contribuir**
- Abra uma branch `feature/` com uma descrição curta.
- Atualize `src/assets/data/ramais.json` se for editar dados.
- Envie PR com descrição das mudanças e screenshots quando for alteração visual.

---

Se quiser, posso também: executar a aplicação localmente (`npm install` + `npm start`) ou adicionar instruções de deploy (GitHub Pages / Netlify / Azure). Diga qual prefere.
