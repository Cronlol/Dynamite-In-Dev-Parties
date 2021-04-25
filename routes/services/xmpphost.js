const express = require("express")
const app = express.Router()

app.all("/host/clients", (req, res) => {
    if (req.method == "POST") {
        const data = JSON.parse(req.body);
        if(data.bIsConnectedToParty != "DELETE") {
            xmppClients[data.id] = {
                id: data.id,
                client: data
            };
        }
        if(data.bIsConnectedToParty == "DELETE") {
            if (xmppClients[client.id]) delete xmppClients[client.id]
        }
    }
    if (req.method == "GET") {
        res.json(xmppClients)
    }
})

module.exports = app
