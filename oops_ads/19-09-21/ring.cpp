#include <iostream>

using namespace std;

typedef struct Node{
    int data;
    Node* next;
} Node;

class Ring{
    private:
        Node* header = NULL;
        Node* end = NULL;
    public:
        Ring(int data){
            addFirst(data);
        }

        void addFirst(int data){
            if(header == NULL){
                this->header = new Node;
                this->header->data = data;
                this->header->next = this->header;
                this->end = this->header;
                return;
            }

            Node* temp = new Node;
            temp->data = data;
            temp->next = this->header;
            this->header = temp;

            this->end->next = this->header;
        }

        void deleteFirst(){
            Node* templast = new Node;
            templast = this->header;

            this->header = templast->next;
            this->end->next = header;

            delete templast;
        }

        void peek(){
            cout << this->header->data << endl;
        }

        void bPeek(){ // Peek at the first, but through last
            cout << this->end->next->data << endl;
        }

        void peekLast(){
            cout << this->end->data;
        }

        void printAll(){
            Node* templast = new Node;
            templast = this->header;

            do{
                cout << templast->data;
                templast = templast->next;
            } while (templast != this->end->next);
        }

};

int main(){
    Ring node(1);
    node.addFirst(2);
    node.addFirst(3);
    node.addFirst(4);
    node.addFirst(5);
    node.deleteFirst();
    //node.peek();
    node.printAll();
    node.bPeek();

    return 0;
}