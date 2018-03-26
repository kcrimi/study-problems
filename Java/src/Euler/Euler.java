package Euler;
import java.util.*;
import java.io.*;

public class Euler {

	public static void main (String[] args) {
		Euler e = new Euler();
		System.out.println(e.e3(6008143));
	}

	// 1) Multiples of3 and 5
	public int e1(int limit) {

		int sum = 0;
		for (int i = 1; i < limit; i++) {
			if (i % 3 == 0 || i % 5 == 0) {
				sum += i;
			}
		}
		return sum;
	}

	//2) Even Fib numbers
	public int e2(int limit) {
		int sum = 0;
		int last = 1;
		int current = 1;
		int next = last+current;
		while (next < limit) {
			if (next % 2 == 0) {
				sum+= next;
			}
			last = current;
			current = next;
			next = last+current;
		}
		return sum;
	}

	// 3) Larges prime factor
	public int e3(int number) {
		return number;
	}
}