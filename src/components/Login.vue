<template>
  <div class="hello">
    <h1>{{ msg }}</h1>  
  </div>

  <nav class="navbar navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
      Posto Saúde Virtual
    </a>
  </div>
</nav>


<nav class="nav">
  <a class="nav-link active" aria-current="page" href="#"> Inicio >  </a>
  <a class="nav-link" href="#"> Cadastrar</a>



 
        <div id="login">

            <form class="card">

                <div class="card-header">

                    <h2>Login</h2>

                </div>

                <div class="card-content">

                    <div class="card-content-area">

                        <label for="usuario">Email</label>

                        <input type="text" id="usuario" autocomplete="off">

                    </div>

                    <div class="card-content-area">

                        <label for="password">Senha</label>

                        <input type="password" id="password" autocomplete="off">

                        <a href="#" class="recuperar_senha">Esqueceu a senha?</a>


                    </div>
                    <div class= "rede">
                      Se preferir, entre com outra rede:

                    </div>

                </div>

                <div class="card-footer">


                    <input type="submit" value="Entrar" class="submit">

                   

                </div>

            </form>

        </div>
 
</nav>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.navbar{
  background-color:#00008B;
}
.navbar-brand{
  color:white;
}

body {

    padding: 0;

    margin: 0;

    background-color: #454d6b;

}

#login {

    display: flex;

    align-items: center;

    justify-content: center;

    height: 100vh;

    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

}

.card {

    background-color: #00008B;

    padding: 40px;

    border-radius: 2px;

    width:280px;

}

.card-header {

    padding-bottom: 50px;

    opacity: 0.8;

    color: #fff;

}

.card-header::after {

    content: "";

    width: 70px;

    height: 1px;

    background-color: #fff;

    display: block;

    margin-top: -17px;

    margin-left: -5px;

}

.card-content label {

    color: #fff;

    font-size: 12px;

    opacity: 0.8;

}

.card-content-area {

    display: flex;

    flex-direction: column;

    padding:10px 0;

}

.card-content-area input {

    margin-top: 10px;

    padding:0 5px;

    background-color: transparent;

    border:none;

    border-bottom: 1px solid #e1e1e1;

    outline: none;

    color: #fff;

}

.card-footer {

    display: flex;

    flex-direction: column;

}

.card-footer .submit{

    width: 100%;

    height: 40px;

    background-color: #00BFFF;

    border:none;

    color:#e1e1e1;

    margin: 10px 0;

}

.card-footer a {

    text-align: center;

    font-size: 12px;

    opacity: 0.8;

    color: #fff;

    text-decoration: none;

}
.rede{
  color:white;
}


</style>
