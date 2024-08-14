"use client";
import questions from "@/lib/questions";
import "@/styles/quiz.scss";

import { useCallback, useState } from "react";
import Question from "./Question";
import Summary from "./Summary";

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
    return <Summary userAnswers={userAns} />;
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
