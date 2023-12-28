const express = require('express');
const { spawn } = require('child_process');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let bedrockProcess;

app.post('/start', (req, res) => {
  if (!bedrockProcess) {
    bedrockProcess = spawn('server/bedrock_server.exe', { stdio: ['pipe', 'pipe', 'pipe', 'ipc'] });

    bedrockProcess.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    bedrockProcess.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    bedrockProcess.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
      bedrockProcess = null;
    });

    res.send('Bedrock server started.');
  } else {
    res.send('Bedrock server is already running.');
  }
});

app.post('/stop', (req, res) => {
  if (bedrockProcess) {
    bedrockProcess.stdin.write('stop\n');
    res.send('Sent "stop" command to Bedrock server.');
  } else {
    res.send('Bedrock server is not currently running.');
  }
});

app.post('/op', (req, res) => {
  const username = req.body.username;

  if (bedrockProcess && username) {
    const command = `op ${username}\n`;
    bedrockProcess.stdin.write(command);
    res.send(`Sent "${command.trim()}" command to Bedrock server.`);
  } else {
    res.status(400).send('Invalid request.');
  }
});

app.post('/deop', (req, res) => {
  const username = req.body.username;

  if (bedrockProcess && username) {
    const command = `deop ${username}\n`;
    bedrockProcess.stdin.write(command);
    res.send(`Sent "${command.trim()}" command to Bedrock server.`);
  } else {
    res.status(400).send('Invalid request.');
  }
});

app.post('/give', (req, res) => {
  const username = req.body.username;
  const item = req.body.item;

  if (bedrockProcess && username && item) {
    const command = `give ${username} ${item}\n`;
    bedrockProcess.stdin.write(command);
    res.send(`Sent "${command.trim()}" command to Bedrock server.`);
  } else {
    res.status(400).send('Invalid request.');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
