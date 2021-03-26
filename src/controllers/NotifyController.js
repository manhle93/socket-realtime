const SOCKET = require('../config/socket')

class NotifyController {
    sendData = (req, res, next) => {
        const data = req.body.data
        SOCKET.io.sockets.emit("send", data);
        return  res.send('Gui du lieu thanh cong')
    }
}

module.exports = new NotifyController()