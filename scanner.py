import os
import re

# Definimos algunas firmas básicas para el escaneo
SIGNATURES = {
    "EICAR_TEST_FILE": r"X5O!P%@AP\[4\\PZX54\(P\^\)7CC\)7}\$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!\$H\+H\*",
    "SUSPICIOUS_EVAL_B64": r"eval\(base64\.b64decode\(",
    "PHP_WEBSHELL_SYSTEM": r"<\?php\s+system\(\$_GET\[",
}

def scan_file(filepath):
    """
    Escanea un archivo en busca de firmas maliciosas.
    Retorna (True, threat_name) si detecta algo, o (False, None) si está limpio.
    """
    try:
        # Abrimos el archivo en modo texto, ignorando errores de codificación para archivos binarios
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
            for threat_name, pattern in SIGNATURES.items():
                if re.search(pattern, content, re.IGNORECASE):
                    return True, threat_name
    except Exception as e:
        # Si no podemos leer el archivo, lo reportamos como advertencia pero no como amenaza
        print(f"[-] No se pudo escanear el archivo {filepath}: {e}")
        pass
        
    return False, None

def scan_directory(directory):
    """
    Recorre un directorio y escanea todos sus archivos.
    Retorna una lista de archivos infectados: [(filepath, threat_name)]
    """
    infected_files = []
    
    for root, _, files in os.walk(directory):
        for file in files:
            filepath = os.path.join(root, file)
            # Evitar escanear el propio directorio .git
            if '.git' in filepath:
                continue
                
            is_infected, threat = scan_file(filepath)
            if is_infected:
                infected_files.append((filepath, threat))
                
    return infected_files
