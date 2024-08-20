import React, { createContext, useState } from "react";

export const QContext = createContext({
  questions: [
    {
      type: "",
      difficulty: "",
      category: "",
      question: "",
      correct_answer: "",
      incorrect_answers: ["", "", ""],
    },
  ],
  setQuestion: (param: []) => {},
});

const QContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [questions, setQuestions] = useState([]);

  const setQuestion = (param: []) => {
    setQuestions(param);
  };

  const global = {
    questions,
    setQuestion,
  };

  return <QContext.Provider value={global}>{children}</QContext.Provider>;
};

export default QContextProvider;
