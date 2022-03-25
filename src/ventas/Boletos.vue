<style>
.boletos{
  width: 70%;
}
.titulo {
text-align: center;
  }
</style>
<template>
  <div>
    <div class="titulo"> <h2>Train Tickets</h2></div>
    
    <div class="row">
      <div class="col">Left</div>
      <div class="boletos"><ventaDeBoletosDeTren></ventaDeBoletosDeTren></div>

      <div class="col">
        Right
        <div>
          <span>Total Payments : </span>
          $ {{ totalDeVentas }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import ventaDeBoletosDeTren from "@/components/ventaDeBoletosDeTren.vue";

export default {
  components: {
    ventaDeBoletosDeTren,
  },
  computed: {
    ...mapState(["totalDeVentas"]),
  },
  ...mapMutations(["setPago"]),
};
</script>
