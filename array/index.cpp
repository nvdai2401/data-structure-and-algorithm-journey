#include <stdio.h>
#include <conio.h>

#define CAPACITY 8
#define TRUE 1
#define FALSE 0

int arr[CAPACITY] = {1, 2, 3, 4, 5};

// size(): Return number of items are currently stored in array - O(1)
int size() {
	int index = 0;
	
	while(arr[index] != NULL) {
		index++;
	}
	
	return index;
}

// capacity() Return number of items array can hold - O(1)
int capacity() {
	int res = sizeof(arr) / sizeof(arr[0]);
	printf("Capacity: %d", res);
	return res;
}

// If array is empty, return true. Otherwise, return false - O(1)
bool isEmpty() {
	int length = size();
	return length == 0 ? TRUE : FALSE;
}

// itemAt(index): Return item at given index - O(1)
int itemAt(int index) {
	return arr[index];
}

// Append given item to the end of array - O(1) amortized
void append(int item) {
	int length = size();
	arr[length] = item;
}

// insert(item, index): Insert item at given index - O(n)
void insert(int index, int item) {
	int length = size();
	if (length == 0 || index > length) return;
	
	for (int i = length; i >= index; i--) {
		arr[i] = arr[i - 1];
	}
	arr[index] = item;
	length++;
}

// pop(): Remove last item and return its value - O(1) amortized
int pop() {
	int length = size();
	if (length == 0) {
		return 0;
	}
	int lastItem = arr[length - 1];
	
	arr[length - 1] = NULL;

	return lastItem;
}

// removeAt(index): Remove item at given index and return its value O(n)
int removeAt(int index) {
	int length = size();
	if (length == 0 || index > length) return 0;
	int value = arr[index];
	
	for (int i = index; i < length - 1; i++) {
		arr[i] = arr[i + 1];
	}
	arr[length - 1] = NULL;

	return value;
}

void showArray() {
	int index = 0;
	
	while(arr[index] != NULL) {
		printf("%d, ", arr[index]);
		index++;
	}
}

int main() {
	removeAt(2);
	showArray();

	getch();
	return 0;
}
