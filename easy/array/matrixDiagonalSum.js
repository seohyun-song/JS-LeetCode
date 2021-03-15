/*
    Matrix Diagonal Sum
    Given a square matrix mat, return the sum of the matrix diagonals.
    Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

    Example 1: 
    Input: mat = [[1,2,3],
              [4,5,6],
              [7,8,9]]
    Output: 25
    Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
    Notice that element mat[1][1] = 5 is counted only once.

 */
var diagonalSum = function(mat) {
    var sum = 0;
    var countFront = 0;
    var countRear = mat.length - 1;
    
    for(var i = 0; i < mat.length; i++){
        if( countFront == countRear ){
            sum += mat[i][countFront];
            countFront++;
            countRear--;
        } else {
            sum += mat[i][countFront];
            sum += mat[i][countRear];
            countFront++;
            countRear--;
        }
    }
    return sum;
    
};