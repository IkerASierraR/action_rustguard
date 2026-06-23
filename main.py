import os
import sys
from scanner import analizar_archivo

def main():
    # Capturar la variable de entorno de GitHub Actions
    workspace = os.environ.get('GITHUB_WORKSPACE')
    
    if not workspace:
        print("[-] GITHUB_WORKSPACE no está definido. Usando el directorio actual por defecto.")
        workspace = os.getcwd()
        
    print(f"==================================================")
    print(f"[!] DevSecOps Antivirus Scanner Iniciado")
    print(f"==================================================")
    print(f"[+] Directorio objetivo: {workspace}\n")
    
    # Recorrer el directorio y usar analizar_archivo
    archivos_infectados = []
    for root, _, files in os.walk(workspace):
        for file in files:
            filepath = os.path.join(root, file)
            # Evitar escanear el propio directorio .git y README.md
            if '.git' in filepath or file == 'README.md':
                continue
                
            if analizar_archivo(filepath):
                archivos_infectados.append(filepath)
    
    if archivos_infectados:
        print("\n🚨 [AMENAZA DETECTADA] 🚨")
        print("--------------------------------------------------")
        for filepath in archivos_infectados:
            # Imprimir la ruta relativa para facilitar la lectura
            rel_path = os.path.relpath(filepath, workspace)
            print(f"[X] {rel_path}")
        
        print("\n==================================================")
        print(f"[X] RESULTADO: FALLO. {len(archivos_infectados)} archivo(s) infectado(s) encontrado(s).")
        print("==================================================")
        # Exit Code 1 para fallar el pipeline
        sys.exit(1)
    else:
        print("\n==================================================")
        print("[+] RESULTADO: LIMPIO. No se detectaron amenazas.")
        print("==================================================")
        # Exit Code 0 para pasar el pipeline
        sys.exit(0)

if __name__ == "__main__":
    main()
