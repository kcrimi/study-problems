package Codility.Ladder;// you can also use imports, for example:

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public int[] solution(int[] A, int[] B) {
        // write your code in Java SE 8
        int maxVal = 0;
        int maxMod = 0;
        for (int i = 0; i < A.length; i++){
            maxVal = Math.max(A[i], maxVal);
            maxMod = Math.max(B[i], maxMod);
        }
        int[] fibs = fibToN(maxVal+2, maxMod);
        int[] output = new int[A.length];
        for(int i = 0; i < A.length; i++) {
            output[i] = fibs[A[i]+1] % (int)Math.pow(2, B[i]);
        }
        return output;    
    }
    
    private int[] fibToN(int n, int mod) {
        int[] fibs = new int[n];
        fibs[1] = 1;
        for( int i = 2; i < n; i++) {
            fibs[i] = (fibs[i-1] + fibs[i-2]) % (int)Math.pow(2,mod);
        }
        return fibs;
    }
}