# Back-end: Parte 02

Durante esse desafio vamos aprimorar a aplicação Meetapp que demos início no desafio anterior implementando funcionalidades que aprendemos durante as aulas até agora.

## Funcionalidades

Abaixo estão descritas as funcionalidades que você deve adicionar em sua aplicação.

### Gerenciamento de arquivos :white_check_mark:

Crie uma rota para upload de arquivos que cadastra em uma tabela o caminho e nome do arquivo e retorna todos dados do arquivo cadastrado. :white_check_mark:

### Gerenciamento de meetups

O usuário pode cadastrar meetups na plataforma com:
  - título do meetup, :white_check_mark:
  - descrição, :white_check_mark:
  - localização, :white_check_mark:
  - data e hora e :white_check_mark:
  - imagem (banner). :white_check_mark:
  Todos campos são obrigatórios. :white_check_mark: 
  
  Adicione também um campo user_id que armazena o ID do usuário que organiza o evento. :white_check_mark:

Não deve ser possível cadastrar meetups com datas que já passaram. :white_check_mark:

O usuário também deve poder editar todos dados de meetups que ainda não aconteceram e que ele é organizador. :x:

Crie uma rota para listar os meetups que são organizados pelo usuário logado. :x:

O usuário deve poder cancelar meetups organizados por ele e que ainda não aconteceram. O cancelamento deve deletar o meetup da base de dados. :x:

### Inscrição no meetup

O usuário deve poder se inscrever em meetups que não organiza. :x:

O usuário não pode se inscrever em meetups que já aconteceram. :x:

O usuário não pode se inscrever no mesmo meetup duas vezes. :x:

O usuário não pode se inscrever em dois meetups que acontecem no mesmo horário. :x:

Sempre que um usuário se inscrever no meetup, envie um e-mail ao organizador contendo os dados relacionados ao usuário inscrito. O template do e-mail fica por sua conta :) :x:

### Listagem de meetups

Crie uma rota para listar os meetups com filtro por data (não por hora), os resultados dessa listagem devem vir paginados em 10 itens por página. Abaixo tem um exemplo de chamada para a rota de listagem dos meetups: :white_check_mark:

```
http://localhost:3333/meetups?date=2019-07-01&page=2
```

Nesse exemplo, listaremos a página 2 dos meetups que acontecerão no dia 01 de Julho. :x:

Nessa listagem retorne também os dados do organizador. :x:

### Listagem de inscrições

Crie uma rota para listar os meetups em que o usuário logado está inscrito. :x:

Liste apenas meetups que ainda não passaram e ordene meetups mais próximos como primeiros da lista. :x:
