// -----------------------------------------------------
// Error handling -> Creating a custom error

async function getQuestions() {
  const questionsResponse = await fetch("6.questions.json");
  // const questionsResponse = await fetch("6.123questions.json"); // deliberate error

  if (questionsResponse.status !== 200) {
    throw new Error("Error Fetching Data");
  }

  return (oogityBoogity = await questionsResponse.json());
}

getQuestions()
  .then((blueBalls) => console.log(blueBalls))
  .catch((whipperSnapper) => console.log(whipperSnapper.message));
