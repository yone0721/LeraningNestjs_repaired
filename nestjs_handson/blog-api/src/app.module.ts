import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './feature/posts/posts.module';
import { PostsController } from './feature/posts/posts.controller';
import { PostsService } from './feature/posts/posts.service';

@Module({
  imports: [PostsModule],
  controllers: [AppController, PostsController],
  providers: [AppService,PostsService],
})
export class AppModule {}
