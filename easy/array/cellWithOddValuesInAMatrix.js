/*
    Cells with Odd Values in a Matrix

    There is an m x n matrix that is initialized to all 0's. There is also a 2D array indices where each indices[i] = [ri, ci] represents a 0-indexed location to perform some increment operations on the matrix.
    For each location indices[i], do both of the following:
    Increment all the cells on row ri.
    Increment all the cells on column ci.
    Given m, n, and indices, return the number of odd-valued cells in the matrix after applying the increment to all locations in indices

    Example 1:
    Input: m = 2, n = 3, indices = [[0,1],[1,1]]
    Output: 6
    Explanation: Initial matrix = [[0,0,0],[0,0,0]].
    After applying first increment it becomes [[1,2,1],[0,1,0]].
    The final matrix is [[1,3,1],[1,3,1]], which contains 6 odd numbers.
 */
    var oddCells = function(m, n, indices) {
        // 행 
        var arr = new Array(m);
        var answer = 0;
        
        for(var i = 0; i < arr.length; i++){
            // 열
            arr[i] = new Array(n);
        }
        // 초기값 할당
        for(var i = 0; i < m; i++){
            for(var j = 0; j < n; j++){
                arr[i][j]=0;
            }
        }
        
        for(var i = 0; i < indices.length; i++) {
            var row = indices[i][0];
            var col = indices[i][1];
            for(var j = 0; j < n; j++){
                arr[row][j] ++;
            }
            for(var j = 0; j < m; j++){
                arr[j][col] ++;
            }
        }
        
        for(var i = 0; i < m; i++){
            for(var j = 0; j < n; j++){
                if(arr[i][j]%2 != 0) answer++;
            }
        }
            
        return answer;
    };