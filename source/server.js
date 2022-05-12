const express = require('express');
const dotenv = require('dotenv');
const createUserInterface = require('./interfaces/user-interface/user-create-interface');
const addressInterface = require('./interfaces/address-interface/address-create-interface');
const allUserInterface = require('./interfaces/user-interface/user-all-interface');
const updateUserInterface = require('./interfaces/user-interface/user-update-interface');
const allAddressInterface = require('./interfaces/address-interface/address-all-interface');
const updateAddressInterface = require('./interfaces/address-interface/address-update-interface');
dotenv.config();

const server = express();

server.use(express.json());
server.use(createUserInterface);
server.use(addressInterface);
server.use(allUserInterface);
server.use(updateUserInterface);
server.use(allAddressInterface);
server.use(updateAddressInterface);

server.listen(process.env.NODE_PORT, () => console.log("Server is running on port " + process.env.NODE_PORT));