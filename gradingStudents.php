<?php

/* https://www.hackerrank.com/challenges/grading/problem
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents($grades) {
    // Write your code here
    $newGrade=[];
    foreach($grades as $grade){
        if($grade < 38){
            array_push($newGrade, "$grade");
        }else if(($grade+1) % 5 == 0){
            array_push($newGrade, $grade+1);
        }else if(($grade+2) %5==0){
             array_push($newGrade, $grade+2);
        }else{
            array_push($newGrade, $grade);
        }
        
    }
    return($newGrade);

}

$fptr = fopen(getenv("OUTPUT_PATH"), "w");

$grades_count = intval(trim(fgets(STDIN)));

$grades = array();

for ($i = 0; $i < $grades_count; $i++) {
    $grades_item = intval(trim(fgets(STDIN)));
    $grades[] = $grades_item;
}

$result = gradingStudents($grades);

fwrite($fptr, implode("\n", $result) . "\n");

fclose($fptr);
