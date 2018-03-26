package Codility.MaxProfit;

class Solution {
    public int solution(int[] A) {
        int buyPrice = 0;
        int maxProfit = 0;

        for (int i = 0; i < A.length; i++) {
            if (i == 0) {
                buyPrice = A[i];
            } else {
                maxProfit = Math.max(maxProfit, A[i] - buyPrice);
                buyPrice = Math.min(buyPrice, A[i]);
            }
        }

        return maxProfit;
    }
}
