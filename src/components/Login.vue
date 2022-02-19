<template>
  

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

                    <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="white"  class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>

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
                      <p>Se preferir, entre com outra rede:</P>
                       <img class="iconeRedes" src="../assets/iconeGoogle.png" >
                       <img class="iconeRedes" src="../assets/icone-circular-facebook.png" >

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

    position: absolute;
    top: 22%;
    left: 21%;

    padding: 60px;

    border-radius: 2px;
    border-radius: 50px 50px 50px 50px;

    width:800px;

}

.card-header{
  position: absolute;
  top:2%;
  left: 45%;

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



.card-footer .submit{
    position:absolute;
    width: 15%;
    right: 10%;
    height: 40px;

    background-color: #00BFFF;
    border-radius: 10px 10px 10px 10px;


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

.iconeRedes{
  width: 5%;
}


</style>
