<template>
  <div class="form">
    <form @submit.prevent="adicionarMotorista">

      <label for="nome_completo">Nome Completo:</label><br>
      <input type="text" id="nome_completo" v-model="novoMotorista.nome_completo" required><br><br>

      <label for="data_nascimento">Data de Nascimento:</label><br>
      <input type="date" id="data_nascimento" v-model="novoMotorista.data_nascimento" required><br><br>

      <label for="cpf">CPF:</label><br>
      <input type="text" id="cpf" v-model="novoMotorista.cpf" required><br><br>

      <label for="cnh">CNH:</label><br>
      <input type="text" id="cnh" v-model="novoMotorista.cnh" required><br><br>

      <label for="modelo_caminhao">Modelo do Caminhão:</label><br>
      <input type="text" id="modelo_caminhao" v-model="novoMotorista.modelo_caminhao" required><br><br>

      <label for="numero_placa">Número da Placa:</label><br>
      <input type="text" id="numero_placa" v-model="novoMotorista.numero_placa" required><br><br>

      <label for="tipo_carroceria">Tipo de Carroceria:</label><br>
      <input type="text" id="tipo_carroceria" v-model="novoMotorista.tipo_carroceria" required><br><br>

      <label for="qualificacoes">Qualificações:</label><br>
      <textarea id="qualificacoes" v-model="novoMotorista.qualificacoes" required></textarea><br><br>

      <button type="submit" @click="newMotorista(novoMotorista)">Adicionar Motorista</button>
    </form>
  </div>


  <div class="content">
    <!-- <h1>Dashboard</h1> -->

    <div class="esquerda">
      <div v-for="i in motor" style="color: white;padding: 1rem; border-radius: 1rem; background-color: aqua; margin: 10px;
      color: black;">
        <div>
          <p>Nome: {{ i.nome_completo }}</p>
          <p>Data nascimento: {{ i.data_nascimento }}</p>
          <p>CPF: {{ i.cpf }}</p>
          <p>CNH: {{ i.cnh }}</p>
          <p>Modelo caminhão: {{ i.modelo_caminhao }}</p>
        </div>
      </div>
    </div>
    <div class="direita">
      <div v-for="i in produt" style="color: white;padding: 1rem; border-radius: 1rem; background-color: blueviolet; margin: 10px;
      color: black;">
        <div>
          <p>Nome: {{ i.nome }}</p>
          <p>Razão social: {{ i.razao_social }}</p>
          <p>Partindo de: {{ i.destino_partida }}</p>
          <p>Destino a: {{ i.destino_entrega }}</p>
          <p>Tipo carga: {{ i.tipo_carga }}</p>
          <p>Modelo caminhão: {{ i.tipo_caminhao_desejado }}</p>
          <p>Peso carga: {{ i.peso_carga }}</p>
        </div>
      </div>
    </div>

  </div>
  <q-btn @click=" routing"> Avançar </q-btn>
</template>

<script>
import router from "@/router";
import { ref } from "vue";

import Produtores from "@/assets/produtores.js"
import Motoristas from "@/assets/caminhoneiros.js"

export default {

  setup() {
    const produt = ref(Produtores);
    const motor = ref(Motoristas);

    const novoMotorista = ref({
        id: motor.length + 1,
        nome_completo: null,
        data_nascimento: null,
        cpf: null,
        cnh: null,
        modelo_caminhao: null,
        numero_placa: null,
        tipo_carroceria: null,
        qualificacoes: null,
      }
    )

    function newMotorista(e){
      e.id = Motoristas.length + 1
      motor.value.push(e)
      
      // Limpeza
      novoMotorista.value = {
        id: motor.length + 1,
        nome_completo: null,
        data_nascimento: null,
        cpf: null,
        cnh: null,
        modelo_caminhao: null,
        numero_placa: null,
        tipo_carroceria: null,
        qualificacoes: null,
      }
    }

    function routing() {
      router.push("/about");
    }
    return {
      routing,
      newMotorista,
      produt,
      motor,
      novoMotorista
    };
  },
};
</script>

<style scoped>
/* Estilos específicos para o componente Dashboard */
</style>