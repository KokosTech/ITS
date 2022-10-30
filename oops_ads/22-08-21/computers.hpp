#include "personal.hpp"

class Computers : public Personal{
private:
    string keyboardLayout;
public:
    string cpu;
    int ram;
    string gpu;
    double storage; // in TB

    void setKL(string keyboardLayout);
    string getKL();

    Computers(string keyboardLayout, string OSName, double OSVersion);
    Computers(string keyboardLayout, string cpu, int ram, string gpu, double storage, string OSName, double OSVersion);
};

Computers::Computers(string keyboardLayout, string OSName, double OSVersion) : Personal(OSName, OSVersion){
    this->keyboardLayout = keyboardLayout;
}

void Computers::setKL(string keyboardLayout){
    cout << "Changing KL from " << this->keyboardLayout << " to " << keyboardLayout << endl;
    this->keyboardLayout = keyboardLayout;
}

string Computers::getKL(){
    return this->keyboardLayout;
}

Computers::Computers(string keyboardLayout, string cpu, int ram, string gpu, double storage, string OSName, double OSVersion) : Personal(OSName, OSVersion){
    this->keyboardLayout = keyboardLayout;
    this->cpu = cpu;
    this->ram = ram;
    this->gpu = gpu;
    this->storage = storage;
}

