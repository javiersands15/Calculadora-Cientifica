const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
    const window = new BrowserWindow({
        width: 900,
        height: 700,
        minWidth: 360,
        minHeight: 600,
        backgroundColor: "#f3f4f6",
        autoHideMenuBar: true,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false
        }
    });

    window.loadFile(path.join(__dirname, "index.html"));
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
