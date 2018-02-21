const segmentationList = [
  {
    title: "01. 이미지 로딩",
    content: "학습/테스트할 정상 및 결함 이미지를 불러옵니다.",
    imgUrl: "https://d3rqapinkc8b8p.cloudfront.net/productPage/process-segmentation-1@2x.png",
  },
  {
    title: "02. 이미지 분류",
    content: "불러온 이미지들을 학습용/검증용/테스트용 이미지로 분류합니다.",
    imgUrl: "https://d3rqapinkc8b8p.cloudfront.net/productPage/process-segmentation-2@2x.png",
  },
  {
    title: "03. 라벨링",
    content: "이미지 상의 결함 부분을 각각의 불량 유형으로 라벨링합니다.",
    imgUrl: "https://d3rqapinkc8b8p.cloudfront.net/productPage/process-segmentation-3@2x.png",
  },
  {
    title: "04. 모델 생성",
    content: "라벨링된 이미지들을 분석하여 딥러닝 모델을 생성합니다.",
    imgUrl: "https://d3rqapinkc8b8p.cloudfront.net/productPage/process-segmentation-4@2x.png",
  },
  {
    title: "05. 테스트",
    content: "테스트를 통해 딥러닝 모델이 검출한 불량영역을 확인합니다.",
    imgUrl: "https://d3rqapinkc8b8p.cloudfront.net/productPage/process-segmentation-5@2x.png",
  },
  {
    title: "06. 모델 export",
    content: "생성된 모델을 export하여 기존 C++/C# 소프트웨어와 연동하여 사용합니다.",
    imgUrl: "https://d3rqapinkc8b8p.cloudfront.net/productPage/process-segmentation-6@2x.png",
  },
];

const classificationList = [
  {
    title: "01. 이미지 로딩",
    content: "학습/테스트할 정상 및 결함 이미지를 불러옵니다.",
    imgUrl: "https://d3rqapinkc8b8p.cloudfront.net/productPage/process-classification-1@2x.png",
  },
  {
    title: "02. 이미지 분류",
    content: "불러온 이미지들을 학습용/검증용/테스트용 이미지로 분류합니다.",
    imgUrl: "https://d3rqapinkc8b8p.cloudfront.net/productPage/process-segmentation-2@2x.png",
  },
  {
    title: "03. 라벨링",
    content: "이미지 상의 결함 부분을 각각의 불량 유형으로 라벨링합니다.",
    imgUrl: "https://d3rqapinkc8b8p.cloudfront.net/productPage/process-classification-3@2x.png",
  },
  {
    title: "04. 모델 생성",
    content: "라벨링된 이미지들을 분석하여 딥러닝 모델을 생성합니다.",
    imgUrl: "https://d3rqapinkc8b8p.cloudfront.net/productPage/process-segmentation-4@2x.png",
  },
  {
    title: "05. 테스트",
    content: "테스트를 통해 유형별로 분류된 이미지들을 확인합니다.",
    imgUrl: "https://d3rqapinkc8b8p.cloudfront.net/productPage/process-classification-5@2x.png",
  },
  {
    title: "06. 모델 export",
    content: "생성된 모델을 export하여 기존 C++/C# 소프트웨어와 연동하여 사용합니다.",
    imgUrl: "https://d3rqapinkc8b8p.cloudfront.net/productPage/process-segmentation-6@2x.png",
  },
];

const detectionList = [
  {
    title: "01. 이미지 로딩",
    content: "학습/테스트할 정상 및 결함 이미지를 불러옵니다.",
    imgUrl: "https://d3rqapinkc8b8p.cloudfront.net/productPage/process-detection-1@2x.png",
  },
  {
    title: "02. 이미지 분류",
    content: "불러온 이미지들을 학습용/검증용/테스트용 이미지로 분류합니다.",
    imgUrl: "https://d3rqapinkc8b8p.cloudfront.net/productPage/process-detection-2@2x.png",
  },
  {
    title: "03. 라벨링",
    content: "이미지 상의 결함 부분을 각각의 불량 유형으로 라벨링합니다.",
    imgUrl: "https://d3rqapinkc8b8p.cloudfront.net/productPage/process-detection-3@2x.png",
  },
  {
    title: "04. 모델 생성",
    content: "라벨링된 이미지들을 분석하여 딥러닝 모델을 생성합니다.",
    imgUrl: "https://d3rqapinkc8b8p.cloudfront.net/productPage/process-segmentation-4@2x.png",
  },
  {
    title: "05. 테스트",
    content: "테스트를 통해 딥러닝 모델이 검출한 불량영역을 확인합니다.",
    imgUrl: "https://d3rqapinkc8b8p.cloudfront.net/productPage/process-detection-5@2x.png",
  },
  {
    title: "06. 모델 export",
    content: "생성된 모델을 export하여 기존 C++/C# 소프트웨어와 연동하여 사용합니다.",
    imgUrl: "https://d3rqapinkc8b8p.cloudfront.net/productPage/process-segmentation-6@2x.png",
  },
];

export { segmentationList, classificationList, detectionList };
