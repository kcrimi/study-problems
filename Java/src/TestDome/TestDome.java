import java.util.Arrays;

/**
 * Created by kevin on 4/26/16.
 */
public class TestDome {
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

    public String getPath(){
        return "";
    }
    public Path cd(String newPath) {
        String[] cdPath = newPath.split("/");
        String[] path = getPath().substring(1).split("/");
        System.out.println(Arrays.toString(path));
        System.out.println(Arrays.toString(cdPath));
        int upCount = 0;
        for (int i = 0; i < cdPath.length; i++) {
            if (cdPath[i].equals("..")) {
                upCount++;
            } else {
                break;
            }
        }
        String output = "";
        for (int i = 0; i < path.length - upCount; i++) {
            output += "/";
            output += path[i];
        }
        for (int i = upCount; i < cdPath.length; i++) {
            output += "/";
            output += cdPath[i];
        }
        return new Path(output);

    }
}
