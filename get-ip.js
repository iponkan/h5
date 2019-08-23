const os = require('os');
let ip = '0.0.0.0';
const networkInterfaces = os.networkInterfaces();
out:
    for (const i in networkInterfaces) {
        for (const j in networkInterfaces[i]) {
            const val = networkInterfaces[i][j];
            if (val.family === 'IPv4' && val.address !== '127.0.0.1') {
                ip = val.address;
                break out
            }
        }
    }
module.exports = ip;