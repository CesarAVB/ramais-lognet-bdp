# CLAUDE.md

## Contexto do Projeto

- **Framework**: Angular 20 — componentes standalone, sem NgModule
- **Projeto**: `ramais-lognet-bdp`
- **Tipo**: SPA standalone, sem backend (dados via JSON estático)
- **Propósito**: Diretório de ramais VoIP da Prefeitura Municipal de Barra do Piraí

---

## Princípios de Design (Impeccable)

### Anti-padrões a evitar sempre

- **Fontes**: nunca usar Inter ou Arial — usar `system-ui` ou uma web font com personalidade
- **Cores neutras**: nunca cinza puro (#6c757d, #aaa) — sempre matizar levemente (quente ou frio)
- **Preto/branco puros**: usar quase-preto (#1E2A38) e quase-branco (#F4F6F9)
- **Cards aninhados**: não colocar card dentro de card
- **Texto cinza sobre fundo colorido**: sempre garantir contraste WCAG AA
- **Easing bounce/elástico**: usar `ease-out` — nunca animações que "saltam"

### Sempre incluir

```css
@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; animation: none !important; }
}
```

---

## Paleta do projeto

| Token | Valor | Uso |
|---|---|---|
| `--color-primary` | `#E84E0F` | Laranja LOGNET — destaques, bordas ativas |
| `--color-secondary` | `#1A6BAD` | Azul PMBP — números de ramal |
| `--color-bg` | `#F4F6F9` | Fundo da página |
| `--color-surface` | `#FFFFFF` | Cards, header |
| `--color-text` | `#1E2A38` | Texto principal |
| `--color-muted` | `#6B7A8D` | Texto secundário |

---

## Regras do projeto Angular

### Nomenclatura de arquivos (Angular 20)

| Tipo | Nome do arquivo | Exemplo |
|---|---|---|
| Componente | `nome.ts` | `spinner.ts` |
| Service global | `nome.ts` | `loading.ts` |
| Service feature | `[feature].ts` | `ramais.ts` |
| Interceptor | `nome-interceptor.ts` | `loading-interceptor.ts` |
| Model | `[nome].ts` | `ramal.ts` |

### Padrões obrigatórios

- Componentes **standalone** — sem NgModule
- `inject()` em vez de constructor injection para services
- `styleUrl` (singular) — não `styleUrls`
- Sem arquivos `.spec.ts`
- Signals para estado: `signal()`, `computed()`

---

## Dados

O JSON de ramais fica em `src/assets/data/ramais.json`:

```json
[
  { "setor": "NOME DA SECRETARIA", "ramal": 2001 }
]
```

A ordem no arquivo determina a ordem de exibição.

---

## Assets (logos)

Os logos ficam em `resources/` na raiz e são mapeados pelo `angular.json`:
- `resources/logo-PMBP.png` → `/assets/logo-PMBP.png`
- `resources/logo_horizontal.png` → `/assets/logo_horizontal.png`
- `resources/favicon.ico` → `/favicon.ico`
