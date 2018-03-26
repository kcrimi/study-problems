package Codility.MinMaxDivision;
// you can also use imports, for example:
// import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public int solution(int K, int M, int[] A) {
        // write your code in Java SE 8
        int upperBound = M * A.length;
        int lowerBound = 0;
        for (int i : A) {lowerBound = Math.max(lowerBound, i);}
        int midSelect = -1;
        int minLargeSum = 0;
        boolean converged = false;
        while (lowerBound <= upperBound) {
            midSelect = (upperBound + lowerBound) /2;
            int blocks = checkBlockCount(A, midSelect);
            // System.out.println("blocks="+blocks+" midSelect="+midSelect+" low="+lowerBound+" high="+upperBound+" minLargeSum="+minLargeSum);
            if (blocks <= K) {
                minLargeSum = midSelect;
                upperBound = midSelect - 1;
            } else {
                lowerBound = midSelect +1;
            }
        }
        return minLargeSum;
    }
    
    private int checkBlockCount(int[] A, int maxLargeSum) {
        int blockCount = 1;
        int currentSum = 0;
        for (int i: A) {
            if (currentSum + i > maxLargeSum) {
                blockCount++;
                currentSum = i;
            } else {
                currentSum += i;
            }
        }
        return blockCount;
    }
}