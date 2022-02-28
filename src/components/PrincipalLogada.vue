<template>

  <div class="corpo">
    <form class="form-header" action="#">
      <header>
        <img class="logo" src="../assets/logoLogin.jpg">
        <h1>Posto Saúde Virtual</h1>
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
              <a class="nav-link active" aria-current="page" href="#"><h2>Ínicio</h2></a>
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
         <a class="nav-link" href="#"><h2>Bem-vindo(a)</h2></a>
         <a class="nav-link" href="#"><h2>Sair</h2></a>
        </div>
      </div>
    </nav>

    <form action="#" class="form-imagem">
      <img id="foto" src="https://lh3.googleusercontent.com/pw/AM-JKLUxLBostROie65h4vWf_qr7Jx8wjtRwEguAbVTvx7-ENIu1D6yGohVc3UpFVeqKoLPOcENF1Jn4eXSwn3H3DtdXz28t0Up8jGIlpLmC8VwW0V1uR14EtWg80Qr076ap9-hdeZ6wEplvAljwh3ff_F22kg=w898-h243-no?authuser=0">
    </form>
  </div>

  <div class="row">
    <div class="col-4">
      <div class="row">
        <div class="col-6">
          <div class="card" style="width: 12rem;">
            <img src="https://lh3.googleusercontent.com/pw/AM-JKLW70isdkU8LW0GxmC3qBERGbBDU6LI3kEdW4yMGTjbxS7VboYeWFJCdvDfGqwPFHKgIJ7SUzHWkewZfXOejl7obDnqOo3j6MArNp8hGW_qj52UjAPuoPSCMsSlUplPUEOLSGTaLpODPdS8vfwrRrcY1fw=s500-no?authuser=0">
          </div>
        </div>
        <div class="col-6">
          <div class="card" style="width: 12rem;">
            <img src="https://lh3.googleusercontent.com/pw/AM-JKLXxXcaOrJ-FCqn74jrIOm1Ouszr1oH0KThweh8xLWRdciY6MLlUSbhjdkrNm84nwUwVnl9th8bo9IdCV_r2xqY49EA0cgfbo-7l6YHapeJnGYR3Ac1XBAI_2yVs4dfrvBCR4sMTgTbYlEg3VWfX33eSqg=s500-no?authuser=0">
          </div>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="row">
        <div class="col-6">
          <div class="card" style="width: 12rem;">
            <img src="https://lh3.googleusercontent.com/pw/AM-JKLVE6v7dO6Jbh5Df8hvIqGY572dHEgDoyLPh7oB1YMsloOwWjFsXh81Y40F9wXLk3uSB7aBwSe-mGujRIxdYaMKIs2tusWLlXysY-4t9hSZPgfQ79OUC-kxixHWgYCPQrgYnxpX15wD3Q8_Qcarg2tbYaA=s500-no?authuser=0">
          </div>
        </div>
        <div class="col-6">
          <div class="card" style="width: 12rem;">
            <img src="https://lh3.googleusercontent.com/pw/AM-JKLUHJ9Bx-o5HXft0oUe8aeqO40W75f-nls2GbdgjkjPvuh5cxNrmHkknfRiL3njyFiegLfsaCz_oYj0p1qtcLrS0rgqHOTywD3QFZxwNaZsuZsuCK_37yqghu6sNRTdXiF4XAjsyiRDtDaVKh49c-JYp0Q=s500-no?authuser=0">
          </div>
        </div>
      </div>
    </div>
    <div class="col-4">
      <button class="botao"><i class="fa-solid fa-angles-right"></i>Todas as funcionalidades</button>
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
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  
  .corpo-form, .logo {
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
    margin-left: 15%;
  }

  .nav-item h2 {
    color: #ffffff;
  }
 

  .nav-link h2 {
    color: #fffefe;
  }

  .form-search {
    margin-right: 3%;
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

  .form-imagem {
    height: 45vh;
    padding: 0.3em;
    margin: 0.3em;
  }

  .form-imagem img {
    height: 100%;
    width: 100%;
  }

  .row {
    padding: 0.3em;
    margin: 0.3em;
  }

  .botao {  
  border-radius: 2em;
  width: 14vw;
  background-color: #051775;
  color: #ffffff;
  margin-top: 17%;
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
