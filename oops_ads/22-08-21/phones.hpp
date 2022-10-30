#include "personal.hpp"

class Phones : public Personal{
private:
    string carrier;
    double screenSize;
public:
    string phoneNumber;

    Phones(string carrier, string phoneNumber, double screenSize, string OSName, double OSVersion);
    Phones(string carrier, string phoneNumber, double screenSize, string name, string username, string OSName, double OSVersion);

    void sendText(string rec, string text);
    void recText(string sender, string text);
    void call();
};

Phones::Phones(string carrier, string phoneNumber, double screenSize, string OSName, double OSVersion) : Personal(OSName, OSVersion){
    this->carrier = carrier;
    this->phoneNumber = phoneNumber;
    this->screenSize = screenSize;
}

Phones::Phones(string carrier, string phoneNumber, double screenSize, string name, string username, string OSName, double OSVersion) : Personal(name, username, OSName, OSVersion){
    this->carrier = carrier;
    this->phoneNumber = phoneNumber;
    this->screenSize = screenSize;
}
