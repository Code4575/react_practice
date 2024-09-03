#include <iostream>
using namespace std;

void printNumberPyramid(int n) {
    for (int i = 1; i <= n; i++) {
        // Print leading spaces
        for (int j = i; j < n; j++) {
            cout << " ";
        }
        
        // Print numbers
        for (int k = 1; k <= i; k++) {
            cout << k << " ";
        }
        
        // Move to the next line
        cout << endl;
    }
}

int main() {
    int n;
    cout << "Enter the number of rows: ";
    cin >> n;

    printNumberPyramid(n);

    return 0;
}
