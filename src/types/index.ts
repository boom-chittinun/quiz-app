export interface Question {
  id: number;
  text: string;
  answers: string[];
  correctAnswer: number;
}

export interface LeaderBoardEntry {
  name: string;
  score: number;
}
