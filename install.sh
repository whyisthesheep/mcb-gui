#!/bin/bash

echo "Downloading Minecraft Bedrock Server..."
wget -O bedrock-server.zip https://minecraft.azureedge.net/bin-linux/bedrock-server-1.20.51.01.zip
echo "Creating server folder..."
mkdir server
echo "Extracting files to server folder..."
unzip bedrock-server.zip -d server
echo "Cleaning up..."
rm bedrock-server.zip
echo "Minecraft Bedrock Server installation complete."