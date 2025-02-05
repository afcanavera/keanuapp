class Question {
  questionData;

  constructor() {
    this.baseUrl = "https://whoa.readme.io/reference";
  }

  async intializeQuestion() {
    const response = await axios.get(
      "https://whoa.onrender.com/whoas/random?results=2",
      {
        headers: {
          accept: "application/json",
        },
      }
    );

    this.questionData = response.data[0];
    let option1 = response.data[0].movie;
    let option2 = response.data[1].movie;
    if (option1 === option2) {
      if (option1 === "John Wick") {
        option1 = "The Matrix";
      } else {
        option1 = "John Wick";
      }
    }
    this.options = [option1, option2];
    return true;
  }

  getContent() {
    return this.questionData;
  }

  getOptions() {
    return this.options;
  }

  validateAnswer(answer) {
    if (answer == this.questionData.movie) {
      return true;
    }
    return false;
  }

  getAudio() {
    const audio = this.questionData.audio;
    return audio;
  }

  getVideo() {
    console.log(this.questionData);
    const videolist = this.questionData.video;
    console.log(videolist["360p"]);
    return videolist["360p"];
  }
}

async function getQuestion() {
  let q = new Question();
  await q.intializeQuestion();
  console.log(q.getAudio());
}

getQuestion();

const buttonstart = document.querySelector(".section__start");
buttonstart.addEventListener('click', () => {
  const buttonAppear = document.querySelectorAll(".sec-button");
  buttonAppear.forEach((element) => {
    element.classList.remove("hide");
  });
  document.querySelector(".section__score").classList.remove("hide");
});