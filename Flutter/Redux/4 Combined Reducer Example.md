# Combined Reducer
## 1. Create Model
```dart
class Item {
  final int id;
  final String body;

  Item({
    @required this.id,
    @required this.body
  });
}

```

## 2. Create Application State
```dart
class AppState {
  final List<Item> items;
  final int count;

  AppState({
    @required this.items,
    @required this.count,
  });

  AppState.initialState()
  : items = List.unmodifiable(<Item>[]),
    count = 0;
}
```

## 3. Create Actions

```dart
class AddItemAction {
  final String item;
  AddItemAction(this.item)

}

class RemoveItemAction {
  final Item item;
  RemoveItemAction(this.item);
}

class RemoveItemsAction {}
```

## 4. Create Combined Reducers

```dart
final Reducer <List<Item>> itemsReducer = combineReducers <List<Item>>([
  new TypedReducer<List<Item>, AddItemAction>(addItemReducer),
  new TypedReducer<List<Item>, RemoveItemAction>(removeItemReducer),
  new TypedReducer<List<Item>, RemoveItemsAction>(removeItemsReducer),
]);

List <Item> addItemReducer(List<Item> state, action) {
  return []
      ..addAll(state)
      ..add(Item(id: action.id, body: action.item));
}

List <Item> removeItemReducer(List<Item> state, action) {
  return List.unmodifiable(List.from(state)..remove(action.item));
}

List <Item> removeItemsReducer(List<Item> state, action) {
  return List.unmodifiable([]);
}
```

## 5. Create Application State Reducer

```dart
AppState appStateReducer(AppState state, action) {
  return AppState(
    items: itemsReducer(state.items, action),
    count: incrementReducer(state.count, action),
  );
}
```

## 6. Creating the store

```dart
final Store store = Store<AppState>(
  appStateReducer,
  initialState: AppState.initialState(),
);

return StoreProvider<AppState>(
  store: store,
  child: new MaterialApp(
    title: 'Flutter App',
    theme: new ThemeData(
      primarySwatch: Colors.blue,
    ),
    home: MyHomePage()
  ),
);
```
