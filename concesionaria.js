let autos = require("./coches.js")

let concesionaria ={ 
     autos: autos,
   buscarAuto: function (patente) {
         
         for(i=0; i<autos.length; i++) {
            if(autos[i].patente == patente )
               return autos[i] 
         }
    return null  
   },
   venderAuto: function(patente) {
        let venta=this.buscarAuto(patente)
        venta.vendido=true

   },
   autosParaLaVenta: function() {
        let disponibles = autos.filter(function(auto){
            return auto.vendido == false

        })
        return disponibles
   },
   autosNuevos: function () {
        let lista = this.autosParaLaVenta()
        let nuevos = lista.filter(function(ceroKm) {
            return ceroKm.km < 100

        })
        return nuevos
   },
   listaDeVentas: function () {
        let vec=[]
        for(i=0; i<autos.length; i++) {
            if(autos[i].vendido==true)
                vec.push(autos[i].precio)
        }
        return vec
    },
    totalDeVentas: function () {
        let sumatoria = this.listaDeVentas()
        let total = sumatoria.reduce(function(acum, num) {
            return acum + num
        }, 0)

     return total
    },
    puedeComprar: function(auto, persona) {
        return persona.capacidadDePagoEnCuotas >= auto.precio / auto.cuotas && persona.capacidadDePagoTotal >= auto.precio
    },
    autosQuePuedeComprar: function (persona) {
       let disponible = this.autosParaLaVenta()
       let posibles = disponible.filter(function(auto){
           return concesionaria.puedeComprar(auto, persona)

       } )
       return posibles
    } 
}


