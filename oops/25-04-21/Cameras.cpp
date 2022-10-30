#include "Cameras.h"

Cameras::Cameras(){
    cout << "Please provide more information!" << endl;
}
Cameras::Cameras(string _manufacturer, string _name){
    manufacturer = _manufacturer;
    name = _name;
}
Cameras::Cameras(string _manufacturer, string _name, double _sensor_size_w, double _sensor_size_h, double _mp, double _mp_size, bool _flashlight){
    manufacturer = _manufacturer;
    name = _name;
    set_sensor(_sensor_size_w, _sensor_size_h, _mp, _mp_size, _flashlight);
}

void Cameras::print_info(){
    cout << manufacturer << " " << name << " specs: " << endl;
    get_sensor();
    get_screen();
}

void Cameras::set_screen(string st, double ss){
    screen_size = ss;
    screen_technology = st;
}

void Cameras::set_sensor(double ss_w, double ss_h, double mpx, double mpxs, bool fl){
    sensor_size_w = ss_w;
    sensor_size_h = ss_h;
    mp = mpx;
    mp_size = mpxs;
    flashlight = fl;
}

void Cameras::get_screen(){
    cout << "Screen: " << screen_size << "inch, " << screen_technology << endl;
}

void Cameras::get_sensor(){
    cout << "Sensor: " << mp << "MP " << "(" << mp_size << "), " << sensor_size_w << "x" << sensor_size_h << endl;
    cout << "Flashlight: " << flashlight << endl;
}