@echo off
echo Downloading Minecraft Bedrock Server...
curl -o bedrock-server.zip https://minecraft.azureedge.net/bin-win/bedrock-server-1.20.51.01.zip

echo Creating server folder...
mkdir server

echo Extracting files to server folder...
tar -xf bedrock-server.zip -C server

echo Cleaning up...
del bedrock-server.zip

echo Minecraft Bedrock Server installation complete.
