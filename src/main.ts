import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { IoAdapter } from '@nestjs/platform-socket.io';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 // Configure CORS
 app.enableCors({
  origin: 'http://localhost:8100',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  credentials: true,
});

// Use IoAdapter for WebSockets
app.useWebSocketAdapter(new IoAdapter(app));
  await app.listen(3000);
}
bootstrap();
