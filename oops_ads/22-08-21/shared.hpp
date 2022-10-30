#ifndef SHARED
#define SHARED
#include "electronics.hpp"


class Shared : public Electronics{
private:
    string location;
    string room;
public:
    Shared();
    Shared(string name);
    Shared(string name, string room);

    string getLoc();
    void setLoc(string location);

    string getRoom();
    void setRoom(string room);

    void connect(string networkSSID);

    void update(double OSVersion);
};

Shared::Shared(){
    cout << "Created Shared device without any values\n";
}

Shared::Shared(string name){
    this->name = name;
}

Shared::Shared(string name, string room){
    this->name = name;
    this->room = room;
}

void Shared::setLoc(string location){
    cout << "Setting location to " << location;
    this->location = location;
}

void Shared::setRoom(string room){
    cout << "Setting room to " << room;
    this->room = room;
}

string Shared::getLoc(){
    return location;
}

string Shared::getRoom(){
    return room;
}

void Shared::connect(string networkSSID){
    cout << "Open your phone's 'Home' app and type this code: 34FS\n";
    cout << "Saving " <<  networkSSID << " as Home Network...\n";
    this->networkSSID = networkSSID;
}

void Shared::update(double OSVersion = 0){
    cout << "Updating...\n";
}

#endif