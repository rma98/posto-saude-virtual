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
        <a class="nav-link active" aria-current="page" href="#"> <h4 id="top-um"><strong>Médicos</strong></h4></a>
        <a class="nav-link" href="#"> <h4><strong>Serviços</strong></h4></a>
        <a class="nav-link" href="#"> <h4><strong>Postos</strong></h4></a>
        <a class="nav-link" href="#"> 
            <form action="#">
              <input type="text" name="search" id="search" required>
              <button type="submit"><i class="fas fa-search"></i></button>
            </form>
        </a>
        <a class="nav-link" href="#"> <h4 id="top-cinco"><strong>Login</strong></h4></a>
        <a class="nav-link" href="#"> <h4><strong>Cadastrar</strong></h4></a>
      </nav>
    </div>
  </nav>

  <div>
    <img id="foto" src="https://lh3.googleusercontent.com/pw/AM-JKLW4dIetVBt70rU8eXGka_SWoRzewI1ffHNzI_dUzKCal3EOi2dZfZma9jduYC_48VJjg0HSqqzSjGmqopPuM7syuzF5cVQUl5Je4kn2EBNWI_EXHplyMhf_bzbWDA4c6NxCyTFrjroZUj1e1WoHU5Gj8A=w1600-h884-no?authuser=0">
  </div>

  <div class="row">
    <div class="col-3">
      <div class="card" style="width: 18rem;">
        <img id="card-um" src="https://lh3.googleusercontent.com/pw/AM-JKLUSfd3EZtDQKQfSlAvrvARcQMfXOR7FBKKchO6GCHSl24AICFZ6zufWgjVcvMudNvz0J5U57sTAy093PHAMR1cVbhOBO3azpbo8eHLx-ryx8pQ5F_h0y3cgSh02-8MuDf5GSmSSdp8hnx3pTg9L-tAvzg=s500-no?authuser=0" class="card-img-top">
      </div>
    </div>
    <div class="col-3"> 
      <div class="card" style="width: 18rem;">
        <img id="card-dois" src="https://lh3.googleusercontent.com/pw/AM-JKLUVJ3weI3KK2eaikbLIaI3kfFKUYDzkmTNyHMdH45GGXMyahHZ_21iC8vr5BAoj3yJ0KLPz9LV_Zz6VyK4SGiuQTqNyX9fFXgeulucIFzX4I8CsvqBCWG5cZqxqZ88_85d8qUYya2X9BcNQdk9UGScy0w=s500-no?authuser=0" class="card-img-top">
      </div>
    </div>
    <div class="col-3"> 
      <div class="card" style="width: 18rem;">
        <img id="card-tres" src="https://lh3.googleusercontent.com/pw/AM-JKLUUmAfhcJ_vOtwZlUMjneYuAils-OLPv1AouqrnQdn0KZydQq6DWTx0QS5E0VnTxIQZK673kh-x8xDp6vmsElxsWjP18fBQLx9IxCHPXObeeVcix5s8_DVc2J9f3E6jQHVV_J7zQVAEYjMq5We5vNIHvQ=s500-no?authuser=0" class="card-img-top">
      </div>
    </div>
    <div class="col-3"> 
      <div class="card" style="width: 18rem;">
        <img id="card-quatro" src="https://lh3.googleusercontent.com/pw/AM-JKLUUmAfhcJ_vOtwZlUMjneYuAils-OLPv1AouqrnQdn0KZydQq6DWTx0QS5E0VnTxIQZK673kh-x8xDp6vmsElxsWjP18fBQLx9IxCHPXObeeVcix5s8_DVc2J9f3E6jQHVV_J7zQVAEYjMq5We5vNIHvQ=s500-no?authuser=0" class="card-img-top">
      </div>
    </div>
    <div class="row">
      <div class="col-12"> 
        <button><i class="fa-solid fa-angles-right"></i>Todas as funcionalidades</button>
      </div>
    </div>
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

body {
    padding: 0;
    margin: 0;
    background-color: #454d6b;
}

.navbar {
  background-color:#ffffff;
  padding: 0.2em;
  margin: 0.5em;
  margin-left: 4em;
}

#menu {
  background-color:#051775;
  width: 90vw;
  height: 9vh;
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

#top-um {
  margin-left: 4em;
}

#top-cinco{
  margin-left: 2em;
}

form {
  border: 1px solid #ffffff;
  border-radius: 0.3em;
  padding: 0.3em;
  width: 30vw;
  height: 6vh;
} 

 form input, form button {
  font-size: 1em;
  border-radius: 0.2em;
  border: none;
  padding: 0.2em;
}

form input {
  width: 27vw;
  background: none;
  color: #ffffff;
}

form button {
  background: none;
  color: #ffffff;
}

#foto {
  width: 91%;
  margin-left: 4%;
  
}

.row {
  margin-left: 1em;
  padding: 2%;
}

button {  
  border-radius: 2em;
  width: 15vw;
  margin-left: 38%;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  background-color: #051775;
  color: #ffffff;
}
</style>
