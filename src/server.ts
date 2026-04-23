export {app} from "./app.js" ;
export {env} from "./config/env.js"
import { app } from "./app.js";
import {connectDb} from "./config/db.js"
import { env } from "./config/env.js";


const bootstrap = async () => {
    try {
        await connectDb();
        app.listen(env.port, '0.0.0.0', () => {
            console.log(`ESCUCHANDO POR EL PT ${env.port}`);
        });
    } catch (error) {
        console.error("ERROR AL INICIAR EL SERVIDOR:", error);
    }
};

bootstrap();

