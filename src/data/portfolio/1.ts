export const information = {
  heading: "A Demo of Talkit++",
  introduction: "Interacting with 3D Printed Models Using iOS Devices",
  title1: "ABSTRACT",
  content1:
    "Tactile models are important learning materials for visually impaired students. With the adoption of 3D printing technologies, visually impaired students and teachers will have more access to 3D printed tactile models. We designed Talkit++, an iOS application that plays audio and visual content as a user touches parts of a 3D print. With Talkit++, a visually impaired student can explore a printed model tactilely and use hand gestures and speech commands to get more information about certain elements in the model. Talkit++ detects the model and hand gestures using computer vision algorithms, simple accessories like paper stickers and printable trackers, and the built-in RGB camera on an iOS device. Based on the model’s position and the user’s input, Talkit++ speaks textual information, plays audio recordings, and displays visual animations.",
  title2: "FULL CITATION",
  content2:
    "Lei Shi, Zhuohao Zhang, Shiri Azenkot.2018. A Demo of Talkit++: Interacting with 3D Printed Models Using iOS Devices. In Proceedings of the 20th International ACM SIGACCESS Conference on Computers and Accessibility (ASSETS '18 demo). ACM, Galway, Ireland. (to appear)",
  title3: "MEDIA AND IMAGES",
  title4: "A demo of Talkit++: FREQUENTLY ASKED QUESTIONS",
  pdfhref: "/pdf/assets18.pdf",
  pdfcontent: "DOWNLOAD PAPER"
};

export const imgsrc = [
  {
    name: "pic1",
    content:
      "(a) The user interface of the Talkit++ application. (b) A visually impaired student is using Talkit++ on an iPad to learn the Map model",
    picsrc: require("@/assets/Portfolio/assets18/pic1.png")
  },
  {
    name: "pic2",
    content:
      "We designed three interactive models: (a) the Map model, (b) the Volcano model, and (c) the Plane model",
    picsrc: require("@/assets/Portfolio/assets18/pic2.png")
  }
];

export const QA = [
  {
    question: "What is the main contribution of this work?",
    answer:
      "Talkit was a laptop application that augmented areas of a 3D printed model with audio labels. When a user tactilely explored these areas, Talkit spoke their labels. Talkit++ is a new version that supports multiple types of output information, scalable 2D trackers (used for tracking the models with computer vision), and iOS compatibility. Besides descriptive textual information (e.g., the name of a bird), Talkit++ also supports audio recordings (e.g., the sound a bird makes) and visual animations (e.g., the animation of a flying bird). In addition to 3D trackers, Talkit++ also supports 2D trackers."
  },
  {
    question: "How was it developed?",
    answer:
      "Talkit++ was developed in Swift and C++. To locate a model, Talkit++ uses Chilitags, which provides the coordinates of 2D and 3D trackers. Based on these coordinates, the system calculates the real-world coordinates of the model, and tracks a user’s red sticker using OpenCV. We cross compiled Chilitags and OpenCV and called them in Swift. After locating the model, Talkit++ provides output information based on the location of the sticker. As for speech input, Talkit++ uses Swift’s built-in speech dictation functions."
  },
  {
    question: "What's your future goal of this project?",
    answer:
      "In the future, we plan to make the application available to the public. In addition, we will create an online repository for interactive 3D printed models. The repository will collect practical samples of interactive models, and enables teachers and students to access these models freely."
  }
];
