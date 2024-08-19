"use client";
import { QContext } from "@/Context/QContext";
import "@/styles/form.scss";
import axios from "axios";
import React, { Dispatch, SetStateAction, useContext } from "react";

type Props = {
  isStart: Dispatch<SetStateAction<boolean>>;
};

const Form = ({ isStart }: Props) => {
  const { setQuestion } = useContext(QContext);

  const handleFormSub = (e: React.FormEvent) => {
    e.preventDefault();

    PullJson(10, 9, "easy");

    isStart(true);
  };

  const PullJson = (amount: number, category: number, difficulty: string) => {
    const api = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
    // const api = `https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`;

    axios
      .get(api)
      .then(res => {
        setQuestion(res.data.results);
        console.log(res.data.results);
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <form
        id="quiz-form"
        onSubmit={handleFormSub}
      >
        <label htmlFor="Category">Select Category: </label>
        <select name="Category">
          <option value="">Any Category</option>
          <option value={9}>General Knownledge</option>
          <option value={10}>Animals</option>
          <option value={15}>Video Games</option>
          <option value={12}>Music</option>
          <option value={18}>Science: Computers</option>
          <option value={17}>Science & Nature</option>
          <option value={21}>Sports</option>
          <option value={26}>Celebrities</option>
          <option value={28}>Vehicles</option>
          <option value={31}>Anime & Manga</option>
        </select>

        <label htmlFor="Amount">No of Questions: </label>
        <input
          type="number"
          defaultValue={10}
        />

        <label htmlFor="Difficulty">Select Difficulty: </label>
        <select name="Difficulty">
          <option value="">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <button
          type="submit"
          id="start-quiz"
        >
          Start Quiz
        </button>
      </form>
    </>
  );
};

export default Form;
