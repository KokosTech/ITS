// Personal Devices
#include "phones.hpp"
#include "computers.hpp"

// Shared "Home" Devices
#include "tvs.hpp"
#include "homeAssistans.hpp"

int main(){
    
    Phones phone("Telenor", "089 898 9898", 6.8, "Android", 11);
    Computers computer("BG", "AMD R9 5900X", 64, "UNKNOWN", 5, "GNU+Linux | Arch Linux", 0);
    
    TVs tv;
    HomeAssistans homeAssistant("English");

    Electronics *e1 = &phone;
    Electronics *e2 = &computer;
    Electronics *e3 = &tv;
    Electronics *e4 = &homeAssistant;

    return 0;
}