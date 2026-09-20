import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
    appId: "com.javiersands15.calculadoracientifica",
    appName: "Calculadora Científica",
    webDir: ".",
    bundledWebRuntime: false,
    android: {
        backgroundColor: "#f3f4f6"
    }
};

export default config;
