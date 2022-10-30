#include <iostream>

using namespace std;

class Cameras{
    double sensor_size_w = 0;
    double sensor_size_h = 0;
    double mp = 0;
    double mp_size = 0;
    bool flashlight = 0;
    double screen_size = 0;
    string screen_technology = "Unset";

    public:
        Cameras();
        Cameras(string _manufacturer, string _name);
        Cameras(string _manufacturer, string _name, double _sensor_size_w, double _sensor_size_h, double _mp, double _mp_size, bool _flashlight);
        
        string manufacturer = "Unset";
        string name = "Unset";

        void print_info();

        void set_screen(string st, double ss);
        void set_sensor(double ss_w, double ss_h, double mpx, double mpxs, bool fl);

        void get_screen();
        void get_sensor();

};