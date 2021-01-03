// 서울에서 김서방 찾기

// 문제 설명
// String형 배열 seoul의 element중 Kim의 위치 x를 찾아,
// 김서방은 x에 있다는 String을 반환하는 함수, solution을 완성하세요.
// seoul에 Kim은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

function solution(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === 'Kim') {
      return `김서방은${i}에 있다.`;
    }
  }
}

console.log(solution(['Jane', 'asd', 'Kim']));

// 행렬의 덧셈

// 문제 설명
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행,
// 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아,
// 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

function solution(arr1, arr2) {
  return arr1.map((firstArr, i) =>
    firstArr.map((lastArr, j) => lastArr + arr2[i][j])
  );
}

console.log(solution([[1], [2]], [[4], [6]]));
