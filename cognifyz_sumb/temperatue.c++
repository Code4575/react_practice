#include <iostream>
using namespace std;

// Function to convert Fahrenheit to Celsius
double fahrenheitToCelsius(double fahrenheit) {
    return (fahrenheit - 32) * 5.0 / 9.0;
}

// Function to convert Celsius to Fahrenheit
double celsiusToFahrenheit(double celsius) {
    return (celsius * 9.0 / 5.0) + 32;
}

int main() {
    double temperature;
    int choice;

    while (true) {
        cout << "Temperature Converter" << endl;
        cout << "1. Convert Fahrenheit to Celsius" << endl;
        cout << "2. Convert Celsius to Fahrenheit" << endl;
        cout << "3. Exit" << endl;
        cout << "Enter your choice: ";
        cin >> choice;

        if (choice == 3) {
            cout << "Exiting..." << endl;
            break;
        }

        cout << "Enter temperature: ";
        cin >> temperature;

        switch (choice) {
            case 1:
                cout << temperature << " Fahrenheit is " << fahrenheitToCelsius(temperature) << " Celsius." << endl;
                break;
            case 2:
                cout << temperature << " Celsius is " << celsiusToFahrenheit(temperature) << " Fahrenheit." << endl;
                break;
            default:
                cout << "Invalid choice. Please try again." << endl;
        }
        cout << "-----------------------------" << endl;
    }

    return 0;
}
