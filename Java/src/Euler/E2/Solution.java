package Euler.E2;

/**
 * Created by kevin on 3/25/18.
 */
public class Solution {

    //2) Even Fib numbers
    public int solution(int limit) {
        int sum = 0;
        int last = 1;
        int current = 1;
        int next = last+current;
        while (next < limit) {
            if (next % 2 == 0) {
                sum+= next;
            }
            last = current;
            current = next;
            next = last+current;
        }
        return sum;
    }
}
