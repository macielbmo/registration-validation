<h1>Validação de Informaçõs na Tela de Cadastro</h1>
<p>Desenvolvi nesse projeto uma tela de cadastrado com validação de e-mail e senha.</p>

![Formulário de Cadastro](https://raw.githubusercontent.com/macielbmo/registration-validation/main/public/img-readme/form-limpo.png)
<p>Formulário de cadastro onde é solicitado 3 informações: nome, e-mail e senha. E é feito a validação do e-mail e senha, conforme uma regra que defini.</p>

![Error Preenchimento do Form](https://raw.githubusercontent.com/macielbmo/registration-validation/main/public/img-readme/form-erro.png)
<p>Quando as informações iseridas não são compativeis com a validação pré-definidas, o input fica com a cor vermelha e aparece a mensagem de erro.</p>

 <p>O e-mail precisa ter no mínimo o seguinte formato xx@xx.xx</p>
<ul>
  <li>Mínimo de dois caracteres antes do @, sendo letra, número ou underscore(_).</li>
  <li>Mínimo de dois caracteres de texto após o @</li>
  <li>Mínimo de dois caracteres de texto após ponto(.)</li>
</ul>

![Erro apenas na senha](https://github.com/macielbmo/registration-validation/blob/main/public/img-readme/form-valid-erro.png)

<p>A senha precisa ter os seguintes caracteres:</p>
<ul>
  <li>Mínimo 8 caracteres;</li>
  <li>Mínimo 1 letra minuscula;</li>
  <li>Mínimo 1 letra maiuscula;</li>
  <li>Mínimo 1 número;</li>
  <li>Mínimo 1 caractere especial;</li>
</ul>

![Sucess](https://raw.githubusercontent.com/macielbmo/registration-validation/main/public/img-readme/form-sucess.png)
<p>Quando todas as informações estão de acordo com as regras, os inputs ficam na cor verde e aparece a mensagem de confirmação do cadastro.</p>
<ul>
<li>Nesse projeto, utilizamos as expressões regulares para realizar a validação do valor inserido nos inputs;</li>
<li>Fizemos manipução no DOM para inserir mensagem de erro e fazer a troca de cores no input;</li>
<li>Após a mensagem de Cadastro realizado, utilizei o setTimeout para que a mensagem apareça por 4 segundos e após esse tempo a mensagem sai da tela e o formulário é limpo;</li>
</ul>
