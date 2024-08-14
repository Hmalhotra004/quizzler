"use client";
import questions from "@/lib/questions";
import styles from "@/styles/quiz.module.scss";
import stylesSum from "@/styles/summary.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";

const Quiz = () => {
  const [userAns, setUserAns] = useState(["0"]);

  const activeQuestionIndex = userAns.length;

  const quizIsComplete = activeQuestionIndex === questions.length;

  const handleSelectAnswer = (selectedAns: string) => {
    // selectedAns shud be of type number
    const selectAnsInt = parseInt(selectedAns); //change it
    setUserAns(pv => {
      return [...pv, selectedAns];
    });
  };

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
