<template>

 <nav class="navbar navbar-light">
  <div class="container-fluid">
    <a class="cabeçalho">
      <img class="logo" src="../assets/logoLogin.jpg">
      Posto Saúde Virtual
    </a>
  </div>
</nav>

<nav class="nav">
  <a class="nav-link active" aria-current="page" href="#"><h2>Início</h2></a>
  <a class="nav-link" id="seta" href="#"><i class="fa-solid fa-chevron-right"></i></a>
  <a class="nav-link" href="#"><h2>Login</h2></a>

</nav>

  <div class="atendente">
    <div class="row" id="img-atendente">
      <form class="form-img" action="#">
        <header>
          <img class="logo" src="../assets/atendente.jpg">
            <div class="row" id="atendente-h2t">
              <h2>Logar neste site</h2>
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
                <div v-if = exibirAlerta class="alert alert-danger">
                  <strong>Erro!</strong><a> E-mail e/ou senha inválido(s)</a>.
                </div>
                
                 
                
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Senha</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="senha">
              </div>

              <div class="row " align="center">
                  <router-link to = "/recuperacao-senha" class="esqueceu-a-senha">Esqueceu a senha?</router-link>
              </div>
              
              <div class="rede">
                <p>Se preferir, entre com outra rede:</P>
                <img class="iconeRedes" src="../assets/iconeGoogle.png" >
                <img class="iconeRedes" src="../assets/icone-circular-facebook.png" >
              </div>
            
              <div class="row">
                <a v-on:click="login" class="btn btn-danger col-2 ">ENTRAR</a>
              </div><br>
              
               <div class="voltar">
                    <router-link to= "../"><img class="seta" src="../assets/seta.png"></router-link>
                </div>
          </form>
      </div>
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

<style>

    .nav-link {
        color: #051775;
    }
    #seta{
        color: #66C4F9;
    }
    .logo {
    width: 6vw;
    border-radius: 100px;
    }
    .usuario{
        margin-left:45%;
    }

    .navbar-light{
        background-color: #051775; 
        
    }
    .cabeçalho{
        color:white;
        text-decoration:none;
        font-size: 40px;
    }

    
  
    .mx-auto{
        margin-top: 10px;
        
    }
    .form-control{
        background-color: white ;
        border: 1px solid rgb(250, 247, 247);
        color: black;
    }
    #telaLogin{
        width: 70vw;
        position: absolute;
        top: 90%;
        left: 50%;
        background-color: #051775;
        transform: translate(-50%,-50%);
        box-shadow: 1px 5px 10px rgb(255, 255, 255);
        border: 2px solid rgb(250, 247, 247);
        border-radius: 80px 80px 80px 80px;
        padding: 30px 30px;
        color: rgb(255,255,255);
    }
    .alert {
        position: relative;
        padding: .75rem 1.25rem;
        border: 1px solid transparent;
        border-radius: .25rem;
        text-align: left;
    }
    .alert-danger {
    color: white;
    background-color: red;
    border-color: white;
    }
    .erro-senha {
        width: 100%;
        text-align: left;
        color: white;
        font-size: 13px;
    }
    .logoLogin{
        width: 160px;
        margin-left: 27%;
    }
    .btn-danger {
    color: white;
    background-color: #00BFFF;
    border-color:white;
    margin-top: 25px;
    margin-left:80%;
    
}
.btn-danger:hover{
    background:#1E90FF;
    border-color:white;
}
.btn-outline-danger {
    color: 	#8B0000;
    border-color: 	#8B0000;
}
.btn-outline-danger:hover {
    background:	#8B0000;
}
.voltar{
    position: absolute;
    margin-top:-60px;
    margin-left: 4%;
}
.seta{
    width:10%;
    border-radius: 80px 80px 80px 80px;

}
a{
    color:red;}
a:hover{
    color:white;
}
.esqueceu-a-senha{
    color:white;
    text-decoration:none;
    text-align: left;
    
}
.esqueceu-a-senha:hover{
    color:#1E90FF;
}
.iconeRedes{
  width: 5%;
}
#img-atendente {
    height: 15vh;
    width: 25vw;
    margin-left: 0.5em;
  }

#atendente-h2t {
    position: absolute;
    top:28%;
    margin-left: 6%;
    background-color: #051775;
    color: #ffffff;
    height: 6vh;
    border-radius: 50px 50px 50px 50px;
  }


</style>
