### REPOSITORIO LEANDRO EMBER.JS ###

Proyecto Ember JS 


## Goals
- ~~COMPLETED~~ Crear el boton de favorito y ver que se pinte y cambie el icono cuando lo vas pulsando
  Solución: Se ha creado un component-class (ya que un component-class nos permite que definamos un comportamiento asociado a ese componente de esa forma
            con este tipo de componente nos generará un archivo JavaScript pordefecto). Aunque Ember tras ejecutar el comando "generate component" o el 
            comando "generate component-class ... " no nos defina el template, como no se ha visto necesario pero se ha requerido, se ha creado un template
            para ello.
- ~~COMPLETED~~ Hacer el servicio y que cuando lo pulses llame al metodo de guardar e imprima algo
  Solución: Como previamente habíamos creado el archivo JavaScript con el component class sólo teníamos que hacer que llamase a este archivo cada vez que
            detectará un evento "click" a la hora de pulsar el botón de manera que podíamos observar que caa vez que pulsábamos este botón nos imprimía
            algo en la consola del tipo "Has pulsado el botón". 
- **IN PROGRESS** Hacer el codigo del localStorage y ver que el estado se guarda y cuando recargas la pagina los botones de favorito estan en el estado que los dejaste




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
