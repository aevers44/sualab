#!/bin/bash

echo "start sualab-page"
pm2 start server.js --name "sualab-page"
