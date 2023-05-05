import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';

@Module({
  // 명령어를 통해서 Board 모듈을 넣으면 알아서 import가 App모듈에 들어왔다.
  imports: [BoardsModule],
})
export class AppModule {}
