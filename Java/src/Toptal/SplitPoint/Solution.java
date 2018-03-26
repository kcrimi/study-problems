package Toptal.SplitPoint;

class Solution {
    public int solution(int[] a, int x) {
         int breakPoint = 0;
         int pointer = a.length -1;
         if (a.length == 0) { return -1;}
         while (pointer >= breakPoint) {
            if (a[breakPoint] == x && a[pointer] == x){ // 1 1
                pointer--;
            } else if (a[breakPoint] != x && a[pointer] != x){ // 0 0
                breakPoint++;
            } else { // 0 1  || 1 0
                breakPoint++;
                pointer--;
            }
         }
         return breakPoint;
     }
 }