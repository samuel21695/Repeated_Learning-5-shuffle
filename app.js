/**
 * 주어진 배열을 무작위로 섞는 함수
 * @param {Array} array - 섞을 배열
 * @returns {Array} 무작위로 섞인 배열
 */

function shuffleArray(array) {
  /**
   * 주어진 최대값 내에서 무작위 인덱스를 반환하는 함수.
   * @param {number} max - 무작위 인덱스를 생성할 때 고려할 최대 범위.
   * @returns {number} 생성된 무작위 인덱스.
   */
  function getRandomIndex(max) {
    return Math.floor(Math.random() * max); // 0과 max 사이에 랜덤한 정수 반환
  }

  // array의 모든 요소에 대해 루프를 돌며 무작위 위치와 교환
  array.forEach((currentValue, index) => {
    const randomIndex = getRandomIndex(array.length); //랜덤 인덱스 생성

    // 요소 교환(swap): 배열 내의 두 요소의 위치를 교환
    const temp = array[index]; //현재 요소 임시 저장
    array[index] = array[randomIndex]; // 현재 위치에 랜덤 위치의 요소 저장
    array[randomIndex] = temp; // 랜덤 위치에 임시 저장한 요소 저장
  });

  return array; // 섞인 배열 반환
}