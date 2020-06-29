<p align="center">
  <img src=https://camo.githubusercontent.com/d25397e9df01fe7882dcc1cbc96bdf052ffd7d0c/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d676f737461636b2f6865616465722d6465736166696f732e706e67>
</p>

<center><h1><strong>Projeto Node.js com TypeScript</strong></h1></center>

<p align="center">
  <img src="https://img.shields.io/badge/tech-Back--end-brown">
  <img src="https://img.shields.io/badge/framework-NodeJS-green">
  <img src="https://img.shields.io/badge/framework-TypeScript-blue">
  <img src="https://img.shields.io/badge/source-Rocketseat-blueviolet">
</p>

<center><h2># desafio-database-upload</h2></center>
<center><p>Desafio do Bootcamp GoStack - Banco de dados e upload de arquivos no Node.js</p></center>




<center><h1>Funcionalidades da aplicação</h1></center>
<p>
Essa será uma aplicação que deve armazenar transações financeiras de entrada e saída e permitir o cadastro e a listagem dessas transações, além de permitir a criação de novos registros no banco de dados a partir do envio de um arquivo csv.<p>
<ul>
    <li><strong>POST /transactions:</strong> A rota deve receber title, value, type, e category dentro do corpo da requisição, sendo o type o tipo da transação, que deve ser income para entradas (depósitos) e outcome para saídas (retiradas). Ao cadastrar uma nova transação, ela deve ser armazenada dentro do seu banco de dados, possuindo os campos id, title, value, type, category_id, created_at, updated_at, ela deve ser armazenada dentro de um objeto com o seguinte formato:
    <div ><pre>{
      <span ><span >"</span>id<span >"</span></span>: <span ><span >"</span>uuid<span >"</span></span>,
      <span ><span >"</span>title<span >"</span></span>: <span ><span >"</span>Salário<span >"</span></span>,
      <span ><span >"</span>value<span >"</span></span>: <span >3000</span>,
      <span ><span >"</span>type<span >"</span></span>: <span ><span >"</span>income<span >"</span></span>
      <span ><span >"</span>category<span >"</span></span>: <span ><span >"</span>Alimentação<span >"</span></span>
    }</pre></div>
    </li>
    <li><strong>GET /transactions:</strong> Essa rota deve retornar uma listagem com todas as transações que você cadastrou até agora, junto com o valor da soma de entradas, retiradas e total de crédito. Essa rota deve retornar um objeto o seguinte formato:
    <div ><pre>{
  <span ><span >"</span>transactions<span >"</span></span>: [
    {
      <span ><span >"</span>id<span >"</span></span>: <span ><span >"</span>uuid<span >"</span></span>,
      <span ><span >"</span>title<span >"</span></span>: <span ><span >"</span>Salário<span >"</span></span>,
      <span ><span >"</span>value<span >"</span></span>: <span >4000</span>,
      <span ><span >"</span>type<span >"</span></span>: <span ><span >"</span>income<span >"</span></span>
      <span ><span >"</span>category<span >"</span></span>: <span ></span> {
        <span ><span >"</span>id<span >"</span></span>: <span ><span >"</span>uuid<span >"</span></span>,
        <span ><span >"</span>title<span >"</span></span>: <span ><span >"</span>Salary<span >"</span></span>,
        <span ><span >"</span>created_at<span >"</span></span>: <span ><span >"</span>2020-04-20T00:00:49.620Z<span >"</span></span>,
        <span ><span >"</span>updated_at<span >"</span></span>: <span ><span >"</span>2020-04-20T00:00:49.620Z<span >"</span></span>,
      },
      <span ><span >"</span>created_at<span >"</span></span>: <span ><span >"</span>2020-04-20T00:00:49.620Z<span >"</span></span>,
      <span ><span >"</span>updated_at<span >"</span></span>: <span ><span >"</span>2020-04-20T00:00:49.620Z<span >"</span></span>
    },
    {
      <span ><span >"</span>id<span >"</span></span>: <span ><span >"</span>uuid<span >"</span></span>,
      <span ><span >"</span>title<span >"</span></span>: <span ><span >"</span>Freela<span >"</span></span>,
      <span ><span >"</span>value<span >"</span></span>: <span >2000</span>,
      <span ><span >"</span>type<span >"</span></span>: <span ><span >"</span>income<span >"</span></span>
      <span ><span >"</span>category<span >"</span></span>: <span ></span> {
        <span ><span >"</span>id<span >"</span></span>: <span ><span >"</span>uuid<span >"</span></span>,
        <span ><span >"</span>title<span >"</span></span>: <span ><span >"</span>Others<span >"</span></span>,
        <span ><span >"</span>created_at<span >"</span></span>: <span ><span >"</span>2020-04-20T00:00:49.620Z<span >"</span></span>,
        <span ><span >"</span>updated_at<span >"</span></span>: <span ><span >"</span>2020-04-20T00:00:49.620Z<span >"</span></span>,
      },
      <span ><span >"</span>created_at<span >"</span></span>: <span ><span >"</span>2020-04-20T00:00:49.620Z<span >"</span></span>,
      <span ><span >"</span>updated_at<span >"</span></span>: <span ><span >"</span>2020-04-20T00:00:49.620Z<span >"</span></span>
    },
    {
      <span ><span >"</span>id<span >"</span></span>: <span ><span >"</span>uuid<span >"</span></span>,
      <span ><span >"</span>title<span >"</span></span>: <span ><span >"</span>Pagamento da fatura<span >"</span></span>,
      <span ><span >"</span>value<span >"</span></span>: <span >4000</span>,
      <span ><span >"</span>type<span >"</span></span>: <span ><span >"</span>outcome<span >"</span></span>
      <span ><span >"</span>category<span >"</span></span>: <span ></span> {
        <span ><span >"</span>id<span >"</span></span>: <span ><span >"</span>uuid<span >"</span></span>,
        <span ><span >"</span>title<span >"</span></span>: <span ><span >"</span>Others<span >"</span></span>,
        <span ><span >"</span>created_at<span >"</span></span>: <span ><span >"</span>2020-04-20T00:00:49.620Z<span >"</span></span>,
        <span ><span >"</span>updated_at<span >"</span></span>: <span ><span >"</span>2020-04-20T00:00:49.620Z<span >"</span></span>,
      },
      <span ><span >"</span>created_at<span >"</span></span>: <span ><span >"</span>2020-04-20T00:00:49.620Z<span >"</span></span>,
      <span ><span >"</span>updated_at<span >"</span></span>: <span ><span >"</span>2020-04-20T00:00:49.620Z<span >"</span></span>
    },
    {
      <span ><span >"</span>id<span >"</span></span>: <span ><span >"</span>uuid<span >"</span></span>,
      <span ><span >"</span>title<span >"</span></span>: <span ><span >"</span>Cadeira Gamer<span >"</span></span>,
      <span ><span >"</span>value<span >"</span></span>: <span >1200</span>,
      <span ><span >"</span>type<span >"</span></span>: <span ><span >"</span>outcome<span >"</span></span>
      <span ><span >"</span>category<span >"</span></span>: <span ></span> {
        <span ><span >"</span>id<span >"</span></span>: <span ><span >"</span>uuid<span >"</span></span>,
        <span ><span >"</span>title<span >"</span></span>: <span ><span >"</span>Recreation<span >"</span></span>,
        <span ><span >"</span>created_at<span >"</span></span>: <span ><span >"</span>2020-04-20T00:00:49.620Z<span >"</span></span>,
        <span ><span >"</span>updated_at<span >"</span></span>: <span ><span >"</span>2020-04-20T00:00:49.620Z<span >"</span></span>,
      },
      <span ><span >"</span>created_at<span >"</span></span>: <span ><span >"</span>2020-04-20T00:00:49.620Z<span >"</span></span>,
      <span ><span >"</span>updated_at<span >"</span></span>: <span ><span >"</span>2020-04-20T00:00:49.620Z<span >"</span></span>
    }
  ],
  <span ></span>balance<span >"</span></span>: {
    <span ></span>income<span >"</span></span>: <span >6000</span>,
    <span ></span>outcome<span >"</span></span>: <span >5200</span>,
    <span ></span>total<span >"</span></span>: <span >800</span>
  }
}</pre></div>
    </li>
    <li><strong>DELETE /transactions/:id :</strong> A rota deve deletar uma transação com o id presente nos parâmetros da rota;</li>
    <li><strong>POST /transactions/import :</strong> A rota deve permitir a importação de um arquivo com formato .csv contendo as mesmas informações necessárias para criação de uma transação id, title, value, type, category_id, created_at, updated_at, onde cada linha do arquivo CSV deve ser um novo registro para o banco de dados, e por fim retorne todas as transactions que foram importadas para seu banco de dados. O arquivo csv, deve seguir o seguinte modelo:
    <div ><pre>{
      title           type    value   category
      Loan            income  1500    Others
      Website Hosting outcome   50    Others
      Ice cream       outcome   3     Food
    }</pre></div>
    </li>
