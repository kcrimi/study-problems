package Toptal.KnightMove;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

class Solution {
    private static int[][] mBoardMin;
    private static List<List<Integer>> validMoves= Arrays.asList(
            Arrays.asList(-1,-2),
            Arrays.asList(-2,-1),
            Arrays.asList(-2,1),
            Arrays.asList(-1,2),
            Arrays.asList(1,2),
            Arrays.asList(2,1),
            Arrays.asList(2,-1),
            Arrays.asList(1,-2));

    // Solution 1
    public static int knightMoves(int x, int y){
        x = Math.abs(x);
        y = Math.abs(y);
        mBoardMin = new int[Math.abs(x)+3][Math.abs(y)+3];
        Queue<int[]> toExplore = new LinkedList<int[]>();
        toExplore.add(new int[2]);
        while (!(toExplore.peek()[0] == x && toExplore.peek()[1] == y)) {
            int[] current = toExplore.remove();
            for (int i = 0; i < validMoves.size(); i++){
                int childX = Math.abs(current[0]+validMoves.get(i).get(0));
                int childY = Math.abs(current[1]+validMoves.get(i).get(1));
                if (childX < mBoardMin.length
                && childY < mBoardMin[0].length
                && mBoardMin[childX][childY] == 0
                && !(childX == 0 && childY == 0)){
                    mBoardMin[childX][childY] = mBoardMin[current[0]][current[1]] + 1;
                    int[] child = new int[2];
                    child[0] = childX;
                    child[1] = childY;
                    toExplore.add(child);
                }
            }
        }
        return mBoardMin[x][y];
    }

    // Solution 2 with recursion
    public static int knightMovesRecurse(int x, int y){
        mBoardMin = new int[Math.abs(x)+3][Math.abs(y)+3];
        return minMoves(x,y);
    }

    public static int minMoves(int x, int y){
        x = Math.abs(x);
        y = Math.abs(y);
        List<Integer> xMove = Arrays.asList(-1, -2, -2, -1, 1, 2);
        List<Integer> yMove = Arrays.asList(2, 1, -1, -2, -2, -1);
        // System.out.println(x+" "+y);
        if ((x == 0 && y == 0) || mBoardMin[x][y] > 0){
            return mBoardMin[x][y];
        }
        mBoardMin[x][y] = -1;
        int minFromHere = -1;
        for (int i = 0; i < xMove.size(); i++) {
            // System.out.println("x="+x+" y="+y+" xMove="+xMove.get(i)+" yMove="+yMove.get(i)+" xlen="+mBoardMin.length+" ylen="+mBoardMin[0].length);
            if (x+xMove.get(i) < mBoardMin.length
                    && y+yMove.get(i) < mBoardMin[0].length
                    && mBoardMin[Math.abs(x+xMove.get(i))][Math.abs(y+yMove.get(i))] != -1){
                int nextMin = minMoves(x+xMove.get(i), y+yMove.get(i));
                // printBoard();
                if (minFromHere == -1) {
                    minFromHere = nextMin;
                } else if (nextMin >=0 ){
                    minFromHere = Math.min(minFromHere, minMoves(x+xMove.get(i), y+yMove.get(i)));
                }
            }
        }
        mBoardMin[x][y] = minFromHere >= 0 ? minFromHere + 1 : minFromHere;
        return mBoardMin[x][y];
    }
}