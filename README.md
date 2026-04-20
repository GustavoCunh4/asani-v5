# Asani

Site institucional da Asani, construido com Vite, TypeScript, GSAP, Lenis e Three.js.

## Requisitos

- Node.js 18 ou superior
- npm

## Instalar dependencias

Na pasta raiz do projeto, execute:

```bash
npm install
```

## Rodar em desenvolvimento

```bash
npm run dev
```

O Vite exibira uma URL local, normalmente:

```txt
http://localhost:5173/asani-v5/
```

Use essa URL para testar o site durante o desenvolvimento.

## Gerar versao de producao

```bash
npm run build
```

O build final e gerado na pasta:

```txt
docs/
```

Essa pasta contem os arquivos estaticos prontos para publicacao.

## Testar o build localmente

Depois de rodar `npm run build`, execute:

```bash
npm run preview
```

O Vite exibira uma URL local para visualizar a versao final ja compilada.

## Publicacao em nuvem

Para plataformas como Google Cloud, Vercel, Netlify, Cloudflare Pages ou servidores com deploy automatico, use:

```txt
Install command: npm install
Build command: npm run build
Output directory: docs
```

## Configuracao de caminho base

O arquivo `vite.config.ts` define:

```ts
base: '/asani-v5/'
```

Esse valor foi usado para visualizacao em GitHub Pages. Para publicar no dominio raiz, por exemplo `https://empresa.com/`, ajuste para:

```ts
base: '/'
```

Para publicar em uma subpasta, por exemplo `https://empresa.com/site/`, use:

```ts
base: '/site/'
```

Depois de alterar o `base`, gere um novo build com:

```bash
npm run build
```

## Estrutura principal

```txt
index.html          Estrutura HTML do site
src/                Codigo TypeScript e CSS
imgs/               Imagens usadas pelo site
public/             Arquivos publicos copiados diretamente no build
docs/               Build de producao gerado pelo Vite
vite.config.ts      Configuracao do Vite
package.json        Scripts e dependencias
package-lock.json   Versoes travadas das dependencias
```

## O que nao deve ser versionado

Nao inclua no repositorio:

- `node_modules/`
- arquivos temporarios
- arquivos `.log`
- imagens de referencia que nao fazem parte do site
- builds antigos fora da pasta definida no projeto

## Comandos uteis

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Observacao sobre o build

Durante o build, o Vite pode emitir um aviso sobre o chunk do Three.js passar de 500 kB. Isso e um aviso de tamanho, nao um erro de compilacao. O build esta valido quando o comando termina com sucesso.
