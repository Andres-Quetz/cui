<style>
.display{
border: 1px solid #ccc;
      border-radius: 5px;    
      width: 85%;
}


.botonsitos{
  display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 20px;
      padding: 20px;
}

</style>
<template>
  <div>
    <div class="container col-xs-12 col-sm-6 col-md-8"  >
      <div class="display">
      
        <div class="screen">
            <input v-model="display" type="text" class="form-control" />
          </div>
        <div class="botonsitos">
          
              <CButton color="secondary" @click="botones(7)">7</CButton>
              <CButton color="secondary" @click="botones(8)">8</CButton>                      
              <CButton color="secondary" @click="botones(9)">9</CButton>           
              <CButton color="info" @click="operacion('+')">+</CButton>
                      
              <CButton color="secondary" @click="botones(4)">4</CButton>        
              <CButton color="secondary" @click="botones(5)">5</CButton>        
              <CButton color="secondary" @click="botones(6)">6</CButton>    
              <CButton color="info" @click="operacion('-')">-</CButton>
    
              <CButton color="secondary" @click="botones(1)">1</CButton>
              <CButton color="secondary" @click="botones(2)">2</CButton>
              <CButton color="secondary" @click="botones(3)">3</CButton>
              <CButton color="info" @click="operacion('*')">*</CButton>
           
             <CButton color="secondary" @click="botones(0)">0</CButton>
              <CButton color="success"  @click="calculate()">=</CButton>
             <CButton color="warning" @click="clean()">C</CButton>
             <CButton color="info" @click="operacion('/')">/</CButton>
         
        </div>       
      
    </div>
    <div class="hist">
            History
            <div v-for="(historia, n) in historial" :key="historia.id">
              <p>
                <span class="historial"
                  >{{ historia.op1 }} {{ historia.tipo }} {{ historia.op2 }} =
                  {{ historia.resultado }}</span
                >
                <CButton color="danger" variant="outline" size="sm" @click="removeHistoria(n)">Delete</CButton>
                
              </p>
            </div>
          </div>
  </div>
    </div>
    
</template>

<script>
export default {
  data() {
    return {
      display: 0,
      op1: 0,
      name: "Andres",
      type: null,
      historial: [],
    };
  },
  mounted() {
    if (localStorage.getItem("historialCal")) {
      try {
        this.historial = JSON.parse(localStorage.getItem("historialCal"));
      } catch (e) {
        localStorage.removeItem("historialCal");
      }
    }
  },
  methods: {
    operacion(operador) {
      if (operador == "+") {
        this.type = "+";
      }
      if (operador == "-") {
        this.type = "-";
      }
      if (operador == "*") {
        this.type = "*";
      }
      if (operador == "/") {
        this.type = "/";
      }
      this.op1 = this.display;
      this.display = 0;
    },

    botones(numero) {
      //    console.log(numero);
      if (this.display == 0) {
        this.display = numero;
      } else {
        this.display = this.display + "" + numero;
      }
    },
    calculate() {
      if (!this.display) {
        return;
      }
      //      {tipo: '+', op1: 10, op2: 20, resultado: 50 },
      var num2 = this.display;
      if (this.type == "+") {
        this.display = parseInt(this.op1) + parseInt(num2);
        this.historial.push({
          tipo: "+",
          op1: parseInt(this.op1),
          op2: num2,
          resultado: this.display,
        });
      }
      if (this.type == "-") {
        this.display = parseInt(this.op1) - parseInt(num2);
        this.historial.push({
          tipo: "-",
          op1: parseInt(this.op1),
          op2: num2,
          resultado: this.display,
        });
      }
      if (this.type == "*") {
        this.display = parseInt(this.op1) * parseInt(num2);
        this.historial.push({
          tipo: "*",
          op1: parseInt(this.op1),
          op2: num2,
          resultado: this.display,
        });
      }
      if (this.type == "/") {
        this.display = parseInt(this.op1) / parseInt(num2);
        this.historial.push({
          tipo: "/",
          op1: parseInt(this.op1),
          op2: num2,
          resultado: this.display,
        });
      }
      this.saveHistorial();
    },
    removeHistoria(x) {
      this.historial.splice(x, 1);
      this.saveHistorial();
    },
    saveHistorial() {
      const parsed = JSON.stringify(this.historial);
      localStorage.setItem("historialCal", parsed);
    },

    clean() {
      this.display = 0;
    },
    reversef() {
      //  console.log("variable mensage");
      this.message = this.message.split("").reverse().join("");
    },
    incremento() {
      this.contador = this.contador + 1;
    },
  },
};
</script>
