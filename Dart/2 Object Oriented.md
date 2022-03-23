
# OBJECT ORIENTED PROGRAMMING 
Object-oriented programming (OOP) is a computer programming model that organizes software design around data, or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior.

- Abstraction
- Encapsulation
- Inheritance
- Polymorphism

## Abstraction
Abstraction refers to the user’s interaction with just a subset of an object’s characteristics and operations. To access a complicated item, abstraction uses simpler, high-level techniques.
- Displaying only essential information and hiding the details.
- The class helps us to group data members and member functions using available `Access specifiers`. A Class can decide which data member will be visible to the outside world and which is not.

## Encapsulation
Encapsulation is the process of enclosing all critical information inside an object and only revealing a subset of it to the outside world. For example, code inside the class template defines attributes and behaviors. 
- Process which enclose Methods and variables in one single unit called class

## Inheritance 
The attributes that you inherit from your parents are a simple illustration of inheritance. Classes may inherit characteristics from other classes thanks to inheritance

- Code reusability
- Ease to add new feature
- Overriding

## Polymorphism
Polymorphism refers to the creation of items that have similar behavior. For example, objects may override common parent behaviors with particular child behaviors through inheritance. Method overriding and method overloading are two ways that polymorphism enables the same method to perform various actions. 

- Ability to used in more than one form.
- Function overloading & Operator Overloading

# CLASS
- Class is a blueprint of an object
- Class has properties and functions

```dart
class Question{
    String questionText;
    bool questionAnswer;

    // CONSTRUCTOR
    Question({String q,bool a}){
            questionText = q;
            questionAnswer = a;
    }
}
```

``` dart
//import to Main
import 'question.dart'

// Create Object
Question q1 = Question(q:'Y',a:false);

// List of Object
List<Question> questionBank = [
    Question(q:'You can lead a cow down stairs but not up stairs.',a:false),
    Question(q:'Approximately one quarter of human bones are in the feet.',a:true),
    Question(q:'You can lead a cow up and down',a:false)
]

````
# ABSTRACTION

Abstraction means displaying only essential information and hiding the details. Data abstraction refers to providing only essential information about the data to the outside world, hiding the background details or implementation.

- Make things more modular
- Make new class and separate different function 


## ENCAPSULATION
Encapsulation is an Object Oriented Programming concept that binds together the data and functions that manipulate the data, and that keeps both safe from outside interference and misuse.

``` 
Putting an '_' make the variable private which can be only access by member of the class
```

```dart

class QuizBrain {

  // QUESTION BANK
  List<Question> _questionBank = [
    Question('Some cats are actually allergic to humans', true),
    Question('You can lead a cow down stairs but not up stairs.', false)
  ];
  int _questionNumber = 0;

  void nextQuestion() {
    if (_questionNumber < _questionBank.length - 1) {
      _questionNumber++;
    }
  }

  String getQuestionText() {
    return _questionBank[_questionNumber].questionText;
  }

  bool getCorrectAnswer() {
    return _questionBank[_questionNumber].questionAnswer;
  }
}
```

## INHERITANCE
Inheritance is a mechanism in which one class acquires the property of another class. For example, a child inherits the traits of his/her parents.

```dart
void main(){

    Car myNormalCar = Car();
    print(myNormalCar.numberOfSeat);
    myNormalCar.drive();

    ElectricCar tesla = ElectricCar();
    tesla.drive(); // Inherited from Car
    tesla.charge();
}

class Car {
    int numberOfSeat = 5;
    void drive(){
        print('Wheels turn');
    }
}
class ElectricCar extends Car {
    void charge (){
        print('Charging ...');
    }
}
```

## POLYMORPHISM
Polymorphism is the ability of an object to take on many forms. The most common use of polymorphism in OOP occurs when a parent class reference is used to refer to a child class object.

- Method Overriding
- No Method Overloading in dart

```dart
void main(){

    Car myNormalCar = Car();
    print(myNormalCar.numberOfSeat);
    myNormalCar.drive();

    LevitatingCar levtron = LevitatingCar();
    levtron.drive(); // Inherited from Car
}

class Car {
    int numberOfSeat = 5;
    void drive(){
        print('Wheels turn');
    }
}
class LevitatingCar extends Car {
    
    @override
    void drive(){
        print('Gliding Forward ...');
    }
}
```

```dart
void main(){
    SelfDrivingCar mySelfDcar = SelfDrivingCar();
    mySelfDcar.drive();
}


class Car {
    int numberOfSeat = 5;
    void drive(){
        print('Wheels turn');
    }
}
class SelfDrivingCar extends Car {
    
    String Destination;
    SelfDrivingCar(String userDestination){
        Destination = userDestination;
    }

    @override
    void drive(){
        Super.drive();
        print('Driving to $Destination');
    }
}
```
