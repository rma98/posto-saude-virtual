    <template>
  
  <div class="cabeçalho">
    <form class="form-header" action="#">
      <header>
        <img class="logo" src="../assets/logoLogin.jpg">
        <h1>Posto Saúde Virtual</h1>
      </header>
    </form>
  </div>

  <div class="menu">
    <div class="row" id="nav-menu">
      <nav class="navbar">
        <a class="nav-link active menu-a" href="#"><h2>Início</h2></a>
        <a class="nav-link" id="seta" href="#"><i class="fa-solid fa-chevron-right"></i></a>
        <a class="nav-link disabled menu-a" href="#"><h2>Login</h2></a>
      </nav>
    </div>
  </div>

  <div class="atendente">
    <div class="row" id="img-atendente">
      <form class="form-img" action="#">
        <header>
          <img class="logo" src="../assets/atendente.jpg">
            <div class="row" id="atendente-h2">
              <h2>Logar neste site</h2>
            </div>
        </header>
      </form>
    </div>
  </div>

  <div id="login">
    <form class="card">
      <div class="card-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="white"  class="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>
      </div>

      <div v-if = exibirAlerta class="alert alert-danger">
          <strong>Erro!</strong><a> E-mail e/ou senha inválido(s)</a>.
      </div>

      <div class="card-content">
        <div class="card-content-area">
          <label for="usuario">Email</label>
          <input type="text" id="usuario" autocomplete="off" v-model="email">
        </div>

        <div class="card-content-area">
          <label for="password">Senha</label>
          <input type="password" id="password" autocomplete="off" v-model="senha">
          <a id="senha" href="#" class="recuperar_senha">Esqueceu a senha?</a>
        </div>

        <div class= "rede">
          <p>Se preferir, entre com outra rede:</P>
          <img class="iconeRedes" src="../assets/iconeGoogle.png" >
          <img class="iconeRedes" src="../assets/icone-circular-facebook.png" >
        </div>
      </div>

        <div class="row">
            <a v-on:click="login" class="btn btn-danger col-2 ">ENTRAR</a>
        </div><br>
              
        <div class="voltar">
            <router-link to= "../"><img class="seta" src="../assets/seta.png"></router-link>
        </div>
    </form>
  </div>
</template>

<script>
export default{
    name: 'TesteItem',
    data() {
        return {
            email:'',
            senha:'',
            exibirAlerta: false
        }      
      },
      methods: {
                login() {
                    this.exibirAlerta = false;
                    var emailAdmin = 'admin@gmail.com';
                    var senhaAdmin = '123456';
                    if (this.email === emailAdmin && this.senha === senhaAdmin) {
                        this.$router.push({ name: 'principalLogada' });
                    } else {
                        this.exibirAlerta = true;
                        this.senha = '';
                    }
                }
      }
}
  
</script>

<style scoped>

  .cabeçalho {
    background-color: #051775;
  }

  .form-header {
    height: 15vh;
    width: 32%;
    padding: 0.5em;
    margin-left: 7%;
  }

   .logo {
    width: 6vw;
    border-radius: 100px;
  }

  .form-header header {
    display: flex;
  }

  .form-header header h1 {
    color: #ffffff;
    margin-top: 4%;
    margin-left: 0.4em;
  }

  #nav-menu {
    width: 32vw;
    height: 15vh;
    margin-left: 7%;
  }

  .menu-a {
    color: #051775;
  }

  #seta {
    color: #66C4F9;
  }

  #img-atendente {
    height: 15vh;
    width: 25vw;
    margin-left: 0.5em;
  }

  #atendente-h2 {
    margin-left: 3%;
    background-color: #051775;
    color: #ffffff;
    margin-top: 0.5em;
    height: 6vh;
    border-radius: 50px 50px 50px 50px;
  }

  .form-img header {
    display: flex;
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
#senha {
  color: #ffffff;
  text-decoration: none
}
.card {
    background-color: #051775;
    position: absolute;
    top: 40%;
    padding: 8%;
    border-radius: 2px;
    border-radius: 50px 50px 50px 50px;
    width: 70vw;
    height: 73vh;
}

.card-header{
  position: absolute;
  top:2%;
  background: none;
  left: 45%;
}
.card-content label {
    color: #ffffff;
    font-size: 18pt;
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
    border-bottom: 1px solid #ffffff;
    outline: none;
    color: #ffffff;
}
.card-footer .submit{
    position:absolute;
    width: 15%;
    right: 10%;
    height: 40px;
    background-color: #66C4F9;
    border-radius: 10px 10px 10px 10px;
    border:none;
    color:#ffffff;
    margin: 10px 0;
}
.card-footer a {
    text-align: center;
    font-size: 12px;
    opacity: 0.8;
    color: #ffffff;
    text-decoration: none;
}
.rede{
  color: #ffffff; 
}
.iconeRedes{
  width: 5%;
}
.voltar{
    position: absolute;
    margin-top: 28%;
    margin-left: 4%;
}
.seta{
    width:10%;
    border-radius: 80px 80px 80px 80px;

}


</style>