#include <iostream>

using namespace std;

class queue{
private:
    int* data; // Array for elements of the queue (in this case it's simple data a.k.a. int)

    int size = 0; // Current capacity of the queue
    int lenght; // Maximum capacity of the queue

    int node = -1; // Last element in the queue (example 4, 3, 2, 1 - 4 is the node)
public:
    queue(int lenght, int first_data){
        this->data = new int[lenght];
        this->lenght = lenght;
        this->add(first_data);
    }

    void add(int data){
        if (isFull()){
            cout << "The Queue is full!\n";
            return;
        }

        this->data[++this->node] = data;
        ++this->size;
    }

    void delete_last(){
        if(isEmpt()){
            cout << "The Queue is empty, what are you even trying to delete?!\n";
            return;
        }

        for(int i = 0; i < this->node; ++i){
            this->data[i] = this->data[i+1];
        }

        --this->node;
        --this->size;
    }

    int peek(){
        return this->data[node];
    }

    void printQ(){
        for(int i = this->node; i >= 0; --i)
            cout << this->data[i] << " ";
        cout << endl;
    }

    void resizeQ(int size){
        // TBD
    }

    bool isFull(){
        return this->size == this->lenght;
    }

    bool isEmpt(){
        return this->size == 0;
    }

    // Testing funcs:
    void sizeQ(){
        cout << "Size: " << size << endl;
        cout << "Lenght: " << lenght << endl;
        cout << "Last: " << node << endl;
    }

    ~queue(){
        delete[] this->data;
    }
};

int main(){
    queue q(10, 1);
    q.add(2);
    q.add(3);
    q.add(4);
    q.printQ();
    q.delete_last();
    q.printQ();
    q.add(5);
    q.add(6);
    q.add(7);
    q.add(8);
    q.add(9);
    q.add(10);
    q.printQ();
    q.add(11);
    q.printQ();
    q.add(12); // Perfect, gives an error;
    q.printQ();
    q.delete_last();
    q.add(12);
    q.printQ();

    return 0;
}
