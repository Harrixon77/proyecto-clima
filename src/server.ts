export {app} from "./app.js" ;
export {env} from "./config/env.js"
import { app } from "./app.js";
import {connectDb} from "./config/db.js"
import { env } from "./config/env.js";


const bootstrap = async () => (
    await connectDb(),

app.listen (env.port,() => {
    console.log(`ESCUHANDO POR EL PT ${env.port}`);
})
)
bootstrap();

