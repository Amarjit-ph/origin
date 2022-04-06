# State
State is the information that can be read synchronously when the widget is built and might change during the lifetime of the widget,
State objects are created by the framework.

`setState()` sets properties of state object which in turn triggers the update to the UI.

# 1. Stateless Widget
The widgets whose state can not be altered once they are built are called stateless widgets. These widgets are immutable once they are built i.e any amount of change in the variables, icons, buttons, or retrieving data can not change the state of the app. Below is the basic structure of a stateless widget.


EXAMPLE:
```dart
import 'package:flutter/material.dart'; 
void main() => runApp(MyApp()); 
  
class MyApp extends StatelessWidget { 
  @override 
  Widget build(BuildContext context) { 
    return Container(); 
  } 
} 
```
# 2. Stateful Widgets
The widgets whose state can be altered once they are built are called stateful Widgets. These states are mutable and can be changed multiple times in their lifetime. This simply means the state of an app can change multiple times with different sets of variables, inputs, data. Below is the basic structure of a stateful widget.

`Always put the state variables to setState() to rerender when change`

EXAMPLE:
``` dart
class DicePage extends StatefulWidget {
  DicePage({Key key}) : super(key: key);
  @override
  _DicePageState createState() => _DicePageState();
}

class _DicePageState extends State<DicePage> {
  int leftDiceNumber = 1; //STATE VARIABLE
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Row(
        children: [
          Expanded(
            child: FlatButton(
              onPressed: () {
                  //SET STATE
                setState(() { 
                  leftDiceNumber = 6;
                });
              },
              child: Image.asset('images/dice$leftDiceNumber.png'),
            ),
          )
        ],
      ),
    );
  }
}
```
# 3. Stateful Lifecycle Methods

```dart
@override
void initState(){
  super.initState();
}

@override
Widget build(BuildContext context){
  return null;
}
@override
void deactivate(){
  super.deactivate();
}

```

# 4. Private Property

```dart 
class _MyAppState extends State<MyApp> {
    var _count = 0;
    void _increase () {
        setState((){
            _count = _count+1;
        })
    }
}
```