</ul>

<center><h2>Específicação dos testes</h2></center>
<p>Em cada teste, tem uma breve descrição no que sua aplicação deve cumprir para que o teste passe.</p>
<p>Para esse desafio temos os seguintes testes:</p>
<p><strong> ATENÇÃO </strong> Antes de rodar os testes, crie um banco de dados com o nome "gostack_desafio06_tests" para que todos os testes possam executar corretamente</p>

<ul>
    <li><strong>should be able to create a new transaction:</strong> Para que esse teste passe, sua aplicação deve permitir que uma transação seja criada, e retorne um json com a transação criado.</li></p>
    <li><strong>should create tags when inserting new transactions:</strong>  Para que esse teste passe, sua aplicação deve permitir que ao criar uma nova transação com uma categoria que não existe, essa seja criada e inserida no campo category_id da transação com o id que acabou de ser criado.</li></p>
    <li><strong>should not create tags when they already exists:</strong>  Para que esse teste passe, sua aplicação deve permitir que ao criar uma nova transação com uma categoria que já existe, seja atribuído ao campo category_id da transação com o id dessa categoria existente, não permitindo a criação de categorias com o mesmo title.</li></p>
    <li><strong>should be able to list the transactions:</strong>  Para que esse teste passe, sua aplicação deve permitir que seja retornado um array de objetos contendo todas as transações junto ao balanço de income, outcome e total das transações que foram criadas até o momento.</li></p>
    <li><strong>should not be able to create outcome transaction without a valid balance:</strong>   Para que esse teste passe, sua aplicação não deve permitir que uma transação do tipo outcome extrapole o valor total que o usuário tem em caixa (total de income), retornando uma resposta com código HTTP 400 e uma mensagem de erro no seguinte formato: { error: string }.</li></p>
    <li><strong>should be able to delete a transaction:</strong> Para que esse teste passe, você deve permitir que a sua rota de delete exclua uma transação, e ao fazer a exclusão, ele retorne uma resposta vazia, com status 204.</li></p>
    <li><strong>should be able to import transactions:</strong> Para que esse teste passe, sua aplicação deve permitir que seja importado um arquivo csv, contendo o seguinte modelo. Com o arquivo importado, você deve permitir que seja criado no banco de dados todos os registros e categorias que estavam presentes nesse arquivo, e retornar todas as transactions que foram importadas.</li></p>
</ul>


<center><h2>Procedimentos para utilização do repositório</h2></center>

<ul>
    <li>
        <h3>clone o repositório </h3>
        <p>git clone link</p>
    </li>
    <li>
        <h3>navegue até o repositório clonado </h3>
        <p>cd desafio-database-upload </p>
    </li>
        <li>
        <h3>instale as dependências </h3>
        <p>yarn</p>
    </li>
    </li>
    <li>
        <h3>executar testes </h3>
        <p>yarn test</p>
    </li>
    <li>
        <h3>rodar a aplicação </h3>
        <p>yarn dev:server</p>
    </li>
</ul>


<p>Avalie o repositório com uma ⭐ para que mais devs possam vê-lo!</p>


<p>by <a href="https://www.linkedin.com/in/everton-c%C3%A9zar-3763a133/">Everton Cézar</a> !</p>

