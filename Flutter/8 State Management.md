# State Management

State - Data which affects the UI when it might change over time
User Interface - Visual Present the data to users

1. Application wide state
- Affects entire app or significant parts of the app
Example : Authentication("User Authenticated")

2. Widgets (Local) state
- Affects only a widgets on its own 
Example : Should a loading Spinner be displayed

# Provider

In a nutshell, Provider gives us an easy, low boiler-plate way to separate business logic from our widgets in apps. Because it's built on InheritedWidget classes, it also makes it easy to re-use and re-factor business logic. Separating state from your UI is one of the main problems that Provider solves.

- Only Rebuilt Widgets which are listening

# 1.Single Provider
1. Create Model

```dart
/// PATH : lib/models/Product.dart
class Product {
  final String id;
  final String title;
  final String description;
  final double price;
  final String imageUrl;
  bool isFavorite;

  Product({
    @required this.id,
    @required this.title,
    @required this.description,
    @required this.price,
    @required this.imageUrl,
    this.isFavorite = false,
  });
}
```


2. Create Provider
```dart
/// PATH : lib/providers/Products_provider.dart

class Products with ChangeNotifier {
  // List of Product
  List<Product> _items = [];

  // Get Item
  List<Product> get items {
    return [..._items];
  }

  // Add Products
  void addProduct(){
    _items.add(value);
    // Widgets Which are Listening will be updated
    notifyListeners();
  }  
}
```

4. Setting Provider into Widgets
```dart
// Import Provider
// Import Products Provider
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create:(context) => Products_provider(),
      child:MaterialApp(),
      // Products will be Available in All the child Widgets
    );
  }
}

```

5. Listen for Products Provider
```dart
/// Child Widget of Change Notifier Provider Widget

// Import Provider
// Import Product Provider
class ProductsGrid extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // Listing to Products
    final productsData = Provider.of<Products_provider>(context);
    // Use Products Getter 
    final products = productsData.items;
    return Scaffold(
      // Render the Products
    );
  }
}

```

6. Listen for Product 

```dart
/// Listening in different way

class ProductDetailScreen extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    // Product from route arguments
    final productId =
        ModalRoute.of(context).settings.arguments as String;
    // Load product from Provider
    final loadedProduct = Provider.of<Products_provider>(
      context,
      //Do not Rebuild when Changes
      listen: false,
    ).findById(productId);
    
    return Scaffold(

    );
  }
}
```

# 2.Nested Provider

1. ChangeNotifierProvider - Class Based New Instance

2. ChangeNotifierProvider.value() - Reuse Existing Instance [ Avoid Errors ] 
```dart
// Already Provided with Products Provider

class ProductsGrid extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    final productsData = Provider.of<Products>(context);
    final products = productsData.items;
    return GridView.builder(
      padding: const EdgeInsets.all(10.0),
      itemCount: products.length,
      // Nest Provider - Product Provider
      itemBuilder: (ctx, i) => ChangeNotifierProvider.value(

            // Multiple Product Provider
            value: products[i],
            child: ProductItem(),
          ),
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        childAspectRatio: 3 / 2,
        crossAxisSpacing: 10,
        mainAxisSpacing: 10,
      ),
    );
  }
}



```

```dart
// Provider for Each Product Item 

class ProductItem extends StatelessWidget {
 
  @override
  Widget build(BuildContext context) {
    final product = Provider.of<Product>(context, listen: false);

    return Column(
      children: [
        Text(product.id),
        Text(product.title),
        Text(product.price),
      ]
    )
  }
}
```

# Consumer 
Provider.of<>
Applying provider, whole widget will rebuild if listen true.

Consumer<>
Using consumer only specifically allowed widget will rebuild.

```dart
// Specific Part of Widget - Which will only Rebuild
Consumer<Product>(
  builder: (ctx, product, _) => IconButton(
        icon: Icon(
          product.isFavorite ? Icons.favorite : Icons.favorite_border,
        ),
        color: Theme.of(context).accentColor,
        onPressed: () {
          product.toggleFavoriteStatus();
        },
      ),
  )
```
## Multi Provider

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(
          create: (ctx) => Products(),
        ),
        ChangeNotifierProvider(
          create: (ctx) => Cart(),
        ),
        ChangeNotifierProvider(
          create: (ctx) => Orders(),
        ),
      ],
      child: MaterialApp();
  }
}
```