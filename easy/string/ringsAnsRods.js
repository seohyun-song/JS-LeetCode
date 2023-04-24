/**
 * 2103. Rings and Rods
 * There are n rings and each ring is either red, green, or blue. The rings are distributed across ten rods labeled from 0 to 9.

    You are given a string rings of length 2n that describes the n rings that are placed onto the rods. Every two characters in rings forms a color-position pair that is used to describe each ring where:

    ● The first character of the ith pair denotes the ith ring's color ('R', 'G', 'B').
    ● The second character of the ith pair denotes the rod that the ith ring is placed on ('0' to '9').
    For example, "R3G2B1" describes n == 3 rings: a red ring placed onto the rod labeled 3, a green ring placed onto the rod labeled 2, and a blue ring placed onto the rod labeled 1.

    Return the number of rods that have all three colors of rings on them.
 * 
 */
/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  let answer = 0;
  const n = rings.length / 2;
  let rod = new Array(n).fill("");

  for (let i = 0; i < 2 * n; i += 2) {
    let position = Number(rings[i + 1]);
    let color = rings[i];
    rod[position] += color;
  }

  rod.forEach((el) => {
    if (el.includes("R") && el.includes("G") && el.includes("B")) answer++;
  });
  return answer;
};

// 다른 사람 풀이
// 객체 활용
var countPoints = function (rings) {
  let obj = {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
  };

  let count = 0;

  for (let i = 0; i < rings.length; i += 2) {
    obj[rings[i + 1]] += rings[i];
  }

  Object.values(obj).forEach((val) => {
    if (val.includes("R") && val.includes("G") && val.includes("B")) count++;
  });

  return count;
};
