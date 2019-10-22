const express = require('express')
const router = express.Router()
const contactsRoutes = require('./contacts/contacts');
const usersRoutes = require('./users/users')
const authRoutes = require('./users/auth')

module.exports = {
    contacts: contactsRoutes,
    users: usersRoutes,
    auth: authRoutes,
    router: router
}