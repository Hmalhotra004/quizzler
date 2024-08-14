"use client";
import questions from "@/lib/questions";
import "@/styles/quiz.scss";
import "@/styles/summary.scss";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

const Quiz = () => {
  const [userAns, setUserAns] = useState<(string | null)[]>([]);
  const [ansState, setAnsState] = useState("");

  const activeQuestionIndex = ansState === "" ? userAns.length : userAns.length - 1;
  const quizIsComplete = activeQuestionIndex === questions.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAns: string | null) {
      setAnsState("answered");
      setUserAns(pv => {
        return [...pv, selectedAns];
      });

      setTimeout(() => {
        if (selectedAns === questions[activeQuestionIndex].answers[0]) {
          setAnsState("correct");
        } else {
          setAnsState("wrong");
        }

        setTimeout(() => {
          setAnsState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAns = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

  if (quizIsComplete) {
    return (
      <div id="summary">
        <motion.img
          src="/quiz-complete.png"
          alt="Trophy Icon"
        />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  return (
    <>
      <section id="quiz">
        <div id="question">
          <QuestionTimer
            key={activeQuestionIndex}
            timeout={5000}
            onTimeout={handleSkipAns}
          />
          <h2>{questions[activeQuestionIndex].text}</h2>
          <Answers
            key={activeQuestionIndex}
            answers={questions[activeQuestionIndex].answers}
            selectedAns={userAns[userAns.length - 1]}
            answerState={ansState}
            onSelect={handleSelectAnswer}
          />
        </div>
      </section>
    </>
  );
};

export default Quiz;
