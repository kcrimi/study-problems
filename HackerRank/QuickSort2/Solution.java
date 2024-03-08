

import java.util.*;
public class Solution {
        static List<Integer> myQuickSort(List<Integer> ar) {
            if (ar.size() <= 1) return ar;
            int partition = ar.get(0);
            List<Integer> left = new ArrayList<Integer>();
            List<Integer> right = new ArrayList<Integer>();
            for (int i = 1; i < ar.size(); i++) {
                if (ar.get(i) < partition) {
                    left.add(ar.get(i));
                } else {
                    right.add(ar.get(i));
                }
            }         
            List<Integer> output = myQuickSort(left);
            output.add(partition);
            output.addAll(myQuickSort(right));
            System.out.println(String.join(' ', output));
            return output;
        }
        static void quickSort(int[] ar) {
            List<Integer> intList = new ArrayList<Integer>(ar.length);
            for (int i : ar)
            {
                intList.add(i);
            }
            myQuickSort(intList);
	    }

 
 static void printArray(int[] ar) {
			for(int n: ar){
				System.out.print(n+" ");
			}
	        System.out.println("");
		}
	    
	   public static void main(String[] args) {
	        Scanner in = new Scanner(System.in);
	        int n = in.nextInt();
	        int[] ar = new int[n];
	        for(int i=0;i<n;i++){
	           ar[i]=in.nextInt(); 
	        }
	        quickSort(ar);
	    }    
	}
