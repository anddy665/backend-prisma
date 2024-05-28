# Usar una imagen base de Node.js
FROM node:latest

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto del código
COPY . .

# Instalar Prisma CLI
RUN npm install prisma @prisma/client

# Exponer el puerto
EXPOSE 4000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "dev"]
