import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"

async function start() {
    const app = await NestFactory.create(AppModule)
    app.enableCors();
    await app.listen(8000, () => console.log(`Server started`))
}

start()