package Codility.CommonPrimeDivisors;
// you can also use imports, for example:
// import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public int solution(int[] A, int[] B) {
        // write your code in Java SE 8
        int primeDivMatches = 0;
        for (int i = 0; i < A.length; i++) {
            int gcd = gcd(A[i], B[i], 1);
            if (removePrimeDivs(A[i], gcd) == removePrimeDivs(B[i], gcd)){
                primeDivMatches++;
            }
        }
        return primeDivMatches;
    }
    
    private int gcd(int a, int b, int res) {
        if (a == b) {
            return a * res;
        } else if (a % 2 == 0 && b % 2 == 0) {
            return gcd(a / 2, b / 2, res *2);
        } else if (a % 2 == 0) {
            return gcd(a/2,b, res);
        } else if (b % 2 == 0) {
            return gcd(a, b/2, res);
        } else if (a > b) {
            return gcd(a - b, b, res);
        } else {
            return gcd(a, b - a, res);
        }
    }
    
    private int removePrimeDivs(int a, int b) {
        while (a != 1) {
            int gcd = gcd(a,b,1);
            if (gcd == 1) {
                break;
            }
            a /= gcd;
        }
        return a;
    }
}