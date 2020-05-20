/*
<===============Implement Doubly Linked List===============>
*/

#include <stdio.h>
#include<stdlib.h>

#define TRUE 1
#define FALSE 0

struct Node {
	int data;
	struct Node* next;
	struct Node* prev;
};

struct Node* head = NULL;

struct Node* CreateNode(int x) {
	struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
	newNode->data = x;
	newNode->next = NULL;
	newNode->prev = NULL;
	return newNode;
}

// size(): Return number of nodes are currently stored in list.
int size() {
	struct Node* temp = head;
	int length = 0;
	while(temp != NULL) {
		length++;
		temp = temp->next;
	}
	return length;
}

// isEmpty(): Determine list is empty or not.
bool isEmpty() {
	int length = size();
	return length == 0 ? TRUE : FALSE;
}

// valueAt(index): Return value of node at given index.
int valueAt(int index) {
	struct Node* temp = head;
	int count = 0;
	
	while(temp != NULL) {
		if (count == index) return temp->data;
		count++;
		temp = temp->next;
	}
	return -1;
}

// pushFront(item): Add a node with value to the front of list.
void pushFront(int item) {
	struct Node* newNode = CreateNode(item);
	if (head == NULL) {
		head = newNode;
		return;
	}
	head->prev = newNode;
	newNode->next = head;
	head = newNode;
}

// popFront(): Remove front node and return its value.
int popFront() {
	if (head == NULL) return -1;
	struct Node* nextFront = head->next;
	struct Node* frontNode = head;
	head->next = NULL;
	nextFront->prev = NULL;
	head = nextFront;
	
	return frontNode->data;
}

// pushBack(value): Add a node with value to the end of list.
void pushBack(int value) {
	if (head == NULL) return;
	
	struct Node* tailNode;
	struct Node* newNode = CreateNode(value);
	struct Node* temp = head;
	
	while(temp != NULL) {
		if (temp->next == NULL) {
			tailNode = temp;
			break;
		}
		temp = temp->next;
	}
	
	tailNode->next = newNode;
	newNode->prev = tailNode;
}

// popBack(): Remove last node and return its value.
void popBack() {
	if (head == NULL) return;
	
	struct Node* tailNode;
	struct Node* preTail;
	struct Node* temp = head;
	
	while(temp != NULL) {
		if (temp->next == NULL) {
			tailNode = temp;
			break;
		}
		temp = temp->next;
	}
	preTail = tailNode->prev;
	preTail->next = NULL;
	tailNode->prev = NULL;
}

// front(): Return value of front node.
int front() {
	if (head == NULL) NULL;
	return head->data;
}

// back(): Return value of last node.
int back() {
	if (head == NULL) return NULL;
	
	struct Node* temp = head;
	
	while(temp != NULL) {
		if (temp->next == NULL) return temp->data;
		temp = temp->next;
	}
	return -1;
}

// insert(value, index): Insert a node with value at given index.
void insert(int value, int index) {
	if (index == 0) {
		pushFront(value);
		return;
	}
	
	if (index == length) {
		pushBack(value);
		return;
	}
	
	struct Node* temp = head;
	struct Node* newNode = CreateNode(value);
	struct Node* prevNode;
	struct Node* currentNode;
	int length = size();
	int count = 0;

	while(temp != NULL) {
		if (count == index) {
			prevNode = temp->prev;
			currentNode = temp;
			break;
		}
		count++;
		temp = temp->next;
	}
	
	prevNode->next = newNode;
	newNode->prev = prevNode;
	newNode->next = currentNode;
	currentNode->prev = newNode;
}

// removeAt(index): Remove node at given index.
void removeAt(int index) {
	if (index == 0) {
		popFront();
		return;
	}
	
	if (index == length) {
		popBack();
		return;
	}

	struct Node* temp = head;
	struct Node* prevNode;
	struct Node* currentNode;
	struct Node* nextNode;
	int length = size();
	int count = 0;
	
	while(temp != NULL) {
		printf("%d,", count);
		if (count == index) {
			prevNode = temp->prev;
			currentNode = temp;
			nextNode = temp->next;
			break;
		}
		count++;
		temp = temp->next;
	}
	
	prevNode->next = nextNode;
	nextNode->prev = prevNode;
	currentNode = NULL;
}

int main() {
	pushFront(10);
	pushFront(8);
	pushFront(2);
	removeAt(1);
	printf("Res: %d", front());

	return 0;
}
