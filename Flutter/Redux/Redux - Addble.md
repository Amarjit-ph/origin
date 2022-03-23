# REDUX - CONVENTION 

## 1. Create State inside Models & Initial function

```dart
class NameState {
  final String name;

  EditHistoryState({
    this.name
  });

  factory EditHistoryState.initial() => EditHistoryState(
        name:'No Name',
      );
}
```

## 2. Include the State in models exports 
## 3. Register the State in App State in models
## 4. Create Actions - Successful & Failed Optional for Middleware

```dart

class NameAction {
  final String name;
  NameAction({
    @required this.name,
  });
}
class NameSuccessful {
  final NameState nameState;

  EditHistorySuccessful({
    @required this.nameState,
  });
  @override
  String toString() {
    return 'nameSuccessful : $nameState';
  }
}

```

## 5. Create Reducer


```dart
// SINGLE ACTION  [STATE,ACTION] 
final dueAmountStateReducer = combineReducers<DueAmountState>(
  [
    new TypedReducer<DueAmountState, DueAmountAction>(
      _dueAmountStateReducer,
    ),
  ],
);

DueAmountState _dueAmountStateReducer(
    DueAmountState dueAmountState, DueAmountAction dueAmountAction) {
  return dueAmountAction.dueAmountState;
}
```


```dart
// MULTIPLE ACTION REDUCER [STATE,ACTION]
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

## 6. Register Reducer inside App state reducers
## 7. Write MiddleWare [ Receive Action and Dispatch other Action ]

```dart
// SINGLE MIDDLEWARE
List<Middleware<AppState>> createPurchaseHistoryMiddleware() {
  final purchaseHistory = _createPurchaseHistoryMiddleware();
  return [
    TypedMiddleware<AppState, PurchaseHistoryAction>(purchaseHistory),
  ];
}

Middleware<AppState> _createPurchaseHistoryMiddleware() {
  return (Store<AppState> store, action, NextDispatcher next) async {
    try {
      if (action is PurchaseHistoryAction){
        // DISPATCH ACTION
      }
    } catch (e) {}
  }
}
```

```dart
// MULTIPLE MIDDLEWARE
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
      if (action is LogIn){
        // DISPATCH ACTION
      }
    } catch (e) {}
  }
}
```

## 8. Register the Middleware in Main [Store]

# PRESENTATION
## 1. Create a ViewModel in presentation from store State 

```dart
class _ViewModel {
  final NameState nameState;
  _ViewModel({
    this.nameState,
  });

  static _ViewModel fromStore(Store<AppState> store) {
    return new _ViewModel(
      nameState: store.state.nameState,
    );
  }
}
```
## 2. Build Widget with Store Connector & Use State data

```dart
@override
  Widget build(BuildContext context) {
    return StoreConnector<AppState, _ViewModel>(
         builder: (context, vm) {
            return Container(
                child: Text(vm.nameState.name);
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
            NameAction(
                nameState: namesState(
                name: textControllerName.text,
                ),
            ),
        );
    },
    child : Text('SAVE');
),
```