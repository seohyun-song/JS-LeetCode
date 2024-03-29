/**
 * 1700. Number of Students Unable to Eat Lunch ★ Queue
 * The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers 0 and 1 respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.

    The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a stack. At each step:

    ● If the student at the front of the queue prefers the sandwich on the top of the stack, they will take it and leave the queue.
    ● Otherwise, they will leave it and go to the queue's end.
    
    This continues until none of the queue students want to take the top sandwich and are thus unable to eat.

    You are given two integer arrays students and sandwiches where sandwiches[i] is the type of the i​​​​​​th sandwich in the stack (i = 0 is the top of the stack) and students[j] is the preference of the j​​​​​​th student in the initial queue (j = 0 is the front of the queue). Return the number of students that are unable to eat.
 * Example 1:
    Input: students = [1,1,0,0], sandwiches = [0,1,0,1]
    Output: 0 
    Explanation:
    - Front student leaves the top sandwich and returns to the end of the line making students = [1,0,0,1].
    - Front student leaves the top sandwich and returns to the end of the line making students = [0,0,1,1].
    - Front student takes the top sandwich and leaves the line making students = [0,1,1] and sandwiches = [1,0,1].
    - Front student leaves the top sandwich and returns to the end of the line making students = [1,1,0].
    - Front student takes the top sandwich and leaves the line making students = [1,0] and sandwiches = [0,1].
    - Front student leaves the top sandwich and returns to the end of the line making students = [0,1].
    - Front student takes the top sandwich and leaves the line making students = [1] and sandwiches = [1].
    - Front student takes the top sandwich and leaves the line making students = [] and sandwiches = [].
    Hence all students are able to eat.
 */
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  while (students.length) {
    // 맨 앞에 있는 학생이 맨 위의 샌드위치를 선호하면 그것을 가지고 줄을 떠남
    if (sandwiches[0] == students[0]) {
      students.shift();
      sandwiches.shift();
    } else {
      // 그렇지 않으면 샌드위치를 선택하지 않고 줄 맨 끝으로 감
      students.push(students.shift());
    }
    // 런치를 못 먹는 학생들 발생
    if (!students.includes(sandwiches[0])) return students.length;
  }
  return 0;
};
