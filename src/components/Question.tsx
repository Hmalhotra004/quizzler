import { QContext } from "@/Context/QContext";
import { useContext, useState } from "react";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

type Props = {
  index: number;
  onSelectAns: (param: string | null) => void;
  onSkipAns: () => void;
};

type AnswerState = {
  selectedAns: string | null;
  isCorrect: boolean | null;
};

const Question = ({ index, onSelectAns, onSkipAns }: Props) => {
  const { questions } = useContext(QContext);
  const [answer, setAnswer] = useState<AnswerState>({
    selectedAns: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAns) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  const handleSelectAns = (answer: string | null) => {
    setAnswer({
      selectedAns: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAns: answer,
        isCorrect: questions[index].correct_answer === answer,
      });

      setTimeout(() => {
        onSelectAns(answer);
      }, 2000);
    }, 1000);
  };

  let answerState = "";

  if (answer.selectedAns && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAns) {
    answerState = "answered";
  }

  const correctAns = questions[index].correct_answer;

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAns === "" && onSkipAns}
        mode={answerState}
      />
      <h2>{questions[index].question}</h2>
      <Answers
        answers={questions[index].incorrect_answers.concat(questions[index].correct_answer)}
        selectedAns={answer.selectedAns}
        answerState={answerState}
        onSelect={handleSelectAns}
        correctAns={correctAns}
      />
    </div>
  );
};

export default Question;
