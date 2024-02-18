//conexión con ajax a http://localhost/php-database/conexion.php
function recibirDatos(){
    return $.ajax({
        url: 'http://localhost/php-database/conexion.php',
        type: 'GET',
        dataType: 'json',
        cache: false,
        success: function(response){
            console.log(response);
        }
    });
};

//templates de los libros xd
const NombreTemplate = {
    template: `
    <div class="libro container">
    <h3>{{titulo}}</h3>
    <div class="contenido">
    <img :src="imagen" class='portada' alt="Imagen de la recomendación"> 
    <div class="precio"> {{precio}} </div>
        <div class="descripcion">
            <h4>{{titulo}}</h4>
            <p>Autor: {{autor}}</p>
            <p>Editorial: {{editorial}}</p>
            <p>ISBN: {{isbn}}</p>
            <p>Descripcion: {{descripcion}}</p>
        </div>
    </div>
</div>
    `,
    data() {
        return {
            imagen: '',
            titulo: '',
            autor: '',
            genero: '',
            sinopsis: ''
        }
    },
    mounted() {
        recibirDatos().done(response => {
            this.imagen = response[0].imagen;
            this.titulo = response[0].titulo;
            this.autor = response[0].autor;
            this.isbn = response[0].isbn;
            this.precio = response[0].precio;
            this.editorial = response[0].editorial;
            this.descripcion = response[0].descripcion;
        });
    }
};

const PrincipeTemplate = {
    template: `
    <div class="libro container">
    <h3>{{titulo}}</h3>
    <div class="contenido">
    <img :src="imagen" class='portada' alt="Imagen de la recomendación">
    <div class="precio"> {{precio}} </div>
        <div class="descripcion">
            <h4>{{titulo}}</h4>
            <p>Autor: {{autor}}</p>
            <p>Editorial: {{editorial}}</p>
            <p>ISBN: {{isbn}}</p>
            <p>Descripcion: {{descripcion}}</p>
        </div>
    </div>
</div>
    `,
    data() {
        return {
            imagen: '',
            titulo: '',
            autor: '',
            genero: '',
            sinopsis: ''
        }
    },
    mounted() {
        recibirDatos().done(response => {
            this.imagen = response[1].imagen;
            this.titulo = response[1].titulo;
            this.autor = response[1].autor;
            this.isbn = response[1].isbn;
            this.precio = response[1].precio;
            this.editorial = response[1].editorial;
            this.descripcion = response[1].descripcion;
        });
    }
};

const IdhunTemplate = {
    template: `
    <div class="libro container">
    <div class="contenido">
        <img :src="imagen" class='portada' alt="Imagen de la recomendación">
        <div class="informacion">
            <h3>{{titulo}}</h3>
            <p>Autor: {{autor}}</p>
            <p>Editorial: {{editorial}}</p>
            <p>ISBN: {{isbn}}</p>
            <p>Descripcion: {{descripcion}}</p>
            <div class="precio">Precio: {{precio}}€</div>
            <div class="precio-total">Precio Total: {{calcularTotal}} €</div>
            <div class="controles">
                <button @click="agregarUnidad"> + </button>
                <span>{{ unidadesSeleccionadas }}</span>
                <button @click="quitarUnidad"> - </button>
                
            </div>
            <br>
            <button @click="agregarAlCarrito">Añadir al carrito</button>
           
        </div>
    </div>
</div>

    `,
    data() {
        return {
            unidadesSeleccionadas: 0,
            precioTotal: 0,
            imagen: '',
            titulo: '',
            autor: '',
            genero: '',
            sinopsis: ''
        }
    },
    methods: {
        agregarUnidad() {
            this.unidadesSeleccionadas++;
        },
        quitarUnidad() {
            if (this.unidadesSeleccionadas > 0) {
                this.unidadesSeleccionadas--;
            }
        },
        agregarAlCarrito() {
            this.$emit('anadir-al-carrito', {
                titulo: this.titulo,
                id: this.id,
                imagen: this.imagen,
                precio: this.precioTotal,
                unidades: this.unidadesSeleccionadas
            });
        }
    },
    computed:{
        calcularTotal(){
            if (this.unidadesSeleccionadas > 0) {
                this.precioTotal = this.unidadesSeleccionadas * this.precio;
                return this.precioTotal;
            } return 0;
        }
    },
    mounted() {
        recibirDatos().done(response => {
            this.imagen = response[2].imagen;
            this.titulo = response[2].titulo;
            this.autor = response[2].autor;
            this.isbn = response[2].isbn;
            this.precio = response[2].precio;
            this.editorial = response[2].editorial;
            this.descripcion = response[2].descripcion;

        });
    }
};

