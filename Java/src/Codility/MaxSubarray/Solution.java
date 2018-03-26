package Codility.MaxSubarray;

class Solution {
    public int solution(int[] A) {
        int maxValue = 0;
        int localMax = 0;
        for (int i = 0; i < A.length; i++) {
            localMax = Math.max(0, localMax + A[i]);
            maxValue = Math.max(maxValue, localMax);
        }
        return maxValue;
    }
}
