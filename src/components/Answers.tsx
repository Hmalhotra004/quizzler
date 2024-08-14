import { useRef } from "react";

type Props = {
  answers: string[];
  selectedAns: string | null;
  answerState: string;
  onSelect: (param: string | null) => void;
};

const Answers = ({ answers, selectedAns, answerState, onSelect }: Props) => {
  const shuffledAns = useRef<(string | null)[]>();

  if (!shuffledAns.current) {
    shuffledAns.current = [...answers];
    shuffledAns.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAns.current.map(answer => {
        const isSelected = selectedAns === answer;
        let cssClass = "";
        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if ((answerState === "correct" || answerState === "wrong") && isSelected) {
          cssClass = answerState;
        }

        return (
          <li
            key={answer}
            className="answer"
          >
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