const ImperioTemplate = {
    template: `
    <div class="libro container">
    <h3>{{titulo}}</h3>
    <div class="contenido">
    <img :src="imagen" class='portada' alt="Imagen de la recomendación">
    <div class="precio"> {{precio}} </div>
        <div class="descripcion">
            <h4>{{titulo}}</h4>
            <p>Autor: {{autor}}</p>
            <p>Editorial: {{editorial}}</p>
            <p>ISBN: {{isbn}}</p>
            <p>Descripcion: {{descripcion}}</p>
        </div>
    </div>
</div>
    `,
    data() {
        return {
            imagen: '',
            titulo: '',
            autor: '',
            genero: '',
            sinopsis: ''
        }
    },
    mounted() {
        recibirDatos().done(response => {
            this.imagen = response[3].imagen;
            this.titulo = response[3].titulo;
            this.autor = response[3].autor;
            this.isbn = response[3].isbn;
            this.precio = response[3].precio;
            this.editorial = response[3].editorial;
            this.descripcion = response[3].descripcion;
        });
    }
};

const OrigenTemplate = {
    template: `
    <div class="libro container">
    <h3>{{titulo}}</h3>
    <div class="contenido">
    <img :src="imagen" class='portada' alt="Imagen de la recomendación">
    <div class="precio"> {{precio}} </div>
        <div class="descripcion">
            <h4>{{titulo}}</h4>
            <p>Autor: {{autor}}</p>
            <p>Editorial: {{editorial}}</p>
            <p>ISBN: {{isbn}}</p>
            <p>Descripcion: {{descripcion}}</p>
        </div>
    </div>
</div>
    `,
    data() {
        return {
            imagen: '',
            titulo: '',
            autor: '',
            genero: '',
            sinopsis: ''
        }
    },
    mounted() {
        recibirDatos().done(response => {
            this.imagen = response[4].imagen;
            this.titulo = response[4].titulo;
            this.autor = response[4].autor;
            this.isbn = response[4].isbn;
            this.precio = response[4].precio;
            this.editorial = response[4].editorial;
            this.descripcion = response[4].descripcion;
        });
    }
};



const AboutTemplate = {
    template: `<div id="info">
    <img src="./img/logo.png" alt="Logo de La Libroteca" class="logo">

    <div id="informacion" class="container">
    <h3>¡Bienvenido a La Libroteca!</h3>
    <br>
    <p>En La Libroteca, no solo vendemos libros, sino que también fomentamos una comunidad 
    apasionada de lectores ávidos. Nos dedicamos a alimentar la pasión por la lectura y a 
    desbloquear las puertas de la imaginación a través de las historias que llenan nuestras estanterías.</p>
    <br>
    <p>Nuestra misión es simple pero poderosa: conectarte con los libros que transformarán tus 
    momentos de lectura en viajes inolvidables. Desde nuestros humildes comienzos hasta nuestro 
    vibrante presente, hemos sido un faro para los amantes de la literatura, ofreciendo no solo un 
    lugar donde comprar libros, sino un refugio donde las palabras cobran vida y los personajes se convierten 
    en compañeros de aventura.</p>
    <br>
    <p>En La Libroteca, encontrarás una selección cuidadosamente curada que abarca desde los clásicos atemporales 
    hasta las últimas novedades literarias. Nuestro compromiso con la excelencia y la diversidad garantiza que cada lector, 
    sin importar sus gustos o intereses, encuentre una historia que le inspire, le entretenga y le haga reflexionar.</p>
    <br>
    <p>Únete a nosotros en este viaje, donde cada página es una invitación a explorar nuevos mundos, descubrir nuevas perspectivas 
    y sumergirse en la belleza infinita de la palabra escrita. En La Libroteca, la aventura de la lectura nunca termina, y cada libro 
    es una puerta abierta hacia el conocimiento, la emoción y la maravilla.</p>
    <br>
    <p>Descubre, conecta y celebra la magia de la literatura en La Libroteca, donde los libros son mucho más que simples páginas: 
    son el alma de nuestras vidas y el corazón de nuestra comunidad.</p>
    <br>
    <h4>¡Bienvenido a La Libroteca, donde los sueños se convierten en historias y las historias se convierten en realidad!</h4>

    </div>
</div>`
};

