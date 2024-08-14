"use client";
import questions from "@/lib/questions";
import styles from "@/styles/quiz.module.scss";
import stylesSum from "@/styles/summary.module.scss";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import QuestionTimer from "./QuestionTimer";

const Quiz = () => {
  const [userAns, setUserAns] = useState<(number | null)[]>([]);

  const activeQuestionIndex = userAns.length;
  const quizIsComplete = activeQuestionIndex === questions.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAns: string | null) {
    const selectedAnsInt = selectedAns !== null ? parseInt(selectedAns) : null;
    console.log("yo");
    setUserAns(pv => {
      return [...pv, selectedAnsInt];
    });
    console.log("ho");
  }, []);

  const handleSkipAns = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

  if (quizIsComplete) {
    return (
      <div id={stylesSum.summary}>
        <motion.img
          src="/quiz-complete.png"
          alt="Trophy Icon"
        />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  const shuffledAns = [...questions[activeQuestionIndex].answers];
  shuffledAns.sort(() => Math.random() - 0.5);

  return (
    <>
      <section id={styles.quiz}>
        <div id={styles.question}>
          <QuestionTimer
            key={activeQuestionIndex}
            timeout={5000}
            onTimeout={handleSkipAns}
          />
          <h2>{questions[activeQuestionIndex].text}</h2>
          <ul id={styles.answers}>
            {shuffledAns.map(answer => (
              <li
                key={answer}
                className={styles.answer}
              >
                <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Quiz;
