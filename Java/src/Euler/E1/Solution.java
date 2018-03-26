package Euler.E1;

/**
 * Created by kevin on 3/25/18.
 */
public class Solution {
    // 1) Multiples of3 and 5
    public int solution(int limit) {

        int sum = 0;
        for (int i = 1; i < limit; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                sum += i;
            }
        }
        return sum;
    }
}
