export const information = {
  heading: "Talkit++",
  introduction: "Interacting with 3D Printed Models Using iOS Devices",
  title1: "ABSTRACT",
  content1:
    "Tactile models are important learning materials for visually impaired students. With the adoption of 3D printing technologies, visually impaired students and teachers will have more access to 3D printed tactile models. We designed Talkit++, an iOS application that plays audio and visual content as a user touches parts of a 3D print. With Talkit++, a visually impaired student can explore a printed model tactilely and use hand gestures and speech commands to get more information about certain elements in the model. Talkit++ detects the model and hand gestures using computer vision algorithms, simple accessories like paper stickers and printable trackers, and the built-in RGB camera on an iOS device. Based on the model’s position and the user’s input, Talkit++ speaks textual information, plays audio recordings, and displays visual animations.",
  title2: "FULL CITATION",
  content2:
    "Lei Shi, Zhuohao Zhang, and Shiri Azenkot. 'A Demo of Talkit++: Interacting with 3D Printed Models Using an iOS Device.' Proceedings of the 20th International ACM SIGACCESS Conference on Computers and Accessibility. ACM, 2018.",
  title3: "MEDIA AND IMAGES",
  title4: "A demo of Talkit++: A Quick Review",
  pdfhref: "/pdf/assets18.pdf",
  pdfcontent: "DOWNLOAD PAPER",
  pdfhref2: "/pdf/assetsPoster.pdf",
  pdfcontent2: "VIEW POSTER"
};

export const atlas = [
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
      "Talkit++ augmented 3D printed models with audio labels. It's a new version that supports <strong>multiple types of output information</strong>, including <strong>audio labels, audio effects, and visual animations</strong>. It also comes with iOS compatibility."
  },
  {
    question: "Implementing Talkit++ and personal skill-set",
    answer:
      "Talkit++ was developed in <strong>Swift and C++</strong>. To locate a model, Talkit++ uses Chilitags, which provides the coordinates of 2D and 3D trackers. We cross compiled Chilitags and OpenCV and called them in Swift. Then Talkit++ provides output information using iOS native functions based on user's gesture input using OpenCV. I developed the mobile app using multiple libraries and features with the help of Dr. Lei Shi."
  },
  {
    question: "Future development plan",
    answer:
      "In the future, we plan to make the application available to the public. In addition, we will create an online repository for interactive 3D printed models. The repository will collect practical samples of interactive models, and enables teachers and students to access these models freely."
  }
];
