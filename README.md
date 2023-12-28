# Minecraft Bedrock Server GUI

This project provides a simple web-based GUI for managing a Minecraft Bedrock server. Users can manage and send commands to the server using the provided interface.

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Bedrock Dedicated server](https://www.minecraft.net/en-us/download/server/bedrock) place it in the ```server``` folder at the root of the project

## Installation

1. Clone this repository:

   - Clone the repository:

     ```git clone https://github.com/whyisthesheep/mcb-gui.git```

2. Navigate to the project directory:

   - Navigate to the project directory:

     ```cd mcb-gui```

3. Install dependencies:

   - Install dependencies:

     ```npm install```

4. Place your Minecraft Bedrock server files in the ```server``` folder at the root of the project.

## Usage

1. Start the application:

   - Start the application:

     ```node app.js```

   - The server will be running at ```http://localhost:3000```.

2. Open your web browser and go to ```http://localhost:3000``` to access the GUI.

3. Use the interface to manage your Minecraft Bedrock server:

   - **Manage Box:** Start and stop the server.
   - **Permissions Box:** Use the OP and DEOP sections to grant or revoke operator permissions.
   - **Commands Box:** Run give commands and custom commands on the server.

## Customization

- **Changing Port:** If you want to use a different port, modify the ```port``` variable in ```app.js```.

## Contributing

Feel free to contribute by opening issues or submitting pull requests. Your feedback and contributions are welcome!

## License

This project is licensed under the [Mozilla Public License](LICENSE).