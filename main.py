import os
import sys
from scanner import scan_directory

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
    
    # Ejecutar el escáner
    infected_files = scan_directory(workspace)
    
    if infected_files:
        print("\n[!] AMENAZAS DETECTADAS [!]")
        print("--------------------------------------------------")
        for filepath, threat in infected_files:
            # Imprimir la ruta relativa para facilitar la lectura
            rel_path = os.path.relpath(filepath, workspace)
            print(f"[X] {rel_path}")
            print(f"   -> Firma identificada: {threat}")
        
        print("\n==================================================")
        print(f"[X] RESULTADO: FALLO. {len(infected_files)} archivo(s) infectado(s) encontrado(s).")
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
