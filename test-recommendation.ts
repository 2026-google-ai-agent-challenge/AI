import { recommendByAI } from './lib/aiDepartmentRecommend';

async function runTest() {
  const title = "집 앞 골목에 쓰레기가 너무 많이 쌓여있어요";
  const content = "누가 자꾸 밤에 종량제 봉투도 안 쓰고 무단투기를 합니다. 악취도 심하고 벌레도 꼬이네요. 분리수거도 엉망입니다. 빠른 처리 부탁드립니다.";

  console.log("테스트 민원 제목:", title);
  console.log("테스트 민원 내용:", content);
  console.log("==================================================");
  
  const results = await recommendByAI(title, content);
  console.log(JSON.stringify(results, null, 2));
}

runTest().catch(console.error);
