package Codility.MaxDoubleSlice;

class Solution {
    public int solution(int[] A) {
        int[] left = new int[A.length];
        int[] right = new int[A.length];
        int pointer = A.length - 1;
        for (int i = 0; i < A.length; i++) {
            if (i == 0) {
                left[i] = A[i];
                right[pointer] = A[pointer];
            } else {
                left[i] = Math.max(left[i - 1] + A[i], A[i]);
                right[pointer] = Math.max(right[pointer + 1] + A[pointer], A[pointer]);
            }
            pointer--;
        }
        int maxDoubleSlice = 0;
        for (int i = 2; i < A.length -1; i++) {
            maxDoubleSlice = Math.max(maxDoubleSlice, left[i-1] + right[i+1]);
        }
        return maxDoubleSlice;
    }
}
