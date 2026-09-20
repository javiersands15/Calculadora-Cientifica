# Calculadora Científica 🧮

Calculadora científica para Windows, desarrollada como proyecto personal para practicar programación, diseño de interfaces y distribución de aplicaciones de escritorio.

## Estado del proyecto

Versión actual: v1.0.0

La aplicación ya está disponible como instalador de Windows y como paquete ZIP para distribución manual.

## Características

- Operaciones básicas: suma, resta, multiplicación y división
- Operaciones científicas: raíz cuadrada, potencia, porcentaje, logaritmos y funciones trigonométricas
- Soporte para paréntesis y cálculos combinados
- Entrada por teclado y botón
- Interfaz adaptada para uso en escritorio
- Compatible con Windows 10 y superior
- Distribución en formato `.exe` y ZIP

## Descarga

Las versiones oficiales se publican en GitHub Releases.

Descarga la versión adecuada desde la release más reciente:

- `Calculadora Científica Setup 1.0.0.exe` — instalador recomendado
- `Calculadora-Cientifica-Windows.zip` — paquete comprimido con los archivos generados

## Instalación

### Opción 1: Instalador

1. Descarga `Calculadora Científica Setup 1.0.0.exe` desde la release oficial.
2. Abre el archivo.
3. Si Windows muestra una advertencia de SmartScreen, pulsa "Más información" y luego "Ejecutar de todas formas".
4. Sigue las instrucciones del instalador.
5. Abre la aplicación desde el menú de Inicio o el acceso directo del escritorio.

### Opción 2: ZIP

1. Descarga `Calculadora-Cientifica-Windows.zip`.
2. Extráelo en una carpeta.
3. Ejecuta el instalador incluido dentro del ZIP si quieres instalarlo.

## Tecnologías

- HTML
- CSS
- JavaScript
- Electron
- GitHub Actions para builds automáticos de Windows

## Estructura del proyecto

- `index.html` — interfaz principal
- `style.css` — estilos visuales
- `script.js` — lógica de la calculadora
- `electron-main.cjs` — configuración de Electron
- `package.json` — metadata y scripts de compilación
- `.github/workflows/build-windows.yml` — workflow para generar el instalador de Windows

## Licencia

Este proyecto está bajo la licencia MIT.

## Autor

- javiersands15

## Nota importante

Las aplicaciones generadas con Electron pueden mostrar una advertencia de seguridad de Windows al no estar firmadas con un certificado de editor reconocido. Esto no significa necesariamente que el archivo sea malicioso; si lo has descargado desde la release oficial de GitHub, puedes continuar con la instalación.
