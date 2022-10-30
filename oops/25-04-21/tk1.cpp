#include "Cameras.h"

int main(){

    Cameras cameras("Sony", "a6000", 23.5 , 15.6, 24, 3.92, 1);
    Cameras* camera = &cameras;
    camera->print_info();

    return 0;
} 