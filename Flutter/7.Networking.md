# Networking

The http package provides the simplest way to issue http requests. This package is supported on Android, iOS, and the web.

# 1.HTTP library

A composable, Future-based library for making HTTP requests.
`https://pub.dev/packages/http`

The easiest way to use this library is via the top-level functions. They allow you to make individual HTTP requests with minimal hassle:

```dart
import 'package:http/http.dart' as http;
  void getData() async {
    http.Response response = await http.get(
        'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=7d4b634172933fb13ea2bfaac7057950');

    print(response.body);
  }
```

```dart
void getData() async {
    http.Response response = await http.get(
        'http://api.openweathermap.org/data/2.5/weather?lat=$latitude&lon=$longitude&appid=4654654645');

    //print(response.body);

    if (response.statusCode == 200) {
      String data = response.body;

      var decodedData = jsonDecode(data);
      double temperature = decodedData['main']['temp'];
      int condition = decodedData['weather'][0]['id'];
      String cityName = decodedData['name'];

      print('TEMP $temperature');
      print(condition);
      print(cityName);
    } else {
      print(response.statusCode);
    }
  }
```


# 2.Json Serialization

JSON is a format that encodes objects in a string. Serialization means to convert an object into that string, and deserialization is its inverse operation (convert string -> object).

When transmitting data or storing them in a file, the data are required to be byte strings, but complex objects are seldom in this format. 

Serialization can convert these complex objects into byte strings for such use. After the byte strings are transmitted, the receiver will have to recover the original object from the byte string. This is known as deserialization.

Say, you have an object:
```
{foo: [1, 4, 7, 10], bar: "baz"}
```
Serializing into JSON will convert it into a string:

```
'{"foo":[1,4,7,10],"bar":"baz"}'
```

## Flutter JSON Serialization

1. Add Dependencies
```dart
dependencies:
  json_annotation: ^3.0.1

dev_dependencies:
  build_runner: ^1.0.0
  json_serializable: ^3.3.0
```

2. Add Annotation & create Template Function
```dart
// FILE NAME - user_type.dart

import 'package:json_annotation/json_annotation.dart';
import 'address.dart';
part 'user_type.g.dart';

@JsonSerializable(explicitToJson: true)
class User {
  String name, phone, email;
  bool subscription;
  Address address;

  User({
    this.name,
    this.phone,
    this.email,
    this.subscription,
    this.address,
  });

  // Creating User from JSON
  factory User.fromJson(Map<String,dynamic> data) => _$UserFromJson(data);
  // Creating User to JSON
  Map<String,dynamic> toJson() => _$UserToJson(this);
}
```

3. Run the Build Runner
```
flutter pub run build_runner
```

4. Using User Type
```dart
const NESTED_JSON;

class MyHomePage extends StatelessWidget {
  
  Future<List<User>> getDataFromFakeServer() async {
    return await Future.delayed(Duration(seconds: 2), () {
        List<dynamic> data = jsonDecode(NESTED_JSON);
        
        List<User> users = data
          .map((data) => User.fromJson(data)).toList();

      print("Log : " + users[0].name);
      print(users[0].toJson());
      print(NESTED_JSON);
      return users;
    });
  }
```