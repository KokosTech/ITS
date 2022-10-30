#include <iostream>
#include <ctime>
#define SIZE 3

using namespace std;

void ex1(){
    int arr1[3][2];
    int arr2[3][2];

    cout << "\nEx1:\n";

    if(sizeof(arr1) == sizeof(arr2)){
        int rows =  sizeof(arr1) / sizeof(arr1[0]);
        int cols = sizeof(arr1[0]) / sizeof(int);

        int **final_arr = new int*[rows];
        for(int i = 0; i < rows; ++i)
            final_arr[i] = new int[cols];

        for(int i = 0; i < rows; ++i){
            for(int j = 0; j < cols; ++j){
                arr1[i][j] = 1 + (rand() % 9);
                arr2[i][j] = 1 + (rand() % 9);
                final_arr[i][j] = arr1[i][j] + arr2[i][j];
                cout << final_arr[i][j] << ' ';
            }
            cout << endl;
        }

        for(int i = 0; i < rows; ++i)
            delete [] final_arr[i];

        delete [] final_arr;
    }
}

void multiplyMatrixWithScalar(int m[SIZE][SIZE], int scalar){
    for(int i = 0; i < SIZE; ++i)
        for(int j = 0; j < SIZE; ++j)
            m[i][j] *= scalar;
}

void ex2(){
    int arr[SIZE][SIZE];

    cout << "\nEx2:\n";
    cout << "Before multiplication:\n";
    for(int i = 0; i < SIZE; ++i){
        for(int j = 0; j < SIZE; ++j){
            arr[i][j] = 1 + (rand() % 9);
            cout << arr[i][j] << ' ';
        }
        cout << endl;
    }
    
    multiplyMatrixWithScalar(arr, 2);

    cout << "After multiplication:\n";

    for(int i = 0; i < SIZE; ++i){
        for(int j = 0; j < SIZE; ++j)
            cout << arr[i][j] << ' ';
        cout << endl;
    }
       
}

int largest(int arr[], int n){
    int max = arr[0];
 
    for (int i = 1; i < n; i++)
        if (arr[i] > max)
            max = arr[i];
 
    return max;
}

void ex3(){
    int n, m;

    cout << "\nEx3:\n";

    cout << "Enter n & m: ";
    cin >> n >> m;

    int **arr = new int*[n];
    for(int i = 0; i < n; ++i)
        arr[i] = new int[m];
            
    cout << "Enter " << n * m << " numbers: ";
    for(int i = 0; i < n; ++i)
        for(int j = 0; j < m; ++j)
            cin >> arr[i][j];

    for(int i = 0; i < n; ++i)
        cout << "Largest number in ROW" << i << " is: " << largest(arr[i], m) << endl;
            
}

int main(){
    srand((unsigned) time(0));
    
    ex1();
    ex2();
    ex3();

    return 0;
}