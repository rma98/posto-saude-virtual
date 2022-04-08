<template>

  <div class="corpo">
    <form class="form-header" action="#">
      <header>
        <img class="logo" src="../assets/agendamentoConsulta.png">
        <h1>Agendar Consulta</h1>
      </header>
    </form>
    
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/"><h2>Ínicio</h2></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <h2>Médicos</h2></a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#"><h5>Dra. Izabella Tabosa</h5></a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#"><h5>Dr. Fabrício Torres</h5></a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#"><h5>Dr. Luiz</h5></a></li>
                <li><a class="dropdown-item" href="#"><h5>...</h5></a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <h2>Serviços</h2></a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#"><h5>Pré Natal</h5></a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#"><h5>Aplicações de Vacinas</h5></a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#"><h5>Prevenção na saúde da mulher</h5></a></li>
                <li><a class="dropdown-item" href="#"><h5>...</h5></a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <h2>Postos</h2></a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#"><h5>Zenobio de Melo</h5></a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#"><h5>Santa Rosa</h5></a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#"><h5>Santa Luzia</h5></a></li>
                <li><a class="dropdown-item" href="#"><h5>...</h5></a></li>
              </ul>
            </li>
          </ul>
          <form action="#" class="form-search">
            <input type="search" aria-label="Search" required>
            <button class="btn" type="submit"><i class="fas fa-search"></i></button>
          </form>
          <a class="nav-link" href="#"><h2>Iniciar Cadastro</h2></a>
          <a class="nav-link" href="#"><h2>Excluir Cadastro</h2></a>
        </div>
      </div>
    </nav>
    </div>

    <div class="row" id="row-menu">
        <form class="form-menu" action="#">
            <nav class="navbar" id="menu-nav">
                <a class="nav-link active" aria-current="page" href="#"><h2 id="titulo-menu">Inicio</h2> </a>
                <h2 class="nav-link" id="set"><i class="fa-solid fa-chevron-right"></i></h2>
                <a class="nav-link" href="#"><h2 id="titulo-menu">Todas as funcionalidades</h2></a>
                <h2 class="nav-link" id="set"><i class="fa-solid fa-chevron-right"></i></h2>
                <a class="nav-link disabled" href="#"><h2 id="titulo-menu">Agendar Consulta</h2></a>
            </nav>
        </form>
    </div>

    <div class="row" id="row-passos">
        <form class="form-passos" action="#">
            <nav class="navbar" id="menu-nav">
                <a class="nav-link disabled" aria-current="page" href="#"><h2 id="titulo-menu">Passo 1</h2></a>
                <h2 class="nav-link" id="set"><i class="fa-solid fa-chevron-right"></i></h2>
                <a class="nav-link active" href="#"><h2 id="titulo-menu">Passo 2</h2></a>
                <h2 class="nav-link" id="set"><i class="fa-solid fa-chevron-right"></i></h2>
                <a class="nav-link" href="#"><h2 id="titulo-menu">Passo 3</h2></a>
            </nav>
        </form>
    </div>

    <div class="row" id="row-corpo">
        <div class="col-6">
            <div class="row" id="atendente">
                <form class="form-atendente" action="#">
                    <header>
                        <img class="logo-atendente" src="../assets/atendente.png">
                        <div class="row" id="atendente-mensagem">
                            <label>Atenção: Necessita de consulta domiciliar?<i class="fa-solid fa-volume-high" id="sound"></i></label>
                            <label id="pergunta-sim">
                                <input type="radio" name="pergunta" value="sim">Sim
                                <label id="pergunta-nao">
                                    <input type="radio" name="pergunta" value="não">Não
                                </label>
                            </label>
                        </div>
                    </header>
                </form>
                <div class="row" id="row-atendente">
                    <form class="form-atendente-escolha" action="#">
                        <header>
                            <img class="logo-atendente" src="../assets/atendente.png">
                            <div class="row" id="atendente-mensagem-escolha">
                                <label for="">Escolha a melhor data  para você agendar sua consulta<i class="fa-solid fa-volume-high" id="sound"></i></label>
                            </div>
                        </header>
                    </form>
                    <div class="row" id="row-consultas">
                        <div class="row" id="row-consultas-opcoes">
                            <div class="col-6">
                                <input type="checkbox" id="consulta1" name="consulta1" value="Consulta Médica">
                                <label for="consulta1">Consulta Médica</label>
                            </div>
                            <div class="col-6">
                                <input type="checkbox" id="consulta2" name="consulta2" value="Consulta ao Dentista">
                                <label for="consulta2">Consulta ao Dentista</label>
                            </div>
                            <div class="row" id="row-consultas-opcoes">
                                <div class="col-6">
                                    <input type="checkbox" id="consulta3" name="consulta3" value="Atendimento Virtual">
                                    <label for="consulta3">Atendimento Virtual</label>
                                </div>
                                <div class="col-6">
                                    <input type="checkbox" id="consulta4" name="consulta4" value="Atendimento a Domicílio">
                                    <label for="consulta4">Atendimento a Domicílio</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" id="row-horario">
                <div class="col-6">
                    <div class="row" id="row-horario-manha">
                        <label><i class="fa-solid fa-clock"></i>Manhã</label>
                    </div>
                    <div class="row" id="row-horarios">
                        <div class="col-4">
                            <input type="checkbox" id="manha1" name="manha1" value="08:20">
                            <label for="manha1">08:20</label>
                        </div>
                        <div class="col-4">
                            <input type="checkbox" id="manha2" name="manha2" value="09:20">
                            <label for="manha2">09:20</label>
                        </div>
                        <div class="col-4">
                            <input type="checkbox" id="manha3" name="manha3" value="10:20">
                            <label for="manha3">10:20</label>
                        </div>
                        <div class="row" id="row-horarios">
                            <div class="col-4">
                                <input type="checkbox" id="manha4" name="manha4" value="08:40">
                                <label for="manha4">08:40</label>
                            </div>
                            <div class="col-4">
                                <input type="checkbox" id="manha5" name="manha5" value="09:40">
                                <label for="manha5">09:40</label>
                            </div>
                            <div class="col-4">
                                <input type="checkbox" id="manha6" name="manha6" value="10:40">
                                <label for="manha6">10:40</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="row" id="row-horario-tarde">
                        <label><i class="fa-solid fa-clock"></i>Tarde</label>
                        <div class="row" id="row-horarios">
                            <div class="col-4">
                                <input type="checkbox" id="tarde1" name="tarde1" value="14:00">
                                <label>14:00</label>
                            </div>
                            <div class="col-4">
                                <input type="checkbox" id="tarde2" name="tarde2" value="15:00">
                                <label>15:00</label>
                            </div>
                            <div class="col-4">
                                <input type="checkbox" id="tarde3" name="tarde3" value="16:00">
                                <label for="tarde3">16:00</label>
                            </div>
                            <div class="row" id="row-horarios">
                                <div class="col-4">
                                    <input type="checkbox" id="tarde4" name="tarde4" value="14:40">
                                    <label for="tarde4">14:40</label>
                                </div>
                                <div class="col-4">
                                    <input type="checkbox" id="tarde5" name="tarde5" value="15:40">
                                    <label for="tarde5">15:40</label>
                                </div>
                                <div class="col-4">
                                    <input type="checkbox" id="tarde6" name="tarde6" value="16:40">
                                    <label for="tarde6">16:40</label>
                                </div>
                                <div class="row" id="row-horarios">
                                    <input type="checkbox" id="tarde7" name="tarde7" value="17:00">
                                    <label for="tarde7">17:00</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-6">

        </div>
    </div>

    <div class="rodape">
        <footer class="rodape-footer">
            <div class="row">
                <div class="col-4">
                    <div class="contatos">
                        <h5>Contatos:</h5>
                        <h5><i class="fa-solid fa-envelope"></i>posto.saúdevirtual27palmares@gmail.com</h5>
                        <h5><i class="fa-solid fa-phone"></i>(81) 98349-6015</h5>
                    </div>
                </div>
                <div class="col-4">
                    <div class="contatos">
                        <h5>Conheça-nos</h5>
                            <h5><i class="fa-solid fa-location-dot"></i>Palmares, Cep: 55540-000</h5>
                        </div>
                </div>
                <div class="col-4">
                    <div class="contatos">
                        <h5>Redes Sociais:</h5>
                        <i class="fa-brands fa-instagram" id="instagram"></i><i class="fa-brands fa-twitter" id="twitter"></i><i class="fa-brands fa-facebook"></i>
                    </div>
                </div>
            </div>
        </footer>
  </div>

