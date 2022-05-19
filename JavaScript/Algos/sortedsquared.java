import java.util.*;

class Program {

    public int[] sortedSquaredArray(int[] array) {
    int[] newArray = new int[array.length];
		int smallerIndex = 0;
		int largerIndex = array.length-1;
		for (int i = array.length -1; i>=0; i--){
			int smallerValue = array[smallerIndex];
			int largerValue = array[largerIndex];
				if(Math.abs(smallerValue)>Math.abs(largerValue)){
					newArray[i] = smallerValue * smallerValue;
					smallerIndex++;
				}else{
					newArray[i] = largerValue * largerValue;
					largerIndex--;
				}
			
		}
    return newArray;
    }
}
