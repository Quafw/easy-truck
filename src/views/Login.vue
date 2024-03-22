<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label for="username">Usuário:</label>
      <input type="text" id="username" v-model="username" required />
      <label for="password">Senha:</label>
      <input type="password" id="password" v-model="password" required />
      <button type="submit" @click="Login">Entrar</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import router from "@/router";

export default {
  setup() {
    const validated = ref(false);
    const username = ref("");
    const password = ref("");

    function Login() {
      console.log(validated.value, username.value, password.value);
      router.push("dashboard");
    }

    return {
      validated,
      username,
      password,
      Login,
    };
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
}
.login-container {
  width: 100%;
  max-width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.login-container h2 {
  text-align: center;
}
.login-container div {
  margin-bottom: 10px;
}
.login-container label {
  /* display: block; */
}
.login-container input {
  padding: 8px;
  width: 100%;
  margin: 0.2rem 0;
}
.login-container button {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
}
.login-container button:hover {
  background-color: #36a374;
}
</style>
