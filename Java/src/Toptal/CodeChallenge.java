import java.util.*;
import java.io.*;


class CodeChallenge {

	public static void main(String[] args) {
		CodeChallenge cc = new CodeChallenge();
		// System.out.println(cc.challenge1(10000));
		// System.out.println(cc.challenge1(100000));
		System.out.println(Arrays.toString(cc.challenge2("able")));
	}

	public String[] challenge2(String s){
		Map<String, Integer> charCount = new HashMap<String, Integer>(); 

		for (int i = 0; i < s.length(); i++) {
			String c = s.substring(i,i+1);
			if (charCount.containsKey(c)) {
				charCount.put(c, charCount.get(c)+1);
			} else {
				charCount.put(c, 1);
			}
		}



		String file = "/Users/kevin/Desktop/wl.txt";
		List<String> output = new ArrayList<String>();
		String line = "";

		try (BufferedReader br = new BufferedReader(new FileReader(file))){
			while ((line = br.readLine()) != null) {
				Map<String, Integer> tally = new HashMap<String, Integer>();
				tally.putAll(charCount);
				boolean anagram = true;
				for (int i = 0; i < line.length(); i++){
					String c = line.substring(i,i+1);
					if (tally.containsKey(c)) {
						tally.put(c, tally.get(c)-1);
						if (tally.get(c) == 0){
							tally.remove(c);
						}
					} else {
						anagram = false;
						break;
					}
				}
				if (tally.size() == 0 && anagram == true) {
					output.add(line);
				}

			}
		} catch (IOException x){
			System.err.format("IOEXception: %s%n",x);
		}
		
		String[] outArray = new String[output.size()];
		for (int i = 0; i < output.size(); i++){
			outArray[i] = output.get(i);
		}

		return outArray;
	}

	public String challenge1(int n) {
		String output = "";
		int digitPlace = 0;

		if (n ==0) {
			return "0";
		}

		while (n > 0) {
			if (digitPlace % 3 ==0 && digitPlace > 0){
				output = ","+output;
			}
			int digit = n % 10;
			n = n / 10;
			output = digit +output;
			digitPlace++;
		}

		return output;
	}

	public void arrayTest() {
		List<Integer> l = new ArrayList<>();
		l.add(2);
		l.add(42);
		l.add(0);

		int[] arr = l.toArray(new Integer[l.size()]);
	}
}