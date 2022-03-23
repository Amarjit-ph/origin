# User Interface
Flutter widgets are built using a modern framework that takes inspiration from React. The central idea is that you build your UI out of widgets. Widgets describe what their view should look like given their current configuration and state. When a widget’s state changes, the widget rebuilds its description, which the framework diffs against the previous description in order to determine the minimal changes needed in the underlying render tree to transition from one state to the next.

# 1. Widget

The core concept of the Flutter framework is Everything is a widget. Widgets are basically user interface components used to create the user interface of the application.

`Types of Widget`

We can split the Flutter widget into two categories:

1. Visible (Output and Input) - Text,button,Image
2. Invisible (Layout and Control) - Column,Row,Center,Scaffold


# 2. Main
The Starting point of all our Flutter apps
```
main() > runApp() > MaterialApp() > Scaffold()
```

``` dart
import 'package:flutter/material.dart';
// Main function is the Starting point of all our Flutter apps
void main() {
  runApp(MaterialApp(
    home: Center(
      child: Text('HELLO WORLD'),
    ),
  ));
}
```
# 3. Scaffold

Scaffold
Implements the basic material design visual layout structure.

``` dart
void main() {
  runApp(
    MaterialApp(
      debugShowCheckedModeBanner: false, // Remove Banner
      home: Scaffold(
          appBar: AppBar(
            title: Text('Im Rich'),
            backgroundColor: Colors.blueGrey[800],
          ),
          body: Center(
            child: Image(
              image: NetworkImage(
                  'https://www.w3schools.com/w3css/img_lights.jpg'),
            ),
          )),
    ),
  );
}
```

# 4. Assets

Tip : Be careful about Indentation in YAML files
each indentation takes two spaces

1. Configure in YAML files
``` yaml
 # To add assets to your application, add an assets section, like this:
  assets:
  - images/diamond.png
  # Everything inside images
  - images/
```
2. Add in file
``` dart
body: Center(
    child: Image(
        image: 
        AssetImage('images/diamond.png'),
          ),
        ),
```
# 4. Application Icons

1. Android <br>
android/app/src/main/res 

2. Ios<br>
ios/Runner/Assests.xcassets

Android Studio
- Right click on res and select Image Asset
- Select Path and Replace

Build application icons - https://appicon.co
