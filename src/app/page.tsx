"use client";
import Form from "@/components/Form";
import Header from "@/components/Header";
import Quiz from "@/components/Quiz";
import "@/styles/form.scss";
import { useState } from "react";

const Home = () => {
  const [quizOn, setQuizOn] = useState(false);
  return (
    <>
      <Header />
      {!quizOn ? <Form isStart={setQuizOn}/> : <Quiz />}
    </>
  );
};

export default Home;
