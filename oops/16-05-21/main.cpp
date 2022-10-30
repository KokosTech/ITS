#include <iostream>

using namespace std;

class Student{
    string id;
    string fName;
    string lName;

    public:
        float grades[100];
        Student();

        Student(string _fName, string _lName){
            setNames(_fName, _lName);
        }

        Student(string _fName, string _lName, string _id){
            setNames(_fName, _lName);
            setID(_id);
        }

        Student (const Student &std){
            fName = std.fName;
            lName = std.lName;
            id = std.id;
            grades = std.grades;
        }

        void printStudent(){
            cout << "Name: " << fName, lName << endl;
            cout << "ID: " << id << endl;
        }

        void setNames(string _fName, string _lName){
            fName = _fName;
            lName = _lName;           
        }

        void setID(string _id){
            id = _id;
        }

        ~String(){
            fName = NULL;
            lName = NULL;
            id = NULL;
        }
};

int main(){


    return 0;
}