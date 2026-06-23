# DevSecOps Antivirus Action 🛡️

![Version](https://img.shields.io/badge/version-1.0-blue)
![Docker](https://img.shields.io/badge/runs--on-docker-green)

Esta GitHub Action proporciona un análisis automatizado (Antivirus) integrado directamente en tu pipeline de Integración Continua (CI). Escanea los archivos de tu repositorio en busca de firmas maliciosas y patrones sospechosos. Si se detectan amenazas, el pipeline fallará automáticamente, previniendo que código malicioso sea integrado o desplegado.

## 🚀 Uso

Para utilizar esta Action en tu repositorio, crea un archivo YAML en tu directorio `.github/workflows/` (por ejemplo, `.github/workflows/antivirus.yml`) y añade el siguiente contenido:

```yaml
name: Escaneo Antivirus

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  scan:
    runs-on: ubuntu-latest
    steps:
      # 1. Hacer checkout del código
      - name: Checkout del repositorio
        uses: actions/checkout@v3

      # 2. Ejecutar el Antivirus
      - name: Ejecutar DevSecOps Antivirus
        uses: UPT-FAING-EPIS/proyecto-si784-2026-i-u2-antivirus_cds@main
```

## 🛠️ Cómo Funciona

1. **Clean Architecture:** El motor de escaneo está completamente aislado de interfaces gráficas y construido en Python.
2. **Contenerización:** Se ejecuta de forma segura e inmutable dentro de un contenedor Docker (`python:3.10-slim`).
3. **Exit Codes:** Responde de forma nativa a GitHub Actions. Si detecta una amenaza, retorna `Exit Code 1` (fallando el job). Si está limpio, retorna `Exit Code 0` (pasando el job).

## 📝 Firmas Soportadas

Actualmente, el motor de análisis heurístico y de firmas (`scanner.py`) detecta:
- Archivos de prueba EICAR
- Patrones de ofuscación comunes (ej: `eval(base64.b64decode(...))`)
- Posibles WebShells (ej: `<?php system($_GET[...`)

Puedes extender el archivo `scanner.py` para añadir expresiones regulares o integrarlo con librerías externas como Yara.
