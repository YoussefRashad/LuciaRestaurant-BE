
// const FE_URL = "http://localhost:3000"
// const DB_URL = "mongodb://127.0.0.1:27017/LuciaResturent"



const FE_URL = "https://lucia-restaurant.netlify.app"
const DB_URL = "mongodb+srv://<userName>:<password>@cluster0.p5jcz.mongodb.net/<DBName>?retryWrites=true&w=majority".replace("<password>", process.env.DB_PASSWORD).replace('<userName>', process.env.DB_USERNAME).replace('<DBName>', process.env.DB_NAME)
module.exports = {
    FE_URL,
    DB_URL
}
