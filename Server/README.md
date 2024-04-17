### Iniciar el server

1. Instalar [docker](https://www.docker.com/products/docker-desktop/).

2. Cambiar de rama.

    ```
    git checkout dev
    ```

3. Ingresar a la carpeta del server donde se encuentra el archivo `docker-compose.yml` y `Dockerfile`.

    ```bash
    cd /ruta/a/la/carpeta/del/server_ed_platform
    ```
    ```md
    s14-19-t-java
    ├── Client
    ├── README.md
    └── Server
        ├── README.md
        └── server_ed_platform
            ├── docker-compose.yml
            └── Dockerfile
    ```
4. Correr el comando

    > **IMPORTANTE:** Asegúrate de tener los puertos `5432`, `8080` libres.

    ```
    docker compose up
    ```

### Ingreso de datos (solo debera hacerlo una vez)

1. Conectarse al contenedor con nombre `postgres_db`.

    ```
    docker exec -it <ID_DEL_CONTENEDOR> psql -U postgres -d server_ed_platform_db
    ```

    > **NOTA:** Para saber el `ID_DEL_CONTENEDOR` corre el siguiente comando.

    ```
    docker ps
    ```

2. Introduce los datos del siguiente [script](https://github.com/No-Country/s14-19-t-java/tree/dev-backend-attendance/Server/server_ed_platform/data.sql).

### En caso de haber cambios en el server debes eliminar los contenedores e imaneges creadas.

1. Eliminar los contenedores creados.

    ```
    docker compose down
    ```

2. Eliminar la imagen creada con nombre `server`

    ```
    docker rmi <ID_DE_LA_IMAGEN> 
    ```
    
    > **NOTA:** Para saber el `ID_DE_LA_IMAGEN` corre el siguiente comando.

    ```
    docker images
    ```
### Usuarios
1. Estudiante
    ```json
    {
        "email": "student1@email.com",
        "password": "Student#123"
    }
    ```
### Importacion de collecciones de postman
> **NOTA** Descargue e importe los archivos `json`
1. `environment` [json](https://github.com/No-Country/s14-19-t-java/blob/dev-backend-xonlinex/Server/Server_Ed_platform.postman_environment.json)
2. `collection` [json](https://github.com/No-Country/s14-19-t-java/blob/dev-backend-xonlinex/Server/Server_Ed_Requests.postman_collection.json)
