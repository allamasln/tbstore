#!/bin/sh

echo "Waiting for MongoDB to start..."
./wait-for-it db:27017

echo "Migrating the databse..."
yarn run db:up

echo "Starting the server..."
yarn start