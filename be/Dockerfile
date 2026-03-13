# Usamos una imagen base de Python con la versión 3.12.9
FROM python:3.12.9-slim

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos los archivos del proyecto al contenedor
COPY . /app

# Instalamos las dependencias de Python
RUN pip install --upgrade pip && \
    pip install -r requirements.txt

# Exponemos el puerto donde correrá la app
EXPOSE 8080

# Establecemos la variable de entorno para que Flask corra en el puerto 8080
ENV PORT 8080

# Comando para ejecutar la aplicación
#CMD ["flask", "run", "--host=0.0.0.0", "--port=8080"]
CMD ["gunicorn", "-b", "0.0.0.0:8080", "app:app"]

