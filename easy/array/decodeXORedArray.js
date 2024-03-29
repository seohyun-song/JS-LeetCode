/**
 * 1720. Decode XORed Array
 * There is a hidden integer array arr that consists of n non-negative integers.

  It was encoded into another integer array encoded of length n - 1, such that encoded[i] = arr[i] XOR arr[i + 1]. For example, if arr = [1,0,2,1], then encoded = [1,2,3].

  You are given the encoded array. You are also given an integer first, that is the first element of arr, i.e. arr[0].

  Return the original array arr. It can be proved that the answer exists and is unique.
 * Hint: Since that encoded[i] = arr[i] XOR arr[i+1], then arr[i+1] = encoded[i] XOR arr[i].
  a^b = c일 때,(a,b,c가 한 쌍이라고 보면됨) 셋 중 아무거나 두 개를 골라 XOR(^)연산을 하면 결과는 나머지 하나가 나옴!!! 
  
  let a = 5;
  let b = 3;
  let c = a^b;
  console.log(c);
  console.log(a^c); // b
  console.log(b^c); // a
*/
/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  const n = encoded.length;
  const arr = new Array(n);
  arr[0] = first;

  for (let i = 0; i < n; i++) {
    arr[i + 1] = encoded[i] ^ arr[i];
  }

  return arr;
};

// 다른 사람 풀이
var decode = function (encoded, first) {
  let result = [first];
  for (let i = 0; i < encoded.length; i++) {
    result.push(encoded[i] ^ result[i]);
  }
  return result;
};
