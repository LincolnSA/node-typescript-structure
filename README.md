
## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- node
- typescript
- ts-node-dev
- express
- eslint
- babel

## 💻 Projeto

Estrutura base para projetos com typescript ja configurado o ts-node-dev, eslint e o babel, faltando somente o prettier

## Guia

- mkdir novo_projeto -> cd novo_projeto
- git init
- yarn init -y
- yarn add -D typescript
- yarn tsc --init : criar e configurar o tsconfig.json
- yarn add -D ts-node-dev : configurar o package.json
  "dev": "ts-node-dev --respawn --transpileOnly --ignore-watch node_modules --no-notify src/server.ts"

- yarn add -D eslint
- yarn eslint --init : configurar 
- yarn add -D allDependences
- .eslintignore : criar e configurar 

- yarn add -D allDependences
- babel.config.js : criar e configurar
- configurar o package.json
  "build": "babel src --extensions \".js,.ts\" --out-dir dist --copy-files --no-copy-ignored",
  "start": "node dist/server.js"

Feito com ♥ by Lincoln silva :wave:

- [Instagram](https://www.instagram.com/_lincolnsilva_/)
- [Github](https://github.com/LincolnSA)
- [Portfólio](https://lincolnsa.github.io/portfolio/)
- [devlincolnsilva@gmail.com](mailto:devlincolnsilva@gmail.com?subject=Oi%20lincoln)