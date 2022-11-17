⚠️ desenvolvimento...

# AppTasks

## Quem participa desse projeto e com qual função?

| [<img src="https://avatars.githubusercontent.com/u/84737472?v=4" width=115><br><sub>Jane Luz</sub>](https://github.com/janeluz) |  [<img src="https://avatars.githubusercontent.com/u/94421128?v=4" width=115><br><sub>Paulo Andreola</sub>](https://github.com/pauloandreola) |  [<img src="https://avatars.githubusercontent.com/u/81385265?v=4" width=115><br><sub>Dakson Cruz</sub>](https://github.com/DaksonC) |
| :---: | :---: | :---: |
|<sub>Back End</sub>|<sub>Back End</sub>|<sub>Front End</sub>|

 

## Dor/Problema

- A Sidelab hoje não possui um acompanhamento do que cada colaborador realizou de tarefa em cada dia seu de trabalho. É de nosso interesse que exista uma solução para resolver esse problema.
- Um portal onde todos do time poderão lançar suas tarefas realizadas, contendo pelo menos as seguintes informações
    - Nome da tarefa
    - Descrição da tarefa
    - Quantidade de horas gastas para realizar a tarefa
    - Data que a tarefa foi realizada
- Somente poderá acessar a plataforma usuários que estiverem cadastrados e logados, sendo que essa plataforma deverá realizar a gestão de usuários e ter a funcionalidade de login
- Deverá ter também diferença de acesso entre os usuários.
- A Sidelab se preocupa com a privacidade do usuário e utiliza novas tecnologias para fornecer uma aplicação mais segura ao usuário. Portanto, no que for possível, utilizar os conceitos de web3 para esse projeto

## Requisitos

### Funcionais

- Deverá ser possível cadastrar um novo usuário. Será uma rota pública que receberá nome, e-mail e senha. O nome precisará ter pelo menos 3 caracteres. O e-mail deverá ser um e-mail válido. A senha deverá ter no mínimo 6 caracteres
- Não deverá existir usuários duplicados: verificar utilizando o e-mail
- Deverá ser possível realizar login. Será uma rota pública que receberá e-mail e senha.
- Um usuário que não for cadastrado não deverá conseguir logar na aplicação
- Deverá ser possível um usuário inserir uma nova foto de perfil. Será uma rota privada.
- Deverá ser possível atualizar os dados de um usuário. Será uma rota privada.
- Deverá ser possível realizar a criação de uma task. Será uma rota privada.
- Deverá ser possível realizar a atualização de uma task. Será uma rota privada. Somente o usuário que criou a task poderá atualizá-la
- Deverá ser possível realizar a deletar uma task. Será uma rota privada. Somente o usuário que criou a task poderá deletá-la
- Deverá ser possível listar as tasks. Será uma rota privada. O usuário somente verá as tasks que ele mesmo criou. Deverá ser possível ordenar e filtrar as tasks com base nos campos "created_at", "updated_at" e "done"

### Não funcionais

- Utilizar o webframework Fastify (Jane) e Express (Paulo)
- Utilizar o banco de dados Postgres (Jane) e MySQL (Paulo)
- Todos os endpoints deverão ser documentados utilizando Swagger (Open API 3.0)
- Bancos de dados deverão estar rodando em um container Docker localmente
- Não será utilizado ORM, apenas queries SQL puras
- A senha de cada usuário deverá ser salva no banco de dados de forma criptografada
- Utilizar ESLint, Prettier e ts-prune para manter o código dentro dos padrões
- O código deve estar seguindo boas práticas como Clean Code, SOLID, etc
- Em toda requisição que houver entrada de dados, deverá haver validação dos dados
- Aplicar testes unitários para as classes e funções de regras de negócio
- Aplicar testes de integração para todos os endpoints da aplicação
- Os testes devem contemplar os requisitos funcionais
- Deverá existir tratamento de erro da aplicação
- Todos os registros no banco de dados deverão ter a coluna created_at e updated_at
- Para uploads, deverá ser feito utilizando form data
- Utilizar middleware para validação de autenticação nas rotas públicas

## Próximos passos

- [ ]  Criar cronograma de entrega por semana (pode ser em conjunto)
    - Exemplo
        - Semana do dia 07/11 - construção do fluxograma e requisitos
        - Semana do dia 14/11 - iniciar aplicação node com express
        - …
- [ ]  Desenhar a solução, utilizando por exemplo fluxogramas ou wireframes (pode ser em conjunto)
    - Dica: utilizar ferramenta [whimsical](https://whimsical.com/) ou similar
- [ ]  Criar modelagem do banco de dados (pode ser em conjunto)
- [ ]  Realizar o desenvolvimento (individualmente)
- Regra de entrega do projeto
    - Link do github com o código
    - Vídeo explicativo (usar loom ou vimeo). Um mostrando o resultado e outro explicando a implementação
    - Documentação (README.md) explicando como rodar a solução localmente

## Até quando devo apresentar minha solução

- O prazo final para apresentação da solução desenvolvida é o último dia útil de 2022
- Após a conclusão do escopo definido, poderemos ter novas features para esse mesmo projeto

## Mensagem final

- **Nada que está aqui é escrito em pedra. Havendo necessidade ou enxergando uma possibilidade, o dev pode e deve realizar alterações. Devendo apenas comunicar seu líder direto.**
- Sempre se embase na documentação oficial das ferramentas, libs, frameworks que você estiver utilizando. A doc oficial foi criada pelo mesmo time que desenvolveu a solução. Portanto, qualquer vídeo ou artigo que vc estiver vendo estará enviesado e possivelmente desatualizado também
- Em cenários que não estiver previsto na doc oficial, pesquise no google EM INGLÊS sobre o problema que está tendo, ou sobre alguma implementação que você deseja realizar. Qualquer coisa use o tradutor para passar sua dúvida de port para inglês. O importante é “googlar” em inglês
- Quebre bastante a cabeça antes de pedir ajuda. Não é um projeto que tem cliente esperando e cobrando entrega pra ontem. O objetivo principal deste projeto é sua evolução e aprendizado
- Se sentir perdido, volte um passo atrás, olhe o fluxograma ou wireframe que você construiu, tente ver com uma visão mais geral o que pode estar dando errado
- Desenvolvimento é puramente resolução de problemas. Você sempre terá um. Às vezes simples, outras vezes complexo. Porém, SEMPRE tem solução. Milhares de pessoas desenvolveram do zero a ferramenta que você está tentando utilizar. Outras milhões a utilizam diariamente (também com dificuldade). Com paciência e brio, você também vai conseguir.
- O melhor dev não é aquele que conhece tudo, mas o que sabe se virar bem até nos cenários desconhecidos.
