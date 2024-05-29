# Prisma Docker MySQL API

Este proyecto es una API RESTful construida con Node.js, Express y Prisma, y se ejecuta en un entorno Docker con una base de datos MySQL. La API permite gestionar entrenadores (coaches), cursos (courses), horarios (schedules) y temas (topics).

## Requisitos

- Docker y Docker Compose
- Node.js y npm

## Instalación

1. Clona este repositorio:

```sh
git clone https://github.com/tu-usuario/prisma-docker-mysql-api.git
cd prisma-docker-mysql-api

```

2. crea un archivo .env en la raíz del proyecto con el siguiente contenido:

```sh
touch .env
```

3. Inicia los contenedores de Docker:

```sh
docker-compose up -d
```

5. Instala las dependencias del proyecto:

```sh
npm install
```

6. Ejecuta las migraciones de la base de datos:

```sh
docker-compose exec app npx prisma migrate dev --name init
```

7. Genera el cliente de Prisma:

```sh
docker-compose exec app npx prisma generate
```

8. La API estará disponible en `http://localhost:3000`.

## Uso

La API estará disponible en http://localhost:4000. Puedes probar los siguientes endpoints usando Postman, cURL o cualquier otra herramienta de tu elección.

- Endpoints:
  - Crear Coach

```sh
POST /api/coaches
Body (JSON):
{
  "coach_name": "Coach Name",
  "email": "coach@example.com",
  "phone_number": "1234567890",
  "course_id": 1
}
```

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu contribución:

```sh
git checkout -b mi-contribucion
```

3. Realiza tus cambios y haz commit:

```sh
git commit -m "Mi contribución"
```

4. Sube tus cambios a tu repositorio remoto:

```sh
git push origin mi-contribucion
```

5. Abre un pull request en el repositorio original.

## Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE).

```

```
