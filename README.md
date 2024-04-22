# DesafioMottuAngular

## Instruções para rodar o projeto
Para rodar o projeto basta utilizar o `npm run start`

O projeto esta disponível no GitPages ➡️ [Clique aqui](https://mikeoliveira.github.io/desafio-mottu-angular/)

Para publicar no Git Pages por agilidade optamos por utilizar o CI/CD atráves do monitoramento da pasta `\docs` onde era gerado o build do projeto e o git apos o push realizava a construção da aplicação.

Para controlar a Busca de personagens e Adiciona-los ao Favoritos - Foi utilizado NgRx.

Para evitar perder os dados a cada F5, foi salvo em localstorage💾 as informações - realizando um Encript 🔐 das informações.

A Aplicação se encontra responsiva.

Será possível encontrar as comunicações de `@Input e @Output e EventEmitter` no elemento `shared\botao-favoritar.component.ts`

Os arquivos de estilos possuem a importação de `_variable.scss` e algumas propridades de estilo do proprio Angular Material foram reescritas.

Foi Aplicado Lazyload para o carregamento do modulo `personagens-routing.module.ts`

Boa parte da aplicação esta tipada corretamente.

## Sobre a Busca do Personagem

A busca ocorre apartir do 3 digito.

Quando o valor do form de input é alterado e diferente do valor anterior digitado e um delay de 300ms para realizar a requisição







