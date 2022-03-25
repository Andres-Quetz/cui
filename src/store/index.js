import { createStore } from 'vuex'

export default createStore({
  state: {
    sidebarVisible: '',
    sidebarUnfoldable: false,
    historico: [],
    name: "andres",
    fullName: "",
    monedas: [],
    totalDeVentas: 0,
    descuento: 0,
    historicoVentas: [],
    asientosDeTren: [],
  },
  mutations: {
    toggleSidebar(state) {
      state.sidebarVisible = !state.sidebarVisible
    },
    toggleUnfoldable(state) {
      state.sidebarUnfoldable = !state.sidebarUnfoldable
    },
    updateSidebarVisible(state, payload) {
      state.sidebarVisible = payload.value
    },
    iniAsientosDeTren(state) {
      // let s = null;
      for (let j = 0; j < 7; j++) {
        switch (j) {
          case 0:
            state.descuento = 2500 * 1;
            break;
          case 1:
            state.descuento = 2500 * 0.95;
            break;
          case 2:
            state.descuento = 2500 * 0.9;
            break;
          case 3:
            state.descuento = 2500 * 0.85;
            break;
          case 4:
            state.descuento = 2500 * 0.8;
            break;
          case 5:
            state.descuento = 2500 * 0.75;
            break;

          default:
            state.descuento = 2500 * 1;
            break;
        }
        for (let k = 0; k < 6; k++) {
          state.asientosDeTren.push({
            folio: "label",
            estado: true,
            nombre: j + "" + k,
            img: "disponible.png",
            costo: state.descuento,
          });
        }
      }
    },
    registrarVenta(state, registro) {
      const a = registro.cliente.split(" ");

      state.asientosDeTren[registro.id].img = "ocupado.png";
      state.asientosDeTren[registro.id].nombre =
        a[0].substring(0, 1) + a[1].substring(0, 1);

      state.totalDeVentas =
        state.totalDeVentas + state.asientosDeTren[registro.id].costo;
    },
    setMonedas(state,par1) {
      state.monedas = par1;
      
    },
    setVenta(state, par) {
      state.asientosDeTren = par;
    },
    setPago(state, par3) {
      state.totalDeVentas = par3;
    },
    completarNombre(state, apellido) {
      state.fullName = state.name + apellido;
    },
    saveMonedas(state, precio) {
      for (let key in precio) {
        state.monedas.push({
          code: precio[key].code,
          description: precio[key].description,
          rate: precio[key].rate,
        });
      }
    },
  },
  actions: {},
  modules: {},
})
