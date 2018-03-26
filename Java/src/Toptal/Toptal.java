import java.util.*;
import java.io.*;

public class Toptal {

	public static void main(String[] args) {
        Toptal tt = new Toptal();

        ArrayList ex1 = new ArrayList();
        ex1.add(1);
        ex1.add(2);
        ArrayList x1 = new ArrayList();
        x1.add(3);
        ex1.add(x1);
        ArrayList x2 = new ArrayList();
        x2.add(4);
        ArrayList x3 = new ArrayList();
        x3.add(5);
        x3.add(6);
        x2.add(x3);
        ex1.add(x2);

        ArrayList x4 = new ArrayList();
        ArrayList x5 = new ArrayList();
        x5.add(7);
        x4.add(x5);

        ex1.add(x4);
        ex1.add(8);

        ArrayList answer = tt.ex2(ex1);


        for (Object i: answer) {
            System.out.println(i);
        }
//        System.out.println(tt.ex1("1-1"));
//        System.out.println(tt.ex1("1-2,1-2"));
//        System.out.println(tt.ex1("3-2,2-1,1-4,4-4,5-4,4-2,2-1" ));
//        System.out.println(tt.ex1("5-5,5-5,4-4,5-5,5-5,5-5,5-5,5-5,5-5,5-5"));
	}


    public ArrayList ex2(ArrayList arr) {
        ArrayList<Integer> output = new ArrayList<Integer>();

        for (int i = 0; i < arr.size(); i++) {
            Object o = arr.get(i);
            if (o.getClass() == Integer.class) {
                output.add((Integer)o);
            } else {
                ArrayList<Integer> flattened = ex2((ArrayList)o);
                output.addAll(flattened);
            }
        }
        return output;
    }





















    public class Domino {
        private int left;
        private int right;

        public Domino(String s) {
            String[] n = s.split("-");
            left = Integer.valueOf(n[0]);
            right = Integer.valueOf(n[1]);
        }

        public int getLeft() {
            return left;
        }

        public int getRight() {
            return right;
        }
    }

    public int ex1(String s) {
        String[] dominoString = s.split(",");
        ArrayList<Domino> dominos = new ArrayList<>();
        for (String d : dominoString) {
            dominos.add(new Domino(d));
        }

        int currentMax = 0;
        int max = 0;
        Domino last = null;
        Domino current = null;

        for (int i = 0; i < dominos.size(); i++ ) {
            current = dominos.get(i);
//            System.out.println("i = " + i + " left = " + current.getLeft() + " right = " + current.getRight());
            if (last == null || last.getRight() == current.getLeft()) {
                currentMax++;
            } else {
                currentMax = 1;
            }
            if (currentMax > max) {
                max = currentMax;
            }
            last = current;
        }
        return max;
    }

}