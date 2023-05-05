import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

@Module({
  // 명령어를 입력하면 Module에 Controller를 연결시켜준다.
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
