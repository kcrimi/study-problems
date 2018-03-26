package TestDome.LongestRun;

/**
 * Created by kevin on 4/26/16.
 */
public class Solution {

    public static int indexOfLongestRun(String str) {
        char[] s = str.toCharArray();
        int currentRun = 0;
        int maxRun = 0;
        int currentRunIndex = -1;
        int maxRunIndex = -1;
        for (int i = 0; i < s.length; i++){
            if (i == 0 || s[i] != s[i-1]) {
                currentRun = 0;
                currentRunIndex = i;
            }
            currentRun++;
            if (currentRun > maxRun) {
                maxRun = currentRun;
                maxRunIndex = currentRunIndex;
            }
        }
        return maxRunIndex;
    }

    public static void main(String[] args) {
        System.out.println(indexOfLongestRun("abbcccddddcccbba"));
    }
}
