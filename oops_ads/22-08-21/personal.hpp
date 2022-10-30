#ifndef ELECTRONICS
#define PERSONAL
#include "electronics.hpp"

class Personal : public Electronics{
protected:
    string networkPassword;

    string OSName;
    double OSVersion;
public:
    string username;

    Personal(string OSName, double OSVersion);
    Personal(string name, string username, string OSName, double OSVersion);

    string getOS();
    void setOS(string OSName, double OSVersion);

    void update(double OSVersion);
    void connect(string networkSSID, string password);
};

Personal::Personal(string OSName, double OSVersion){
    this->OSName = OSName;
    this->OSVersion = OSVersion;
}

Personal::Personal(string name, string username, string OSName, double OSVersion){
    this->name = name;
    this->username = username;

    this->OSName = OSName;
    this->OSVersion = OSVersion;
}

string Personal::getOS(){
    return OSName + " " + to_string(OSVersion);
}

void Personal::setOS(string OSName, double OSVersion){
    cout << "Uninstalling " << this->OSName << "...\n";
    this->OSName = OSName; this->OSVersion = OSVersion;
    cout << "Installing " << OSName << " " << OSVersion << "...\n";
}

void Personal::update(double OSVersion){
    cout << "Updating " << this->OSName << " " << this->OSVersion << " to "
        << this->OSName << " " << OSVersion << "...\n";
    this->OSVersion = OSVersion;
}

void Personal::connect(string networkSSID, string networkPassword){
    cout << "Connecting to " << networkSSID << endl;
    this->networkSSID = networkSSID; this->networkPassword = networkPassword;
}

#endif