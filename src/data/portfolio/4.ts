export const information = {
  heading: "Artificial Intelligence Playground",
  introduction: "AI-based Projects for fun",
  title1: "Introduction",
  content1:
    '"Artificial intelligence already powers many of our interactions today." Said Andrew Ng. To face the challenges and opportunities AI has brought us, I believe it\'s necessary to keep up with the trend, starting with some small projects implemented by AI technologies.',
  title2: "MiniAlphaGo-Reversi",
  content2:
    "AlphaGo is the first computer program to defeat a professional human Go player, the first program to defeat a Go world champion, and arguably the strongest Go player in history. I learned the basic algorithms and thoughts of this remarkable technology, and implemented a mini-Alpha Go. <br>How it would help with design and interactions, you may ask. The search algorithms are exactly the methods that may come to use when we try to make our applications and interactions with human more human. It can actually learn from itself and the past histories by evaluating in an intelligent way.</br> We used Monte-Carlo-Tree-Search method with a few tricks.",
  title3: "Image Restoration",
  content3:
    "Sometimes your pictures just get ruined or polluted for some reason. You may want to restore them. But how? In this project I just tried a hand-written linear regression. Of course there are more than one way to do it. I just explored the possibility here. Plus, I didn't use scikit-learn library to generate regression results. It turns out that it works well. <br>Yeah it can be done better. I will explore more. ",
  title4: "Bird Localization",
  content4:
    "In this project, I tried some interesting thing using CNN(Convoluted Neural Network). I used CUB(Caltech and UCSD Birds) data set to localize birds. I divided the dataset as 8:2 to train and test. Modification to a 18-layer ResNet has been made like changing the fully-connected layer to 4-dimension and use Adam algorithm to optimize the result. "
};

export const atlas1 = [
  {
    name: "picture1",
    picsrc: require("@/assets/Portfolio/aiprojects/1_1.png")
  },
  {
    name: "Picture2",
    picsrc: require("@/assets/Portfolio/aiprojects/1_2.png")
  }
];

export const atlas2 = [
  {
    name: "picture2_1",
    picsrc: require("@/assets/Portfolio/aiprojects/2_1.png")
  },
  {
    name: "Picture2_2",
    picsrc: require("@/assets/Portfolio/aiprojects/2_2.png")
  },
  {
    name: "Picture6",
    picsrc: require("@/assets/Portfolio/aiprojects/2_3.png")
  }
];

export const atlas3 = [
  {
    name: "picture3_1",
    picsrc: require("@/assets/Portfolio/aiprojects/3_1.png")
  },
  {
    name: "Picture3_2",
    picsrc: require("@/assets/Portfolio/aiprojects/3_2.png")
  }
];
