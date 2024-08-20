// import questions from "@/lib/questions";
import { QContext } from "@/Context/QContext";
import "@/styles/summary.scss";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useContext } from "react";

type Props = {
  userAnswers: (string | null)[];
  setQuiz: Dispatch<SetStateAction<boolean>>;
};

const Summary = ({ userAnswers, setQuiz }: Props) => {
  const { questions } = useContext(QContext);
  const skippedAns = userAnswers.filter(answer => answer === null);
  const correctAns = userAnswers.filter((answer, idx) => answer === questions[idx].correct_answer);

  const skippedAnsPer = Math.round((skippedAns.length / userAnswers.length) * 100);
  const correctAnsPer = Math.round((correctAns.length / userAnswers.length) * 100);
  const wrongAnsPer = 100 - skippedAnsPer - correctAnsPer;

  const handleQuizChange = () => {
    setQuiz(false);
  };

  return (
    <div id="summary">
      <motion.img
        src="/quiz-complete.png"
        alt="Trophy Icon"
      />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnsPer}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnsPer}%</span>
          <span className="text">Answered Correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnsPer}%</span>
          <span className="text">Answered Incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, idx) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === questions[idx].correct_answer) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={idx}>
              <h3>{idx + 1}</h3>
              <p className="question">{questions[idx].question}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
      <button
        onClick={handleQuizChange}
        id="again-btn"
      >
        Another Quiz
      </button>
    </div>
  );
};

export default Summary;
