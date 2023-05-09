/**
 * 1710. Maximum Units on a Truck ★Greedy algorithm
 * You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:

    ● numberOfBoxesi is the number of boxes of type i.
    ● numberOfUnitsPerBoxi is the number of units in each box of the type i.
    
    You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.

    Return the maximum total number of units that can be put on the truck.
 * Example 2:
    Input: boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10
    Output: 91
 */

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  // 트럭에 실을 수 있는 박스 수
  let leftover = truckSize;
  let total = 0;
  // 내림차순 정렬
  boxTypes.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < boxTypes.length; i++) {
    let count = 0;
    for (let j = 1; j <= boxTypes[i][0]; j++) {
      // 트럭에 실을 수 있는 박스 수가 남아있을 때까지 해당 박스타입의 박스수 카운트
      if (leftover - j >= 0) {
        count++;
      } else {
        break;
      }
    }
    leftover -= count;
    total += count * boxTypes[i][1];
  }
  return total;
};

// 다른 사람 풀이
// for...of
var maximumUnits = function (boxTypes, truckSize) {
  // 내림차순 정렬
  boxTypes.sort((a, b) => b[1] - a[1]);
  let maxUnits = 0;

  for (const [boxes, units] of boxTypes) {
    let takeBoxes = Math.min(boxes, truckSize);
    maxUnits += units * takeBoxes;
    truckSize -= takeBoxes;
    if (!truckSize) break;
  }
  return maxUnits;
};
