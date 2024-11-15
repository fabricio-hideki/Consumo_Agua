import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsumoAguaModule } from './consumo_agua/consumo_agua.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ConsumoAguaModule, MongooseModule.forRoot('mongodb+srv://<fabricio>:<syD3WP4qTZTn67p>@cluster0.b5uqv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
