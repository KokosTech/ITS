#include "shared.hpp"
#define APP_LIMIT 100

class TVs : public Shared{
private:
    string apps[APP_LIMIT];
    bool hdrStatus;
public:
    TVs();
    TVs(string name);
    TVs(string name, string room);

    void hdr(bool hdrStatus);
};

TVs::TVs() : Shared(){
}

TVs::TVs(string name) : Shared(name){
}

TVs::TVs(string name, string room) : Shared(name, room){
}

void TVs::hdr(bool hdrStatus){
    cout << "Setting HDR from " << this->hdrStatus << " to " << hdrStatus << endl;
    this->hdrStatus = hdrStatus;
}