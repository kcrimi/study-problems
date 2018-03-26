package Sorts;

import java.util.*;

/**
 * Created by kevin on 5/18/16.
 */
public class Reference {

    public static void main(String[] args) {
        System.out.println("testing");
        Reference r = new Reference();
        int[] test = new int[]{4,7,21,100,2,23,15,42};
        System.out.println("MergeSort = " + Arrays.toString(r.mergesort(test)));
//        System.out.println("Before = " + Arrays.toString(test));
//        r.quickSort(test);
//        System.out.println("After = " + Arrays.toString(test));
//        System.out.println("list MergeSort = "+r.mergeSort(new LinkedList<>(Arrays.asList(4, 7, 21, 100, 2, 23, 15, 42))));
        ArrayList<Integer> array = new ArrayList<Integer>(Arrays.asList(4,7,21,100,2,23,15,42));
        System.out.println("Before = "+array);
        r.quickSort(array);
        System.out.println("QSort = "+array);
    }

    public static void datasets() {

        // Set
        HashSet<String> set = new HashSet<>();
        boolean changed = set.add("Object");
        changed = set.remove("Object");
        set.addAll(new ArrayList<>());

        //Map
        HashMap<String, Integer> map = new HashMap<>();
        boolean contains = map.containsKey("Key");
        int previous = map.put("Key", 4);

        //ArrayList
        ArrayList<String> arrayList = new ArrayList<>();
        List<String> newArrayList = new ArrayList<>(Arrays.asList("item 1", "item2"));
        arrayList.toArray(new String[0]);
        int indexOrNegativeOne = arrayList.indexOf("Find");
        arrayList.iterator().next();

        //LinkedList
        LinkedList<Integer> linkedList = new LinkedList<>();
            //add
            linkedList.addFirst(23);
            linkedList.addLast(21);
            linkedList.offer(2);

            //popping
            linkedList.pop();
            linkedList.pollFirst();
            linkedList.pollLast();

            linkedList.descendingIterator();
            linkedList.iterator();
    }

    /*  Merge sort implemented with arrays */
    public int[] mergesort(int[] array) {
        if (array.length <= 1) {
            return array;
        }

        int split = array.length / 2;
        int[] a1 = Arrays.copyOfRange(array, 0, split);
        int[] a2 = Arrays.copyOfRange(array, split, array.length);

        a1 = mergesort(a1);
        a2 = mergesort(a2);

        return merge(a1, a2);
    }

    public int[] merge(int[] a1, int[] a2) {

        int[] output = new int[a1.length + a2.length];
        int index = 0;
        int index1 = 0;
        int index2 = 0;

        while (index < output.length) {
            if (index1 < a1.length && (index2 == a2.length || a1[index1] < a2[index2])){
                output[index] = a1[index1];
                index1++;
            } else {
                output[index] = a2[index2];
                index2++;
            }
            index++;
        }
        return output;
    }


    /*  Merge sort implemented with LinkedLists */
    public LinkedList<Integer> mergeSort(LinkedList<Integer> array) {
        if (array.size() <= 1) {
            return array;
        }
        int split = array.size() / 2;
        LinkedList<Integer> a = new LinkedList<>(array.subList(0, split));
        LinkedList<Integer> b = new LinkedList<>(array.subList(split, array.size()));
        return merge(mergeSort(a), mergeSort(b));
    }

    public LinkedList<Integer> merge(LinkedList<Integer> a, LinkedList<Integer> b) {
        LinkedList<Integer> out = new LinkedList<>();
        while (a.size() > 0 || b.size() > 0) {
            if (a.size() > 0 && ( b.size() == 0 || a.peekFirst() < b.peekFirst())) {
                out.add(a.pop());
            } else {
                out.add(b.pop());
            }
        }
        System.out.println(out);
        return out;
    }

    // Quick Sort implemented with array
    public void quickSort(int[] array) {
        qSort(array, 0, array.length);
    }

    public void qSort(int[] array, int left, int right) {
        if (right - left <= 1) {
            return;
        }
        int pivot = array[(left + right) / 2];

        int start = left;
        int end = right-1;

        while (start < end) {
            if (array[start] < pivot) {
                start++;
            } else if (array[end] > pivot) {
                end--;
            } else {
                int placeholder = array[start];
                array[start] = array[end];
                array[end] = placeholder;
                start++;
                end--;
            }
        }

        qSort(array, left, end);
        qSort(array, end,right);
    }

    // Quick Sort implemented with ArrayList
    public void quickSort(ArrayList<Integer> array) {qSort(array, 0, array.size());}

    public void qSort(ArrayList<Integer> array, int left, int right) {
        if (right - left <= 1) {
            return;
        }
        int pivot = array.get((left + right) / 2);
        int start = left;
        int end = right-1;
        while (start < end) {
            if (array.get(start) <  pivot) {
                start++;
            } else if (array.get(end) > pivot){
                end--;
            } else {
                int placeholder = array.get(end);
                array.set(end, array.get(start));
                array.set(start, placeholder);
                end--;
                start++;
            }
        }
        qSort(array, left, end);
        qSort(array, end, right);
    }

}