</template>
<script>
export default {
  name: 'AgendarConsulta',
  props: {
    msg: String
  }
}
</script>

<style scoped>

    .logo {
        width: 6vw;
        border-radius: 100px;
  }

  .form-header {
      height: 15vh;
      width: 32%;
      padding: 0.5em;
      margin-left: 7%;
  }

  .form-header header {
      display: flex;
  }

  .form-header header h1 {
      color: #051775;
      margin-top: 4%;
      margin-left: 0.4em;
  }

  .navbar {
      background-color: #051775;
      padding: 0.3em;
      margin: 0.3em;
  }

  .nav-item {
      margin-left: 3%;
  }

  .nav-item h2 {
      color: #ffffff;
  }

  .nav-link h2 {
      color: #ffffff;
  }

  .form-search {
      margin-right: 2%;
      background: none;
  }

  .form-search input {
      width: 20vw;
      background: none;
      color: #ffffff;
    
  }

  .btn {
      background: none;
      color: #ffffff;
    
  }

  .form-menu {
      height: 11vh;
      width: 62vw;
      margin-left: 2%;
  }

  #menu-nav {
      background-color: #ffffff;
  }

  #titulo-menu {
      color: #051775;
  }

  #set {
      color: #66C4F9;
  }

  .form-passos {
      height: 13vh;
      width: 37vw;
      margin-left: 10%;
  }

  #row-corpo {
      height: 64vh;
  }

  .form-atendente {
      height: 14vh;
      width: 57%;
      margin-left: 2%;
  }

  .logo-atendente {
       width: 4vw;
       border-radius: 100px;
  }

  .form-atendente header {
      display: flex;
  }

  #atendente-mensagem {
      margin-left: 0.2em;
      height: 13vh;
      width: 23vw;
      background-color: #051775;
      color: #ffffff;
      padding-top: 2%;
  }

  #sound {
      margin-left: 2%;
  }

  #pergunta-sim {
      margin-left: 20%;
  }

  #pergunta-nao {
      margin-left: 20%;
  }

  .form-atendente-escolha {
      height: 9vh;
      width: 71%;
      margin-left: 10%;
      margin-top: 2%;
  }

  .form-atendente-escolha header {
      display: flex;
  }

  #atendente-mensagem-escolha {
      margin-left: 0.2em;
      height: 8vh;
      width: 29vw;
      background-color: #051775;
      color: #ffffff;
      padding-top: 2%;
  }

  #row-consultas {
      height: 15vh;
      margin-left: 2%;
      margin-top: 3%;
      text-align: center;
      background-color: #051775;
      color: #ffffff;
      border-radius: 20px 20px 20px 20px; 
  }

  #row-consultas-opcoes {
      margin-top: 2%;
      margin-left: 0.1em
  }

  #row-horario {
      height: 17vh;
      margin-left: 0.1em;
      margin-top: 3%;
      text-align: center;
      color: #ffffff;
      background-color: #051775;
      border-radius: 20px 20px 20px 20px;
  }

  .rodape {
      background-color: #051775;
  }

  .contatos {
      color: #ffffff;
      text-align: center;
  }

  #instagram {
      margin-right: 15%;
  }

  #twitter {
      margin-right: 15%;
  }
  
</style>
