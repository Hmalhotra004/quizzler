"use client";
import Form from "@/components/Form";
import Header from "@/components/Header";
import Quiz from "@/components/Quiz";
import Context from "@/Context/Context";
import "@/styles/form.scss";
import { useState } from "react";

const Home = () => {
  const [quizOn, setQuizOn] = useState(false);
  return (
    <Context>
      <Header />
      {!quizOn ? <Form isStart={setQuizOn} /> : <Quiz />}
    </Context>
  );
};

export default Home;
