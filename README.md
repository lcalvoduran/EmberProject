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

- ~~DONE~~

Hacer el codigo del localStorage y ver que el estado se guarda y cuando recargas la pagina los botones de favorito estan en el estado que los dejaste
- (~~DONE~~) En el servicio tener una lista de objetos {id, estado} y rellenarla con lo que haya en el localStorage en el constructor. A la hora de guardar añades el nuevo objeto a esa lista, y esa lista es la que escribes en el localStorage

- (~~DONE~~) El de cargar va a leer del localStorage el objeto 'favourites', que es un json que contiene las ids de cada vivienda junto con un boolean que dice si se selecciono como favorita o no. Hay que hacer el codigo del localStorage y ver que el estado se guarda y cuando recargas la pagina los botones de favorito estan en el estado que los dejaste

Explanation:

Dentro del component bookmark:
1. Lee el estado llamando al servicio  ~~Done~~ >> Leemos el servicio con nuestro método "filtrado()" que nos devuelve true o false.
2. Actualizar la variable que hace que cambie el icono de acuerdo al estado que has leído.

      "El metodo de filtrar tiene que recibir una ID, buscar en el array esa ID y devolver el valor del booleano de esa ID"
      "El metodo que se te pide tiene que coger una id y filtrar el array para devolver el booleano asociado a esa id, solo eso"

- (~~DONE~~) Cuando hacemos click en un boton, guardamos el par {id, state} si no existe en el array. En caso de que exista, modificamos ese par dentro del array. Faltaria guardar en el localStorage cuando el elemento si existe y lo has modificado, no?~

- (~~DONE~~) Testing Ember Component

- (IN PROGRESS) Testing Ember Services
                --> (~~DONE~~) Testing saveBookmark: Comprobar que cuando renderizamos el componente, hacemos click al botón y eso llama al servicio "saveBookmark".
                --> (IN PROGRESS) Testing loadAllBookmarks: Comprobar que cuando recargamos la página nos ha cargado todos los marcadores. Para ello tenemos que mockear unos datos con distintos ids y comprobarlo. Por lo tanto, primero tendremos que mockearnos los datos, y una vez moqueados estos simplemente llamará al localStorage, con ello podremos observar que los marcadores que estaban guardados se han cambiado de color.


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
