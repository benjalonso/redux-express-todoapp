const app = require("./expressConfig.js");
const sequelize = require("./database/database");
const PORT = require('../config.js')

async function main() {
    try {
        await sequelize.sync({force: false});
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.log("Unable to connect", error);

    }
}

main()