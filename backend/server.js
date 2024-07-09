const app = require("./app")
const dotenv = require('dotenv')

dotenv.config();



const PORT = 3000 || process.env.PORT

app.listen(PORT, () => {
    console.log(`The server is running on the port ${PORT}`)
})