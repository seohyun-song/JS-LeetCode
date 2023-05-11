/**
 * 1436. Destination City
 * You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

    It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.
 * Example 1:
    Input: paths = [["B","C"],["D","B"],["C","A"]]
    Output: "A"
    Explanation: All possible trips are: 
    "D" -> "B" -> "C" -> "A". 
    "B" -> "C" -> "A". 
    "C" -> "A". 
    "A". 
    Clearly the destination city is "A".
 */
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  // 종착역이 출발과 연결안되면 최종 종착역
  for (let i = 0; i < paths.length; i++) {
    let destination = paths[i][1];
    let isDestination = true;
    for (let j = 0; j < paths.length; j++) {
      if (paths[j][0] == paths[i][1]) isDestination = false;
    }
    if (isDestination) return destination;
  }
};

// 다른 사람 풀이
// Map
// If it's a start of path, make the value plus 1
// If it's a end of path, make the value minus 1
// ex) [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
var destCity = function (paths) {
  const map = new Map();

  /* Map(2) { 'London' => 1, 'New York' => -1 }
    Map(3) { 'London' => 1, 'New York' => 0, 'Lima' => -1 }
    Map(4) {
    'London' => 1,
    'New York' => 0,
    'Lima' => 0,
    'Sao Paulo' => -1
    } */
  for (const path of paths) {
    map.set(path[0], map.has(path[0]) ? 0 : 1);
    map.set(path[1], map.has(path[1]) ? 0 : -1);
  }

  for (const item of map) {
    if (item[1] === -1) return item[0];
  }
};
