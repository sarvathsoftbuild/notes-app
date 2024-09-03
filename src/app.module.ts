import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NotesModule } from './notes/notes.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://sarvathsoftbuild:8EjXVXnWACHm1Tcl@cluster0.zdlzo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    ),
    NotesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
