import questions from "@/lib/questions";
import "@/styles/summary.scss";
import { motion } from "framer-motion";

type Props = {
  userAnswers: (string | null)[];
};

const Summary = ({ userAnswers }: Props) => {
  const skippedAns = userAnswers.filter(answer => answer === null);
  const correctAns = userAnswers.filter((answer, idx) => answer === questions[idx].answers[0]);

  const skippedAnsPer = Math.round((skippedAns.length / userAnswers.length) * 100);
  const correctAnsPer = Math.round((correctAns.length / userAnswers.length) * 100);
  const wrongAnsPer = 100 - skippedAnsPer - correctAnsPer;

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
          } else if (answer === questions[idx].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={idx}>
              <h3>{idx + 1}</h3>
              <p className="question">{questions[idx].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
