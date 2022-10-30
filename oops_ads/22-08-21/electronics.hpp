#ifndef ELECTRONICS
#define ELECTRONICS

#include <iostream>

using namespace std;

class Electronics{
protected:
    int status; // 0 - off, 1 - on, -1 - sleep

    string MAC_ADDR = "";
    string networkSSID; // Wi-Fi Name

public:
    string name = "Default Name"; // Device name

    virtual void update(double OSVersion = 0) = 0;

    void switchDevice(int status);
    virtual void connect(string networkSSID);

    void setMAC();
    string getMAC();
};

void Electronics::switchDevice(int status){
    this->status = status;
}

void Electronics::connect(string networkSSID){
    this->networkSSID = networkSSID;
    cout << "Connecting to " << networkSSID << "...\n";
}

void Electronics::setMAC(){
    cout << "THIS CANNOT BE UNDONE NOR CHANGED!\n PRESS ENTER TO CONTINUE...\n";
    getchar();

    this->MAC_ADDR = "AF:00:21:43:4A";

    cout << "SETTING MAC ADDRESS TO " << this->MAC_ADDR << "...";
}

string Electronics::getMAC(){
    return this->MAC_ADDR;
}

#endif