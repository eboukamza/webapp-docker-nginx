const app = require('./server.js')

const port = process.env.PORT || 9000

console.log('env var hello', process.env.HELLO)

app.listen(port, () => console.log(`Express server started in ${app.get('env')} on http://localhost:${port}`))
