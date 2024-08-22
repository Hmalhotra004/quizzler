import DOMPurify from "dompurify";
import { useRef } from "react";

type Props = {
  answers: string[];
  selectedAns: string | null;
  answerState: string;
  onSelect: (param: string | null) => void;
  correctAns: string;
};

const Answers = ({ answers, selectedAns, answerState, onSelect, correctAns }: Props) => {
  const shuffledAns = useRef<string[]>();

  if (!shuffledAns.current) {
    shuffledAns.current = [...answers];
    shuffledAns.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAns.current.map(answer => {
        const isSelected = selectedAns === answer;
        const isCorrect = answer === correctAns;
        let cssClass = "";
        let correctAnsClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (answerState === "correct" && isSelected) {
          cssClass = "correct";
        } else if (answerState === "wrong" && isSelected) {
          cssClass = "wrong";
        }

        // Highlight the correct answer in green if the answer state is "wrong"
        if (answerState === "wrong" && isCorrect) {
          correctAnsClass = "correct";
        }
        return (
          <li
            key={answer}
            className="answer"
          >
            <button
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(answer) }}
              onClick={() => onSelect(answer)}
              className={`${cssClass} ${correctAnsClass} `}
              disabled={answerState !== ""}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
