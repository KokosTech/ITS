#include <iostream>

using namespace std;

template <class T, class U>

class Templates{
    private:
        T phoneNumber;
        U name;
    public:
        Templates(){}

        Templates(T a, U b){
            phoneNumber = a;
            name = b;
        }

        void print_info(){
            cout << name << " " << phoneNumber << endl;
        }

        ~Templates(){}
};

template <class T>

class Templates<T, int>{
    public:
        Templates(){}

        Templates(T a, int b){
            cout << "NAME MUST BE A STRING!!!\n";
        }


        ~Templates(){}
};

// Function

template <class T0, class U0>
// T and U to be numbers: int, float, double
T0 updateBattery(T0 normalCapacity, U0 addedCapacity){
    return normalCapacity + addedCapacity;
}

int main(){

    cout << updateBattery(555.55, 50) << endl;

    Templates <string, string> tobj("0309320432", "Kaloyan");
    tobj.print_info();

    Templates <int, string> tobj2(55505453, "Kaloyan");
    tobj2.print_info();

    Templates <int, int> tobj3(55505453, 93293);
    return 0;
}

