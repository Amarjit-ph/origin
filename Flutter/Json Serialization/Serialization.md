# Json Serialization

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