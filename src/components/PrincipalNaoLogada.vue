<template>
<div style="display:inline-block;vertical-align:top;">
  <img class="logo" src="../assets/logoLogin.jpg">
</div>
<div style="display:inline-block;">
  <h1 id="titulo">
    Posto Saúde Virtual
  </h1>
</div>
<div>
  <nav class="navbar navbar-light">
    <div class="container-fluid">
        <a class="navbar-brand"> 
          Medicos 
        </a>
    </div>
  </nav>
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

.logo{
  width:80%;
  border-radius: 100px;
  margin: 35%;
  margin-left: 70%;
}

#titulo {
  color: #00008B;
  margin-left: 20%;
  margin-top: 15%;
   
}
</style>
