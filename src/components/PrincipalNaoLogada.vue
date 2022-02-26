<template>
  <nav class="navbar">
      <div class="container-fluid">
        <a class="navbar-brand">
          <img class="logo" src="../assets/logoLogin.jpg" >
          <Strong>Posto Saúde Virtual</Strong>
        </a>
      </div>
  </nav>

  <nav class="navbar" id="menu">
    <div class="container-fluid">
      <nav class="nav">
        <a class="nav-link active" aria-current="page" href="#"> <h4><strong>Médicos</strong></h4></a>
        <a class="nav-link" href="#"> <h4><strong>Serviços</strong></h4></a>
        <a class="nav-link" href="#"> <h4><strong>Postos</strong></h4></a>
        <a class="nav-link" href="#"> 
            <form action="#">
              <input type="text" name="search" id="search" required>
              <button type="submit"><i class="fas fa-search"></i></button>
            </form>
        </a>
        <a class="nav-link" href="#"> <h4><strong>Login</strong></h4></a>
        <a class="nav-link" href="#"> <h4><strong>Cadastrar</strong></h4></a>
      </nav>
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
.navbar {
  background-color:#ffffff;
  padding: 0.2em;
  margin: 0.5em;
}

#menu {
  background-color:#051775;
}

.logo{
  width:19%;
  border-radius: 100px;
}

.navbar-brand{
  color: #051775;
}

strong {
  font-size: 20pt;
  margin-left: 0.5em;
}

.nav-link {
  color: #ffffff;
}

form {
  border: 1px solid #ffffff;
  border-radius: 0.3em;
  padding: 0.3em;
} 

 form input, form button {
  font-size: 1em;
  border-radius: 0.2em;
  border: none;
  padding: 0.2em;
}

form button {
  background: none;
  color: #ffffff;
}

body {
    padding: 0;
    margin: 0;
    background-color: #454d6b;
}

</style>
