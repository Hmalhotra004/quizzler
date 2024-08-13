"use client";
import questions from "@/lib/questions";
import styles from "@/styles/quiz.module.scss";
import { useState } from "react";

const Quiz = () => {
  const [userAns, setUserAns] = useState([0]);
  const activeQuestionIndex = userAns.length;

  const handleSelectAnswer = selectedAns => {
    setUserAns(pv => {
      return [...pv, selectedAns];
    });
  };

  return (
    <>
      <section id={styles.quiz}>
        <div id={styles.question}>
          <h2>{questions[activeQuestionIndex].text}</h2>
          <ul id={styles.answers}>
            {questions[activeQuestionIndex].answers.map(answer => (
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
