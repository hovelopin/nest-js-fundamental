import { Injectable } from '@nestjs/common';
import { Board } from './board.model';

@Injectable()
export class BoardsService {
  // private를 사용한 이유는 다른 컴포넌트에서 수정을 불가능하기 위해서다.
  private boards: Board[] = [];

  // 배열에 있는 모든 값을 받을 수 있다.
  getAllBoards() {
    return this.boards;
  }
}
