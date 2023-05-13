import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoard() {
    return this.boardsService.getAllBoards();
  }

  // NestJS에서 클라이언트가 보낸 body값을 확인하기 위해서는 아래와 같인 @Body() body 해주면 된다.
  // 하나만 갖고 싶을때는 @Body('title') title 이렇게 가져올 수 있다.
  @Post('/')
  createBoard(
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    return this.boardsService.creatBoard(title, description);
  }
}
