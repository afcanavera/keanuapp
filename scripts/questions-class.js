class Question {
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
    const options = [response.data[0].movie, response.data[1].movie];
    //console.log(options);
    return true;
  }

  getContent() {
    return this.questionData;
  }

  getOptions() {
    return this.options;
  }

  validateAnswer(answer) {
    if (answer == this.questionData.year) {
      return true;
    }
    return false;
  }

  getAudio() {
    const audio = this.questionData.audio;
    return audio;
  }

  getVideo() {
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
