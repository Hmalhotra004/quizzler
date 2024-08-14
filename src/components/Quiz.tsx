"use client";
import questions from "@/lib/questions";
import "@/styles/quiz.scss";
import "@/styles/summary.scss";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import Question from "./Question";

const Quiz = () => {
  const [userAns, setUserAns] = useState<(string | null)[]>([]);

  const activeQuestionIndex = userAns.length;
  const quizIsComplete = activeQuestionIndex === questions.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAns: string | null) {
    setUserAns(pv => {
      return [...pv, selectedAns];
    });
  }, []);

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
        <Question
          key={activeQuestionIndex}
          index={activeQuestionIndex}
          onSelectAns={handleSelectAnswer}
          onSkipAns={handleSkipAns}
        />
      </section>
    </>
  );
};

export default Quiz;
