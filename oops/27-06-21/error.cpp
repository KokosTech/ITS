#include <iostream>

using namespace std;

template <class U, class T>

U divide(U n0, T n1){
    try{
        if(n1 == 0)
            throw 0;
        else if (!strcmp(typeid(n0).name(), "c") || !strcmp(typeid(n1).name(), "c"))
            throw 12;

    } catch(int x) {
        if (x == 0)
            cout << "CAN'T DIVIDE BY 0; Error: " << x << endl;
        else if (x == 12)
            cout << "VARS MUST BE NUMBERS Error: " << x << endl;
        return 0;
    }
    return n0 / n1;
}

int main(){
    cout << "Result: " << divide(5, 2) << endl;
    divide(5, 0);
    divide('f', 3);
}