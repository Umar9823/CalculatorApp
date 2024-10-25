const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 400, // Width of the calculator
        height: 600, // Height of the calculator
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false, // Needed for using nodeIntegration
        },
    });

    // Load the embedded HTML content
    win.loadURL('data:text/html;charset=utf-8,' + encodeURIComponent(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Calculator App</title>
            <style>
                body {
                    background-color: #f0f0f0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    font-family: Arial, sans-serif;
                    margin: 0;
                }
                #calculator {
                    background-color: #fff;
                    border-radius: 10px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                    padding: 20px;
                    width: 320px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                #result {
                    width: 100%;
                    height: 50px;
                    font-size: 24px;
                    text-align: right;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    margin-bottom: 20px;
                    padding: 10px;
                    background-color: #f9f9f9;
                }
                .button-row {
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                }
                button {
                    width: 70px;
                    height: 70px;
                    font-size: 20px;
                    margin: 5px;
                    cursor: pointer;
                    border: none;
                    border-radius: 5px;
                    background-color: #007BFF;
                    color: white;
                    transition: background-color 0.3s;
                }
                button:active {
                    transform: scale(0.95);
                }
                button:hover {
                    background-color: #0056b3;
                }
                button.operator {
                    background-color: #f39c12;
                }
                button.operator:hover {
                    background-color: #e67e22;
                }
                button.equal {
                    background-color: #28a745;
                    width: calc(100% - 20px); /* Make the equal button full width */
                }
                button.equal:hover {
                    background-color: #218838;
                }
                button.clear {
                    background-color: #dc3545;
                }
                button.clear:hover {
                    background-color: #c82333;
                }
            </style>
        </head>
        <body>
            <div id="calculator">
                <input type="text" id="result" disabled />
                <div class="button-row">
                    <button class="clear" onclick="clearResult()">C</button>
                    <button onclick="appendToResult('7')">7</button>
                    <button onclick="appendToResult('8')">8</button>
                    <button onclick="appendToResult('9')">9</button>
                </div>
                <div class="button-row">
                    <button onclick="appendToResult('4')">4</button>
                    <button onclick="appendToResult('5')">5</button>
                    <button onclick="appendToResult('6')">6</button>
                    <button class="operator" onclick="appendToResult('*')">*</button>
                </div>
                <div class="button-row">
                    <button onclick="appendToResult('1')">1</button>
                    <button onclick="appendToResult('2')">2</button>
                    <button onclick="appendToResult('3')">3</button>
                    <button class="operator" onclick="appendToResult('/')">/</button>
                </div>
                <div class="button-row">
                    <button onclick="appendToResult('0')">0</button>
                    <button class="equal" onclick="calculateResult()">=</button>
                    <button class="operator" onclick="appendToResult('+')">+</button>
                    <button class="operator" onclick="appendToResult('-')">-</button>
                </div>
            </div>

            <script>
                function clearResult() {
                    document.getElementById('result').value = '';
                }

                function appendToResult(value) {
                    document.getElementById('result').value += value;
                }

                function calculateResult() {
                    const resultField = document.getElementById('result');
                    try {
                        resultField.value = eval(resultField.value); // Calculate the result
                    } catch (error) {
                        resultField.value = 'Error';
                    }
                }

                // Handle keyboard input
                document.addEventListener('keydown', function(event) {
                    const key = event.key;
                    const operators = ['+', '-', '*', '/'];

                    if (!isNaN(key)) {
                        appendToResult(key); // If the key is a number
                    } else if (operators.includes(key)) {
                        appendToResult(key); // If the key is an operator
                    } else if (key === 'Enter') {
                        calculateResult(); // If the key is Enter, calculate the result
                    } else if (key === 'Escape') {
                        clearResult(); // If the key is Escape, clear the result
                    }
                });
            </script>
        </body>
        </html>
    `));
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
