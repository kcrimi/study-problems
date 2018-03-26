package Toptal.Negabinary;

class Solution {
    public String toNegabinary(int x){
         String output = "";
         if ( x==0 ) {
             output = "0";
         }
         int bitValue = -2;
         while(x != 0){
             int newBit = (x % bitValue) * Integer.signum(x*bitValue);
             output = (Math.min(1,Math.abs(newBit)))+output;
             x += newBit;
             bitValue *= -2;
         }
         return output;
     }
}
