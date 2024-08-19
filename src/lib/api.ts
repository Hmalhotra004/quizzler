import axios from "axios";

const api = "https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple";

export const pullJson = setFn => {
  axios
    .get(api)
    .then(res => {
      setFn(res.data.results);
      console.log(res.data.results);
    })
    .catch(error => console.log(error));
};
