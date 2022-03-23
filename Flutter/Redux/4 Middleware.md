# Middleware

[Ultimate Redux guide for Flutter](https://brainsandbeards.com/blog/ultimate-redux-guide-for-flutter)

Redux let you include custom functions that processes the action before it’s dispatched to the next dispatcher and eventually to the reducer to form the new state. These functions are called middleware.

They really come in handy in many scenarios, for example: You make calls to an API and the response of those calls affect your app state. What should you do? First of all, use Redux, it’ll make your life a lot easier, all the data that matters to the UI will be centralized in a state singleton and be available whenever you want.

## Handling Async Code with Middleware

When you call an asynchronous API, there are two crucial moments in time: the moment you start the call, and the moment when you receive an answer (or a timeout).

Each of these two moments usually require a change in the application state; to do that, you need to dispatch normal actions that will be processed by reducers synchronously. Usually, for any API request you'll want to dispatch at least three different kinds of actions:

1. An action informing the reducers that the request began. The reducers may handle this action by toggling an isFetching flag in the state. This way the UI knows it's time to show a spinner.

2. An action informing the reducers that the request finished successfully. The reducers may handle this action by merging the new data into the state they manage and resetting isFetching. The UI would hide the spinner, and display the fetched data.

3. An action informing the reducers that the request failed. The reducers may handle this action by resetting isFetching. Additionally, some reducers may want to store the error message so the UI can display it.


## Data Flow
Now that our store contains middleware, let's understand the new data flow:

1. You call store.dispatch(Action)
2. The Redux Store calls your middleware
3. Your Middleware starts an API call, and calls next to forwards the Login action to the reducer
4. Your Reducer will return a new AppState with isFetching set to true.
5. The Redux Store will save the new AppState and notify all components listening to the onChange Stream that a new AppState exists.
6. When the the API call completes, your middleware will dispatch a success or failure action to the reducer.
7. Your Reducer will update the state in response to success or failure, and set isFetching to false.
8. The Redux Store will save the new AppState and notify all components listening to the onChange Stream that a new AppState exists.

# Middleware Implementation

## 1.Create Model

`redux/models/user_state.dart`

```dart
class UserState {
  String userName;
  String uid;
  String role;

  UserState({
    this.userName,
    this.uid,
    this.role,
  });

  factory UserState.initial() => UserState(
      userName:null,
      uid:null,
      role:null,
    );
}
```

## 2.Create Application State

`redux/models/app_state.dart`
```dart
class AppState {
  final UserState currentUser;

  AppState({
    this.currentUser,
  });
  factory AppState.initial() => AppState(
        currentUser: UserState.initial(),
        );

  AppState copyWith({
    UserState currentUser,}){
    return new AppState(
      currentUser: currentUser ?? this.currentUser,});
  }
}
```

OPTIONAL

`redux/models/app_state.dart`
```dart
export 'app_state.dart';
export 'user/user_state.dart';
```


## 3.Create Actions

`redux/actions/auth`
```dart
// Login
class LogIn {
  String username;
  String password;

  LogIn({
    this.username,
    this.password,
  });
}

// Login Successful
class LogInSuccessful {
  final UserState userState;

  LogInSuccessful({
    this.userState,
  });

  @override
  String toString() {
    return 'LogInSuccessful: $userState';
  }
}
// Login Fail
class LogInFail {
  final UserState userState;

  LogInFail({
    this.userState,
  });

  @override
  String toString() {
    return 'LogInFail: $userState';
  }
}

```
## 4.Create Reducer

`redux/reducers/auth`
```dart
final authStateReducer = combineReducers<UserState>([
  new TypedReducer<UserState, LogInSuccessful>(loginSuccessfulStateReducer),
  new TypedReducer<UserState, LogInFail>(loginFailStateReducer),
]);

UserState loginSuccessfulStateReducer(
    UserState logInState, LogInSuccessful action) {
  return action.userState;
}

UserState loginFailStateReducer(UserState logInState, LogInFail action) {
  return action.userState;
}

```
## 5.Application State Reducer

`redux/reducers/app_state_reducer`
```dart
AppState appStateReducer(AppState state, action) {
  return new AppState(
    currentUser: authStateReducer(state.currentUser, action),
  );
}
```


## 6.Create Middleware

```dart
List<Middleware<AppState>> createAuthenticationMiddleware() {
  final logIn = _createLogInMiddleware();
  final loadUser = _createLoadUserMiddleware();
  final logOut = _createSignOutMiddleware();
  return [
    TypedMiddleware<AppState, LogIn>(logIn),
    TypedMiddleware<AppState, LoadUser>(loadUser),
    TypedMiddleware<AppState, SignOut>(logOut)
  ];
}


// LOGIN MIDDLEWARE
Middleware<AppState> _createLogInMiddleware() {
  return (Store<AppState> store, action, NextDispatcher next) async {
    try {
      /// API CALL GET RESPONSE
      if (action is LogIn) {
         // CALL SUCCESSFUL WHEN API COMPLETED
              store.dispatch(
                new LogInSuccessful(
                  userState: new UserState(
                    userName:Response.username,
                    uid:Response.uid,
                    role:Response.role,
                  ),
                ),
              );
      } catch(e){}  
  };
 }
}
```

## 7.Create Main

```dart
Class MyApp extends statefulWidgets {
  Store<AppState> store;
  @override
  void initState() {
    super.initState();
    store = new Store(appStateReducer,
        initialState: AppState.initial(),
        middleware: []
          ..add(thunkMiddleware)
          ..addAll(createAuthenticationMiddleware())
          );
  }
  
  @override
  Widget build(BuildContext context) {

    return new StoreProvider(
      store: store,
      child: MaterialApp()
      );
  }
}
```

# Presentation
## 1. Create a ViewModel in presentation from store State 

```dart
class _ViewModel {
 final UserState currentUser;
  _ViewModel({
    this.nameState,
  });

  static _ViewModel fromStore(Store<AppState> store) {
    return new _ViewModel(
      nameState: store.state.currentUser,
    );
  }
}
```
## 2. Build Widget with Store Connector

```dart
@override
  Widget build(BuildContext context) {
    return StoreConnector<AppState, _ViewModel>(
         builder: (context, vm) {
            return Container(
                child: Text(vm.currentUser.userName);
            );
          },
         converter: _ViewModel.fromStore,
    );
}
```

## 3. Dispatch Action using Store Provider using Context

```dart
InkWell(
    onTap: () {
        StoreProvider.of<AppState>(context).dispatch(
            LogIn(
              userName:textControllerUserName.text,
              password:textControllerPassword.text,
            ),
        );
    },
    child : Text('LOGIN');
),
```