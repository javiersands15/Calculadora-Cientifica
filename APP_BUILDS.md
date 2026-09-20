# Convertir la calculadora en aplicaciones de escritorio y Android

## Windows

Requisitos: Node.js 20 o superior.

```bash
npm install
npm run start
npm run desktop:build
```

Los archivos generados aparecen en `release/`:

- `Calculadora Científica Setup 1.0.0.exe`: instalador de Windows.
- `Calculadora Científica 1.0.0.exe`: versión portable.

## Android

Requisitos:

- Android Studio.
- Android SDK y herramientas de compilación.
- Java 17.

Instala las dependencias y crea el proyecto Android:

```bash
npm install
npm run android:add
npm run android:sync
npm run android:open
```

Desde Android Studio puedes ejecutar la app en un dispositivo o emulador. Para generar un APK:

```bash
npm run android:build
```

El APK resultante se genera dentro del proyecto Android, normalmente en:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

Para publicar en Google Play se debe generar un **AAB firmado** desde Android Studio. No compartas el archivo de claves de firma ni sus contraseñas.

## Nota

La PWA original continúa funcionando en GitHub Pages. Electron crea la versión de Windows y Capacitor crea la versión Android reutilizando los mismos archivos HTML, CSS y JavaScript.
