package Codility.BinaryGap;

/**
 * Created by kevin on 4/27/16.
 */
public class Solution {
    public int solution(int N) {
        char[] binary = Integer.toBinaryString(N).toCharArray();

        int longest = 0;
        int current = -1;

        for (int i=0; i < binary.length; i++) {
            if (binary[i] == '1') {
                if (current > longest) {
                    longest = current;
                }
                current = 0;
            } else if ( current != -1) {
                current++;
            }
        }
        return longest;
    }
}
