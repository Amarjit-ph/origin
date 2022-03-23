# Single Reducer Example

## 1. Create the Model of the State
`models/Item/item_state.dart`
```dart
class Item {
  final int id;
  final String body;

  Item({
    required this.id,
    required this.body,
  });

  Item copyWith({required int id, required String body}) {
    return Item(id: id, body: body);
  }
}
```

## 2. Create Application State 

`models/app_state.dart`
```dart
class AppState {
  final List<Item> items;

  AppState({
    required this.items,
  });

  AppState.initialState() : items = List.unmodifiable(<Item>[]);
}

```
## 3. Create Actions
`actions/items_actions.dart`
```dart
class AddItemAction {
  static int _id = 0;
  final String item;

  AddItemAction(this.item) {
    _id++;
  }
  int get id => _id;
}

class RemoveItemAction {
  final Item item;
  RemoveItemAction(this.item);
}

class RemoveItemsAction {}

```

## 4. Create Item Reducers
`reducers/itemReducers.dart`
```dart
List<Item> itemReducer(List<Item> state, action) {
  if (action is AddItemAction) {
    return []
      ..addAll(state)
      ..add(Item(id: action.id, body: action.item));
  }

  if (action is RemoveItemAction) {
    return List.unmodifiable(List.from(state)..remove(action.item));
  }

  if (action is RemoveItemsAction) {
    return List.unmodifiable([]);
  }

  return state;
}
```

## 5. Create Application Reducer
`reducers/app_state/app_state_reducers.dart`
```dart
AppState appStateReducer(AppState state, action) {
  return AppState(
    items: itemReducer(state.items, action),
  );
}
```

## 6. Create Store
`main.dart`
```dart
 final Store<AppState> store = Store<AppState>(
      appStateReducer,
      initialState: AppState.initialState(),
    );
```

## 7. Provide Store to Widget
`main.dart`
```dart
class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return StoreProvider<AppState>(
      store: store,
      child: MaterialApp(
        title: 'Redux Example',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: MyHomePage(),
      ),
    );
  }
}
```

## 8. Create ViewModel

```dart
class _ViewModel {
  final List<Item> items;
  final Function(String) onAddItem;
  final Function(Item) onRemoveItem;
  final Function() onRemoveItems;

  _ViewModel(
      {required this.items,
      required this.onAddItem,
      required this.onRemoveItem,
      required this.onRemoveItems});

  factory _ViewModel.create(Store<AppState> store) {
    _onAddItem(String body) {
      store.dispatch(AddItemAction(body));
    }

    _onRemoveItem(Item item) {
      store.dispatch(RemoveItemAction(item));
    }

    _onRemoveItems() {
      store.dispatch(RemoveItemsAction());
    }

    return _ViewModel(
      items: store.state.items,
      onAddItem: _onAddItem,
      onRemoveItem: _onRemoveItem,
      onRemoveItems: _onRemoveItems,
    );
  }
}
```
## 9. Connect Widget to Store
`presentation/homepage.dart`
```dart
class MyHomePage extends StatelessWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Redux Items'),
      ),
      body: StoreConnector<AppState, _ViewModel>(
        converter: (Store<AppState> store) => _ViewModel.create(store),
        builder: (BuildContext context, _ViewModel vm) => Column(
          children: [
            AddItemWidget(vm),
            Expanded(child: ItemListWidget(vm)),
            RemoveItemsButton(vm),
          ],
        ),
      ),
    );
  }
}
```

## 10. Render the View Model
`presentation/widgets/itemList.dart`
```dart
class ItemListWidget extends StatelessWidget {
  final _ViewModel model;
  ItemListWidget(this.model);

  @override
  Widget build(BuildContext context) {
    return ListView(
      children: model.items
          .map((Item item) => ListTile(
                title: Text('${item.id}  ${item.body}'),
                leading: IconButton(
                  icon: Icon(Icons.delete),
                  onPressed: () => model.onRemoveItem(item),
                ),
              ))
          .toList(),
    );
  }
}
```

## 11. Dispatch An Action
`presentation/widgets/itemList.dart`
```dart
class RemoveItemsButton extends StatelessWidget {
  final _ViewModel model;
  RemoveItemsButton(this.model);

  @override
  Widget build(BuildContext context) {
    return RaisedButton(
      child: Text('Delete all Items'),
      onPressed: () => model.onRemoveItems(),
    );
  }
}
```

