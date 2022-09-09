import express, { application } from 'express';

import morgan from 'morgan'; // Procesa los datos antes de que llegue a las rutas

class Server {

    // Propidades de la clase
    private app = application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        // Tiene que ejecutarse en ese orden
        // 1.- Base de datos
        // this.dbConection();

        // 2.- This middlerares
        this.middlewares();

        // 3.- Definir rutas
        // this.routes();
    }

    /**
     * listen
     */
    public listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el Puerto: ' + this.port);
        });
    }


    // 2.- Para parsear el BODY
    // Son metodos que se ejecutan antes de que se pase a una ruta
    public middlewares() {
        // 1.- CORS
        // this.app.use(cors());

        // 2.-Lectura del BODY para que funcione potsman y entienda los formatos JSON
        // this.app.use(express.json());

        // 3.- Configurando la carpeta publica
        // this.app.use(express.static('public'));

        // 4.- Morgan
        this.app.use(morgan('dev'));

    }

}

// Esta va a ser la clse que se va a exportar por defecto
export default Server;
