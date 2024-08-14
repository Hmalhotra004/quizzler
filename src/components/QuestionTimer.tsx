"use client";

import { useEffect, useState } from "react";

type Props = {
  timeout: number;
  onTimeout: () => void;
};

const QuestionTimer = ({ timeout, onTimeout }: Props) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    setTimeout(() => onTimeout, timeout);
  }, [timeout, onTimeout]);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime(pv => pv - 10);
    }, 10);
  }, []);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
    />
  );
};

export default QuestionTimer;
