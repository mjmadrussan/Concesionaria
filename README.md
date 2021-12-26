# Objetivos
La concesionaria necesita construir una lista con todos los vehículos que tiene registrados. Por cada vehículo necesita conocer la siguiente información:
+ Marca (Ford, Fiat, etc). (marca)
+ Modelo (Fiesta, Corolla, etc). (modelo)
+ Color (Azul, Rojo, etc). (color)
+ Año de fabricación. (año)
+ Cantidad de kilómetros recorridos. (km)
+ Precio final. (precio)
+ Cantidad de cuotas. (cuotas)
+ Patente. (patente)
+ Vendido: para indicar si el auto está o no vendido. (vendido)
<div style="text-align: justify">
Para ello, se debe requerir el módulo autos que se encuentra en la misma carpeta del archivo donde se está trabajando. Además, se requiere crear un objeto literal llamado 
concesionaria que contendrá todas las funcionalidades que el cliente solicita.

Nuestro objeto literal debe tener un atributo llamado autos que contenga la lista de automóviles importada anteriormente.

Se debe crear la funcionalidad buscarAuto que reciba por parámetro la patente y devuelva el auto al cual le corresponde. En caso de no encontrar el mismo, deberá 
retornar null.

Se debe agregar la funcionalidad de venderAuto que recibe la patente y, en caso de encontrar al automóvil, le asigna el estado de vendido.

Se requiere agregar la funcionalidad autosParaLaVenta que retorna la lista de autos para la venta y no debe incluir los que ya fueron
vendidos.

La concesionaria requiere una funcionalidad que le permita saber cuáles de los autos para la venta son 0 km. Se considera que un auto 0 km es aquel que tenga 
un kilometraje menor a 100. Esta funcionalidad se denomina autosNuevos.

El cliente quiere saber cuánto dinero generaron las ventas. Se debe completar la función listaDeVentas que devuelve una lista que contiene el precio de venta de cada 
auto vendido.

Se debe resolver la funcionalidad totalDeVentas, que justamente devuelve la sumatoria del valor de todas las ventas realizadas. 

Se requiere agregar una funcionalidad que permita verificar si una persona puede comprar o no un auto. Esta permite al sistema definir si una persona al consultar por un auto, 
puede comprarlo. Las personas sólo sacan los autos en cuotas y tomando dos factores como condición de compra. Una es el costo total: si el total de un auto excede 
lo que la persona considera caro, no va a comprar el auto. Otra condición es su capacidad de pago en cuotas: si la capacidad de pago en cuotas supera al costo de la cuota, 
va a poder pagarlo. Si ambas condiciones se cumplen, se realiza la compra.

Es por esto que se debe desarrollar la función puedeComprar que reciba por parámetro un auto y una persona y devuelva true si la misma puede comprar el auto.

Por último, se debe escribir la función autosQuePuedeComprar, que recibe una persona y devuelve la lista de autos que puede comprar.
</div>
