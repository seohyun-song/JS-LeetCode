/*
    Students are asked to stand in non-decreasing order of heights for an annual photo.
    Return the minimum number of students that must move in order for all students to
    be standing in non- decreasing order of height.

    Notice that when a group of students is selected they can reorder in any possible way
    between themselves and the non selected students remain on their seats.
    ->targetHeights와 다른 students만 옮기면 됨!
 */
var heightChecker = function(heights) {
    var count = 0;
    var targetHeights = [];
    for(var i=0; i<heights.length; i++){
        targetHeights[i] = heights[i];
    }
    targetHeights.sort(function(a,b){return a-b;});
    
    for(var i=0; i<heights.length; i++){
        if(targetHeights[i] != heights[i]) count++;
    }
    return count;
};