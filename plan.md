# 🛠️ Plan de Reestructuración: Antivirus Local a GitHub Action (DevSecOps)

Este documento define la hoja de ruta arquitectónica para transformar el motor del antivirus de escritorio en una herramienta automatizada de DevSecOps, ejecutada mediante contenedores dentro de la infraestructura de GitHub Actions.

## 🎯 Objetivo Arquitectónico
Desacoplar la lógica de detección de malware de cualquier interfaz de usuario interactiva y empaquetarla en un microservicio "mudo" basado en Docker que responda exclusivamente mediante **Exit Codes** del sistema operativo.

---

## 📍 Fase 1: Limpieza del Core (Clean Architecture)
El motor debe funcionar de manera completamente independiente. No debe haber ningún `print()` pidiendo datos al usuario, ni ventanas, ni menús interactivos.

* [ ] **Aislar el motor de escaneo:** Separar las funciones que realizan el análisis de firmas o heurística en un módulo puro (ej. `scanner.py`).
* [ ] **Eliminar dependencias gráficas:** Purgar cualquier librería de interfaz (como Tkinter o PyQt) o menús por consola (`input()`).
* [ ] **Estandarizar entradas:** El motor principal ahora debe recibir únicamente la **ruta absoluta de un directorio** (la carpeta del repositorio) como argumento principal.

## 📍 Fase 2: El Controlador de Acción (`main.py`)
Crear el script que servirá como puente entre el motor del antivirus aislado y el entorno de GitHub.

* [ ] **Capturar variables de entorno:** Leer la variable `GITHUB_WORKSPACE` para saber en qué carpeta GitHub ha descargado el código a analizar.
* [ ] **Implementar el recorrido de archivos:** Escribir la lógica para iterar de manera recursiva sobre todos los archivos del directorio montado, pasándolos uno a uno al motor de escaneo.
* [ ] **Integrar Exit Codes (Crucial):**
    * Si se detectan amenazas: Ejecutar `sys.exit(1)` (Falla el pipeline).
    * Si el código está limpio: Ejecutar `sys.exit(0)` (Pasa el pipeline).
* [ ] **Formato de salida (Logs):** Configurar `print()` estructurados para que, al revisar la consola de GitHub Actions, los desarrolladores vean claramente qué archivo falló y por qué.

## 📍 Fase 3: Contenerización (Infraestructura Inmutable)
Garantizar que el antivirus se ejecute siempre en el mismo entorno de Linux (como Debian o Ubuntu) sin importar dónde se llame la Acción.

* [ ] **Crear `requirements.txt`:** Listar únicamente las dependencias estrictamente necesarias para el escaneo.
* [ ] **Redactar el `Dockerfile`:**
    * Definir una imagen base ligera de Python (`python:3.10-slim`).
    * Establecer el directorio de trabajo (`WORKDIR /app`).
    * Copiar el código refactorizado al contenedor.
    * Instalar las dependencias.
    * Configurar el `ENTRYPOINT` para ejecutar el script puente (`main.py`).

## 📍 Fase 4: Definición de la Acción de GitHub

Crear el archivo de metadatos que GitHub necesita para reconocer el repositorio como una herramienta funcional.

* [ ] **Crear `action.yml` en la raíz del proyecto:**
    * Definir el `name`, `description` y `author`.
    * Configurar la clave `runs` indicando `using: 'docker'` e `image: 'Dockerfile'`.

## 📍 Fase 5: Despliegue y Validación
Probar el funcionamiento de la Acción simulando el flujo de trabajo de un desarrollador.

* [ ] **Publicar el repositorio:** Subir todo el código refactorizado, el Dockerfile y el `action.yml` a un repositorio público en GitHub.
* [ ] **Documentar el uso (`README.md`):** Escribir las instrucciones explicando cómo otros usuarios pueden copiar y pegar tu Action en sus propios archivos YAML para proteger sus repositorios.
* [ ] **Prueba de fuego (El Test Final):**
    * Crear un segundo repositorio público "de prueba".
    * Generar un workflow en `.github/workflows/test.yml` que llame a la Action recién creada.
    * Subir un archivo inofensivo para validar que el pipeline pase en verde.
    * Subir un archivo simulando una firma maliciosa para comprobar que la Action detenga el merge (rojo).