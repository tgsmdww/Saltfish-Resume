export const information = {
  heading:
    "Relation Extraction for Chinese Medicine Using ResCNN and Attention",
  introduction: "A new model to process natural language in Chinese medicine",
  title1: "ABSTRACT",
  content1:
    "Chinese medicine text processing are important in medical research. Relation extraction in these texts helps accelerate related researches greatly. However, there is no model built specifically for these texts, and previously there is no large scale data set for training specified models. In this paper, we propose a solution to the Relation Extraction problem based on Chinese medicine dataset. We proposed an improved Residual Neural Network (ResCNN) with sentence-level attention over multiple instances to obtain better results, and constructed a large-scale dataset for NLP tasks rated to Chinese medicine texts. Our model is deployed in part of the knowledge base system at Alibaba.",
  title2: "Acknowledgement",
  content2:
    "I work with Tianxiang Gao, Xi Yang, Linlin Li, and Prof. Zhou Zhao on this. It is currently under review of <strong>AAAI 2019</strong>",
  title3: "MEDIA AND IMAGES",
  title4: "Designing I3Ms with TVIs: FREQUENTLY ASKED QUESTIONS",
  pdfhref: "/pdf/aaai19.pdf",
  pdfcontent: "DOWNLOAD PAPER"
};

export const atlas = [
  {
    name: "pic1",
    content: "Relationship in the dataset",
    picsrc: require("@/assets/Portfolio/aaai19/1.png")
  },
  {
    name: "pic2",
    content: "Experimental results on Accuracy",
    picsrc: require("@/assets/Portfolio/aaai19/2.png")
  },
  {
    name: "pic3",
    content: "The overview of model structure",
    picsrc: require("@/assets/Portfolio/aaai19/3.png")
  }
];

export const QA = [
  {
    question: "What is the main contribution of this work?",
    answer:
      "1).we propose a ResCNN model with sentence-level attention mechanism for RE task on Chinese medical text. Compared to CNN, our model is able to learn information within longer distance. Compared to ResCNN, our model introduced attention to tolerate noise. This model has been successfully deployed as a part of the Chinese medical knowledge base system in Alibaba Inc. 2). We constructed a large-scale Chinese medical dataset for training the model. To our knowledge, this is the first Chinese medical text dataset in the world."
  },
  {
    question: "How did you evaluate your model?",
    answer:
      "To evaluate our model, we constructed a comprehensive Chinese medical corpus derived from open texts, including drug instructions, electronic medical records, medical QAs and some other related sources."
  },
  {
    question: "What's your conclusion of this project?",
    answer:
      "We proposed a novel neural network model with ResCNN and attention mechanism for relation extraction task on Chi- nese medical datasets. To train and evaluate the model, we constructed the first large-scale Chinese medicine text data set in the world. Our model achieved state-of-the-art perfor- mance in our data set. We hope that our Chinese medical data set can not only be used for our model, but also ben- efit other related researches. The successful deployment of our model in Alibaba demonstrated that our model, as well as the data set we constructed, are practical and valuable for industrial level application."
  }
];
