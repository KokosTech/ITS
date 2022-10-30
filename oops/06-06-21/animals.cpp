#include <iostream>
#include <string.h>

//Task1 - Create 3 objects based on the Logic A is B(fox is a mammal, mammal is an animal) 
//create 3 constructors per each, each should have at least 3 attributes (at least one private) and 3 methods (excluding setters and getters) 
//each should have at least one unique attribute or method and operator overloading for at least 2 operators

using namespace std;

class Animal{
    protected:
    string breathing = "O2";

    public:
    string animalType = NULL;
    
    string food = NULL;
    double speed = 0;

    void eat(){
        cout << "I'm eating " << food << ".\n";
    }

    void sleep(){

    }

    double move(double distance){
        return (distance / speed);
    }

    Animal();
    Animal(string animalType, string food, double speed){
        this->animalType = animalType;
        this->food = food;
        this->speed = speed;
    }
    Animal(const Animal &obj){
        food = obj.food;
        animalType = obj.animalType;
        speed = obj.speed;
        breathing = obj.breathing;
    }

    void eat(){
        cout << "I'm eating " << food << ".\n";
    }

    void sleep(){

    }

    double move(double distance){
        return (distance / speed);
    }

    Animal operator-(const Animal &obj){
        Animal res;
        
        if(speed != obj.speed)
            res.speed = 0;
        
        if(animalType == obj.animalType)
            res.animalType = animalType;
        
        if(food == obj.food)
            res.food = food;
    
        return res;
    }

    Animal operator+(const Animal &obj){
        Animal res;

        res.speed = speed + obj.speed;
        res.animalType = animalType;
        res.food = food;

        return res;
    }
};

class Mammal : public Animal{
    public:
    string mammalType = NULL;

    Mammal();
    Mammal(string animalType, string mammalType, string food, double speed){
        this->animalType = animalType;
        this->mammalType = mammalType;
        this->food = food;
        this->speed = speed;
    }
    Mammal (const Mammal &obj){
        food = obj.food;
        animalType = obj.animalType;
        mammalType = obj.mammalType;
        speed = obj.speed;
        breathing = obj.breathing;
    }

    Mammal operator-(const Mammal &obj){
        Mammal res;
        
        if(speed != obj.speed)
            res.speed = 0;
        
        if(animalType == obj.animalType)
            res.animalType = animalType;
        
        if(mammalType == obj.mammalType)
            res.mammalType = mammalType;

        if(food == obj.food)
            res.food = food;
    
        return res;
    }

    Mammal operator+(const Mammal &obj){
        Mammal res;

        res.speed = speed + obj.speed;
        res.animalType = animalType;
        res.mammalType = mammalType;
        res.food = food;

        return res;
    }
};

class Fox : public Mammal{
    string foxType = NULL;

    public:

    Fox();
    Fox(string animalType, string mammalType, string foxType, string food, double speed){
        this->animalType = animalType;
        this->mammalType = mammalType;
        this->foxType = foxType;
        this->food = food;
        this->speed = speed;
    }
    Fox(const Fox &obj){
        food = obj.food;
        animalType = obj.animalType;
        mammalType = obj.mammalType;
        foxType = obj.foxType;
        speed = obj.speed;
        breathing = obj.breathing;
    }

    void eat(){
        cout << "Fox eating " << food << ".\n";
    }

    Fox operator-(const Fox &obj){
        Fox res;
        
        if(speed != obj.speed)
            res.speed = 0;
        
        if(animalType == obj.animalType)
            res.animalType = animalType;
        
        if(mammalType == obj.mammalType)
            res.mammalType = mammalType;

        if(foxType == obj.foxType)
            res.foxType = foxType;

        if(food == obj.food)
            res.food = food;
    
        return res;
    }

    Fox operator+(const Fox &obj){
        Fox res;

        res.speed = speed + obj.speed;
        res.animalType = animalType;
        res.mammalType = mammalType;
        res.foxType = foxType;
        res.food = food;

        return res;
    }
};

int main(){
    Mammal m;
    Fox f;

    Animal *a1 = &m;
    Animal *a2 = &f;
}
