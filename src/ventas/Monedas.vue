<style>
.tit{
  text-align: center;
}
</style>
<template>
  <div >
    <div class="tit"><h2>Management</h2></div>
    
    <listaDeMonedas></listaDeMonedas>
  </div>
</template>

<script>
import listaDeMonedas from "@/components/listaDeMonedas.vue";

export default {
  components: {
    listaDeMonedas,
  },
};
</script>
