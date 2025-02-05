class Question {
  constructor() {
    this.baseUrl = "https://whoa.readme.io/reference";
  }

  async intializeQuestion() {
    const options = { method: "GET", headers: { accept: "application/json" } };
    fetch("https://whoa.onrender.com/whoas/random", options)
      .then((res) => res.json())
      .then((res) => (this.questionData = res))
      .catch((err) => console.error(err));

    console.log(this.questionData);
  }

  getContent() {
    return this.questionData;
  }

  getOptions() {}

  validateAnswer() {}

  getAudio() {}

  getVideo() {}
}

// let q = new Question();
// q.intializeQuestion();
