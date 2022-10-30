#include <iostream>

using namespace std;

class Books{
    string font_family = "Chicago";
    int font_size = 12;

    public:
        string title = "Unknown title";
        string author = "Unknown author";
        int pages = 0;

        void print_info(){
            cout << "Title: " << title << endl;
            cout << "Author: " << author << endl;
            cout << "Pages: " << pages << endl;
        }

        void read();

        void edit_font(string ff, int fs){
            font_family = ff;
            font_size = fs;
        }

        void get_font(){
            cout << "Font Family: " << font_family << endl;
            cout << "Font Size: " << font_size << endl;
        }




};

int main(){

    Books book1;

    book1.title = "Steve Jobs";
    book1.author = "Walter Isaacson";
    book1.pages = 529;
    book1.print_info();


    book1.get_font();

    book1.edit_font("Product Sans", 14);

    book1.get_font();

    return 0;
} 