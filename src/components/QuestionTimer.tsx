"use client";
import { useEffect, useState } from "react";

type Props = {
  timeout: number;
  onTimeout: () => void;
};

const QuestionTimer = ({ timeout, onTimeout }: Props) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(() => onTimeout, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(pv => pv - 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
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