const FormularioTemplate = {
    template: `
    <div class="login-container">
    <h2>Iniciar Sesión</h2>
    <form action="#">
      <div class="form-group">
        <label for="username">Nombre de Usuario:</label>
        <input type="text" id="username" name="username" required>
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" required>
      </div>
      <div class="form-group">
        <button type="submit" id='iniciar'>Iniciar Sesión</button>
      </div>
    </form>
  </div>
    `
};

const RegistroTemplate = {
    template: `
    
    <div class="container">
    <h1>¿Un nuevo pingüino? ¡Regístrate!</h1>
    <br>
    <form id="registro-form">
    <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required>
    </div>
    <div class="form-group">
        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" required>
    </div>
    <div class="form-group">
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required>
    </div>
    <div class="form-group">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" required>
    </div>
    <div class="form-group">
        <label for="confirm-password">Confirmar Contraseña:</label>
        <input type="password" id="confirm-password" name="confirm-password" required>
    </div>
    <div class="form-group">
        <label for="tarjeta">Número de Tarjeta Bancaria:</label>
        <input type="text" id="tarjeta" name="tarjeta" pattern="[0-9]{16}" maxlength="16" placeholder="Ingrese los 16 dígitos" required>
    </div>
    <div class="form-group">
        <button type="submit">Registrarse</button>
    </div>
</form>

</div>`
}

const MainTemplate = {
    template: `
    <div class="recomendacion container">
    <h3>Recomendación del Día: {{titulo}}</h3>
    <div class="contenido">
        <img :src="imagen" class="portada" alt="Imagen de la recomendación">
        <div class="descripcion">
            <p>Autor: {{autor}}</p>
            <p>Descripción: {{descripcion}} </p>
        </div>
    </div>
</div>

    `,
    data() {
        return {
            imagen: '',
            titulo: '',
            autor: '',
            genero: '',
            sinopsis: ''
        }
    },
    methods: {
        generarIdRandom() {
            return Math.floor(Math.random() * 5);
        }
    },
    mounted() {
        recibirDatos().done(response => {
            this.id = this.generarIdRandom();
            this.imagen = response[this.id].imagen;
            this.titulo = response[this.id].titulo;
            this.autor = response[this.id].autor;
            this.descripcion = response[this.id].descripcion;

        });
    }
}

//creación de la VueApp
const app = Vue.createApp({
    data() {
        return {
            componenteActual: 'main-template',
            loggedIn: false,
            carrito: []
        };
    },
    methods: {
        mostrarPlantilla(componente) {
            if (componente === 'about') {
                this.componenteActual = 'about-template';
            } else if (componente === 'formulario') {
                if (this.loggedIn){
                    this.componenteActual = 'formulario-template'; 
                } else {
                    this.componenteActual = 'registro-template';
                }   
            } else if (componente === 1){
                this.componenteActual = 'nombre-template';
            } else if (componente === 2){
                this.componenteActual = 'principe-template';
            } else if (componente === 3){
                this.componenteActual = 'idhun-template';
            } else if( componente === 4){
                this.componenteActual = 'imperio-template';
            } else if (componente ===5){
                this.componenteActual = 'origen-template';
            }
            else {
                this.componenteActual = 'main-template';
            }
        },
        agregarAlCarrito(libro) {
            this.carrito.push(libro);
            console.log(this.carrito)
        }
    }
});

app.component('about-template', AboutTemplate);
app.component('main-template', MainTemplate);
app.component('formulario-template', FormularioTemplate);
app.component('registro-template', RegistroTemplate);
app.component('nombre-template', NombreTemplate);
app.component('principe-template', PrincipeTemplate);
app.component('idhun-template', IdhunTemplate);
app.component('imperio-template', ImperioTemplate);
app.component('origen-template', OrigenTemplate);


app.mount('#app');

