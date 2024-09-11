npm create vite@latest

y/ enter
nome do projeto / enter
enter
typescript /enter


após isso abrir o visual studio code e entrar na pasta e dar o npm install


para rodar o projeto npm run dev
instalar o bootstrap / npm install boostrap
instalar esse também npm install react-bootstrap


------------------------------------------------------------------------------------------
instalar  libs

npm install @types/jsonwebtoken
npm install jsonwebtoken

npm install axios

npm install json-server
npm install json-server-auth

npm install jwt-decode


--------------------------------------------------------------------------------------------
criamos a pasta jsonserver e o arquivo db.json dentro da pasta, na raiz do projeto

{
    "users":[
        {
            "id": 1,
            "email": "admin@gmail.com",
            "password": "$2a$10$Y4/4ws04wYotZQg2RB1bwurp7W6RCq.NLrUEEONlOZEdjLXCVG/LW",
            "nome": "Admin",
            "permissoes": "admin"
        }
    ]
}


----------------------------------------------------------------------------------------------
comando para iniciar o json server

npx json-server ./jsonserver/db.json --port 3001 -m ./node_modules/json-server-auth

no arquivo packeje.json

  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "server" : "npx json-server ./jsonserver/db.json --port 3001 -m ./node_modules/json-server-auth"   // colocamos um apelido para o comando esse é o caminho pro arquivo db.json
  },


comando para rodar --  npm run server
---------------------------------------------------------------------------------------------------

npm install react-hook-form // para gerenciar formulario diferente da tela de login

















