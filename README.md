### EMBER PROJECT - Leandro ###

**INTRODUCCIÓN**
Este repositorio es el super-rentals-2


# Features

- Mostar un botoncito de 'favorito' al lado de cada elemento de la lista esa de viviendas.
- Ese botoncito seria un componente 'FavouriteButton' que recibe una id (la del la vivienda) y su logica interna es que si lo pulsas llama a un servicio 'FavouriteService' para guardar su estado. Aparte de esto, el boton cambia su icono segun el estado (puede ser una estrellita vacia si no esta seleccionado y una llena cuando lo está).
- El servicio 'FavouriteService' tiene 2 metodos, el del guardar un estado y el del cargar un estado.
El de cargar va a leer del localStorage el objeto 'favourites', que es un json que contiene las ids de cada vivienda junto con un boolean que dice si se selecciono como favorita o no.
El de guardar va a escribir el estado del favorito de una vivienda.


# GOALS

- ~~COMPLETED~~ Crear el boton de favorito y ver que se pinte y cambie el icono cuando lo vas pulsando 
- Hacer el servicio y que cuando lo pulses llame al metodo de guardar e imprima algo
- Hacer el codigo del localStorage y ver que el estado se guarda y cuando recargas la pagina los botones de favorito estan en el estado que los dejaste

# super-rentals

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://cli.emberjs.com/release/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd super-rentals`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint`
* `npm run lint:fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://cli.emberjs.com/release/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
