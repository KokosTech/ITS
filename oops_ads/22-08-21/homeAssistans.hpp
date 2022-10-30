#include "shared.hpp"

class HomeAssistans : public Shared{
private:
    string language;
    string knownUsers[6];
public:
    HomeAssistans(string language);
    HomeAssistans(string language, string name);
    HomeAssistans(string language, string name, string room);

    string voiceCommand();
    void setLanguage(string language);
};

HomeAssistans::HomeAssistans(string language){
    this->language = language;
}

HomeAssistans::HomeAssistans(string language, string name) : Shared(name){
    this->language = language;
}

HomeAssistans::HomeAssistans(string language, string name, string room) : Shared(name, room){
    this->language = language;
}

string HomeAssistans::voiceCommand(){
    cout << "Wow, this is a voice command";
}

void HomeAssistans::setLanguage(string language){
    this->language =language;
}
