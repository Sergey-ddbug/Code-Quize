$(document).ready(function () {
  const questions = [
    {
      name: "question_1",
      question:
        "1 - Which of the following is a disadvantage of using JavaScript?",
      options: [
        "A - Client-side JavaScript does not allow the reading or writing of files.",
        "- JavaScript can not be used for Networking applications because there is no such support available.",
        "- JavaScript doesn't have any multithreading or multiprocess capabilities.",
        "- All of the above.",
      ],
      answer: "- All of the above.",
      score: 1,
    },
    {
      name: "question_2",
      question:
        "2 - Which of the following is true about cookie handling in JavaScript?",
      options: [
        "- JavaScript can manipulate cookies using the cookie property of the Document object.",
        "4- JavaScript can read, create, modify, and delete the cookie or cookies that apply to the current web page.",
        "- Both of the above.",
        "- None of the above.",
      ],
      answer: "- Both of the above.",
      score: 1,
    },
    {
      name: "question_3",
      question:
        "3 - Which built-in method calls a function for each element in the array?",
      options: ["- while()", "- loop()", "- forEach()", "- None of the above."],
      answer: "- forEach()",
      score: 1,
    },
  ];

  function setQuestionByIndex(index) {
    $("#question").text(questions[index].question);
    $("#option_1")
      .text(questions[index].options[0])
      .attr("name", questions[index].name);
    $("#option_2")
      .text(questions[index].options[1])
      .attr("name", questions[index].name);
    $("#option_3")
      .text(questions[index].options[2])
      .attr("name", questions[index].name);
    $("#option_4")
      .text(questions[index].options[3])
      .attr("name", questions[index].name);
  }

  $(".start-button").click(function () {
      
    let score = 0;
    let nextQuestionIndex = 0;
    $("#welcome").hide();
    $("#finish").hide();
    $("#quiz").show();

    setQuestionByIndex(0);
    nextQuestionIndex++;

    $(".option").click(function () {
      const value = $(this).text();
      const name = $(this).attr("name");
      const currentQuestion = questions.find(
        (question) => question.name === name
      );

      if (currentQuestion.answer === value) {
        score += currentQuestion.score;
      }

      if (nextQuestionIndex === questions.length) {
        $("#quiz").hide();
        $("#finish").show();
        $("#score").text("Your score: " + score);
        $("#next-question-button").unbind("click");

        score = 0;
        nextQuestionIndex = 0;
      } else {
        setQuestionByIndex(nextQuestionIndex);
      }

      nextQuestionIndex++;
    });
  });
});
