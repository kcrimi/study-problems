package Codility.FibFrog;
// you can also use imports, for example:
import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    private int[] mBest;
    
    public int solution(int[] A) {
        // write your code in Java SE 8
        int current = -1;
        int bank = A.length;
        int jumps = -1;
        int[] fib = fibSequence(bank+1);
        mBest = new int[A.length];
        
        return minJumps(current, bank, fib, A);
    }
    
    private int minJumps(int current, int bank, int[] fib, int[] A) {
        int minJumps = -1;
        for (int i = fib.length-1; i >= 1; i--) {
            if (current != -1 && mBest[current] > 0) {
                return mBest[current];
            }
            if (fib[i] == bank-current){
                return 1;
            } else if (fib[i] < bank-current && A[current+fib[i]] == 1) {
                // System.out.println("checking current="+current+" jump="+Solution.get(i)+" spot="+(current+Solution.get(i)));
                if (minJumps == -1) {
                    minJumps = minJumps(current+fib[i], bank, fib, A);
                } else {
                    minJumps = Math.min(minJumps, minJumps(current+fib[i], bank, fib, A));
                }
            }
        }
        if (current !=-1) {
            mBest[current] = minJumps == -1 ? minJumps : minJumps + 1;
        }
        return minJumps == -1 ? minJumps : minJumps + 1;
    }
    
    private int[] fibSequence(int n) {
        ArrayList<Integer> fibs = new ArrayList<Integer>();
        fibs.add(0);
        fibs.add(1);
        int nextFib = 1;
        while (nextFib <= n) {
            fibs.add(nextFib);
            nextFib = fibs.get(fibs.size()-1) + fibs.get(fibs.size()-2);
        }
        
        int[] output = new int[fibs.size()];
        for(int i = 0; i < fibs.size(); i++) {
            output[i] = fibs.get(i);
        }
        return output;
    }
}