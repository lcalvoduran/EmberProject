### REPOSITORIO LEANDRO EMBER.JS ###

Proyecto Ember JS 


## Goals
- ~~DONE~~ Crear el boton de favorito y ver que se pinte y cambie el icono cuando lo vas pulsando.
  <br /> 
  **Solución**: Se ha creado un component-class (ya que un component-class nos permite que definamos un comportamiento asociado a ese componente de esa forma
            con este tipo de componente nos generará un archivo JavaScript pordefecto). Aunque Ember tras ejecutar el comando "generate component" o el 
            comando "generate component-class ... " no nos defina el template, como no se ha visto necesario pero se ha requerido, se ha creado un template
            para ello.
            <br /> Screenshot: https://imgur.com/SHmyYy2
- ~~DONE~~ Hacer el servicio y que cuando lo pulses llame al metodo de guardar e imprima algo.
          Crear el servicio ~~Done~~ => Hacer un metodo en el servicio ~~Done~~ => Importar el servicio en el componente ~~Done~~ => Llamar al metodo del servicio en el componente ~~Done~~ =>  Recibir la ID ~~Done~~ => Que al servicio se le pase la ID y la guarde y además imprima. ~~Done~~

El de guardar va a escribir el estado del favorito de una vivienda.

- **IN PROGRESS** 

Hacer el codigo del localStorage y ver que el estado se guarda y cuando recargas la pagina los botones de favorito estan en el estado que los dejaste
- En el servicio tener una lista de objetos {id, estado} y rellenarla con lo que haya en el localStorage en el constructor. A la hora de guardar añades el nuevo objeto a esa lista, y esa lista es la que escribes en el localStorage
Ejemplo: 

1) Estamos con el localStorage vacío

localStorage ==> {}
... loadID()
Objeto ==> 
{ 
  ID: 
  STATE: 
}
2) Click en marcador 
localStorage ==> {'grand-old-mansion', 'true'}
... saveID()
Objeto ==> 
{
  ID: 'grand-old-mansion',
  STATE: 'true',
}

3) Click en marcador (again)
localStorage ==> {'grand-old-mansion', 'true' | 'urban-living', 'true'}
... saveID()
Objeto ==> 
{
  ID: 'grand-old-mansion',
  STATE: 'true'
},
{
  ID: 'urban-living',
  STATE: 'true'
}

4) Reinicio de página
localStorage ==> {'grand-old-mansion', 'true' | 'urban-living', 'true'}
... loadID()
Objeto ==> 
{ 
  ID: 
  STATE: 
}

- El de cargar va a leer del localStorage el objeto 'favourites', que es un json que contiene las ids de cada vivienda junto con un boolean que dice si se selecciono como favorita o no. Hay que hacer el codigo del localStorage y ver que el estado se guarda y cuando recargas la pagina los botones de favorito estan en el estado que los dejaste


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
