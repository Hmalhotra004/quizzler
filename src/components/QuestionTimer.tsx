"use client";
import { useEffect, useState } from "react";

type Props = {
  timeout: number;
  onTimeout: false | (() => void);
  mode: string;
};

const QuestionTimer = ({ timeout, onTimeout, mode }: Props) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const checkTimeout = () => {
      if (onTimeout) {
        onTimeout();
      }
    };
    const timer = setTimeout(checkTimeout, timeout);
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
      className={mode}
    />
  );
};

export default QuestionTimer;
