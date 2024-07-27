document.getElementById('launchButton').addEventListener('click', () => {
    const logOutput = document.getElementById('logOutput');
    logOutput.innerHTML = 'Starting Minecraft...\n';

    // Simulate loading process
    setTimeout(() => {
        logOutput.innerHTML += 'Loading JAR file...\n';
        fetchJarFile();
    }, 1000);
});

function fetchJarFile() {
    fetch('assets/minecraft.jar')
        .then(response => {
            if (response.ok) {
                return response.blob();
            } else {
                throw new Error('Failed to load JAR file');
            }
        })
        .then(blob => {
            // Simulate processing the JAR file
            setTimeout(() => {
                const logOutput = document.getElementById('logOutput');
                logOutput.innerHTML += 'Extracting files...\n';
                simulateJarProcessing(blob);
            }, 1000);
        })
        .catch(error => {
            const logOutput = document.getElementById('logOutput');
            logOutput.innerHTML += `${error.message}\n`;
        });
}

function simulateJarProcessing(blob) {
    // This is just a simulation of processing the JAR file
    setTimeout(() => {
        const logOutput = document.getElementById('logOutput');
        logOutput.innerHTML += 'Initializing game...\n';
        setTimeout(() => {
            logOutput.innerHTML += 'Game started successfully!\n';
            openGameWindow();
        }, 1000);
    }, 2000);
}

function openGameWindow() {
    const gameWindow = window.open('', '', 'width=800,height=600');
    if (gameWindow) {
        gameWindow.document.write(`
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Minecraft Game</title>
                <style>
                    body {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 100vh;
                        margin: 0;
                        background-color: #1e1e1e;
                        color: white;
                        font-family: Arial, sans-serif;
                    }
                </style>
            </head>
            <body>
                <h1>Welcome to Minecraft!</h1>
                <script>
                    // Add game initialization logic here
                </script>
            </body>
            </html>
        `);
        gameWindow.document.close();
    } else {
        alert('Failed to open game window. Please disable your pop-up blocker and try again.');
    }
}
