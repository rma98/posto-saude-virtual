<template>
 <nav class="navbar navbar-light">

  <div class="container-fluid">
    <a class="cabeçalho">
      <img class="logo" src="../assets/my-logo.png">
      Posto Saúde Virtual
    </a>
  </div>
</nav>

<nav class="nav">
  <a class="nav-link active" aria-current="page" href="/"><h2>Início</h2></a>
  <a class="nav-link" id="seta" href="#"><i class="fa-solid fa-chevron-right"></i></a>
  <a class="nav-link" href="#"><h2>Cadastrar</h2></a>

</nav>

  <div class="atendente">
    <div class="row" id="img-atendente">
      <form class="form-img" action="#">
        <header>
          <img class="logo" src="../assets/atendente.png">
            <div class="row" id="atendente-h2t">
              <h2>Criar Cadastro neste site</h2>
            </div>
        </header>
      </form>
    </div>
  </div>












  <div class="card" id="telaLogin">
        <div class="usuario">
         
        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="white"  class="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>
      </div>
    <div class="card-body">
      <form>
        <div class="mb-3">
          

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Nome</label>
            <input type="text" class="form-control" id="" v-model="Nome" />
          </div>

          <div>
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              v-model="email"
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Senha</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              v-model="senha"
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword2" class="form-label"
              >Confirmação de Senha</label>
           

            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              v-model="confirmar"
            />
            <span v-show="deuErro1" class="erro-senha"
              ><i class="fa fa-times"></i>Nenhum dado cadastrado ou Dados
              incopletos</span
            >
            <span v-show="deuErro" class="erro-senha"
              ><i class="fa fa-times"></i>As senhas digitadas não conferem</span
            >
          </div>
            <div class="rede">
                <p>Se preferir, entre com outra rede:</P>
                <img class="iconeRedes" src="../assets/iconeGoogle.png" >
                <img class="iconeRedes" src="../assets/icone-circular-facebook.png" >
              </div>
            



          <div class="row">
            <button
              :disabled="senha != confirmar"
              v-on:click="Cadastrar"
              class="btn btn-danger col-2"
            >
              CADASTRAR
            </button>
          </div>
            <div class="voltar1">
                    <router-link to= "../"><img class="seta" src="../assets/seta.png"></router-link>
                </div>
          
        </div>
      </form>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "TesteCadastro",
  data() {
    return {
      deuErro1: false,
      deuErro: false,
      Nome: "",
      email: "",
      senha: "",
      confirmar: "",
    };
  },
  methods: {
    Cadastrar() {
      if (
        this.Nome == "" ||
        this.Nome == " " ||
        this.Nome < 3 ||
        this.email == "" ||
        this.email == " " ||
        this.email < 3 ||
        this.senha == "" ||
        this.confirmar == ""
      ) {
        this.deuErro1 = true;
        this.Nome = "";
        this.email = "";
        this.senha = "";
        this.confirmar = "";
      } else {
        if (this.senha != this.confirmar) {
          this.deuErro = true;
        } else {
          this.$router.push("teste");
        }
      }
    },
  },
};
</script>

<style scoped>
body {
  background-color: black;
  color: rgb(255, 255, 255);
}
.mx-auto {
  margin-top: 10px;
}
.form-control {
  background-color: white;
  border: 1px solid rgb(250, 247, 247);
  color: black;
}
#telaLogin {
    width: 70vw;
  position: absolute;
  top: 80%;
  left: 50%;
  background-color: #051775;
  transform: translate(-50%, -50%);
  box-shadow: 1px 5px 10px rgb(255, 255, 255);
  border: 2px solid rgb(250, 247, 247);
  border-radius: 80px 80px 80px 80px;
  padding: 30px 30px;
  color: rgb(255, 255, 255);
}
.alert {
  position: relative;
  padding: 0.75rem 1.25rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  text-align: left;
}
.erro-senha {
  width: 100%;
  text-align: left;
  color: red;
  font-size: 13px;
}
img.imgCadastro {
  width: 160px;
  margin-left: 27%;
}
.blog-title {
  text-align: center;
}
.btn-outline-dark {
  color: red;
  border-color: red;
  background: black;
}
.btn-outline-dark:hover {
  background: #8b0000;
}

.voltar1{
    position: absolute;
    margin-top:-35px;
    margin-left: 4%;
}

</style>