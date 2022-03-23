# Navigation
Navigation refers to the interactions that allow users to navigate across, into, and back out from the different pieces of content within your app.

[Flutter Navigation Document](https://flutter.dev/docs/cookbook/navigation)

# Single Screen Navigation

```dart
void selectScreen(BuildContext ctx) {
    Navigator.of(ctx).push(
      MaterialPageRoute(builder: (_) {
        return ScreenName(id, title);
      }),
    );
  }
```



# Name Routes Navigation


Create two screens to work with. The first screen contains a button that navigates to the second screen. The second screen contains a button that navigates back to the first.

1. Create two screens

```dart
class FirstScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('First Screen'),
      ),
      body: Center(
        child: ElevatedButton(
          child: Text('Launch screen'),
          onPressed: () {
            // Navigate to the second screen when tapped.
          },
        ),
      ),
    );
  }
}

class SecondScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Second Screen"),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            // Navigate back to first screen when tapped.
          },
          child: Text('Go back!'),
        ),
      ),
    );
  }
}
```

2. Define the routes

```dart
MaterialApp(
  initialRoute: '/',
  routes: {
    '/': (context) => FirstScreen(),
    '/second': (context) => SecondScreen(),
  },
);

```
 3. Navigate to the second screen
```dart
onPressed: () {
  Navigator.pushNamed(context, '/second');
}
```
4. Return to the first screen
```dart
onPressed: () {
  Navigator.pop(context);
}
```


# Navigation with Data

```dart
// 1 Step up Route
routes: {'/category-meals': (ctx) => CategoryMealsScreen(),}

// 2 Push to Route
void selectCategory(BuildContext ctx) {
    Navigator.of(ctx).pushNamed('/caegory-meals', arguments: {
      'id': id,
      'title': title,
    });
  }

// 3 Extract Arguments
final routeArgs = ModalRoute.of(context)?.settings.arguments as Map<String, String>;
final categoryTitle = routeArgs['title'];
final categoryid = routeArgs['id'];
```


Fallback Route for Unknown Routes
```dart
// GenerateRoute & UnknownRoute

onGenerateRoute:(settings){
  return MaterialPageRoute(builder:(ctx)=>HomeScree())
}

```


## EXAMPLE 1
```dart
BottomButton(
 buttonTitle: 'CALCULATE',
 onTap: () {

   // OBJECT
   CalculatorBrain calc =
   CalculatorBrain(height: height, weight: weight);

   Navigator.push(
    context,
    MaterialPageRoute(
       builder: (context) => ResultsPage(
       bmiResult: calc.calculateBMI(),
       resultText: calc.getResult(),
       interpretation: calc.getInterpretation(),
    ),
    ),
    );
}
```

```dart
class ResultsPage extends StatelessWidget {
  ResultsPage(
      {@required this.interpretation,
      @required this.bmiResult,
      @required this.resultText});

  final String bmiResult;
  final String resultText;
  final String interpretation;
```

## EXAMPLE 2
```dart
class WeatherRouteArguments {
  WeatherRouteArguments({ this.city, this.country });
  final String city;
  final String country;

  bool get isGermanCapital {
    return country == 'Germany' && city == 'Berlin';
  }
}

void _showWeather() {
  Navigator.pushNamed(
    context,
    '/weather',
    arguments: WeatherRouteArguments(city: 'Berlin', country: 'Germany'),
  );
}
```



# Default Tab Controller

```dart
class TabsScreen extends StatefulWidget {
  @override
  _TabsScreenState createState() => _TabsScreenState();
}

class _TabsScreenState extends State<TabsScreen> {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 2,
      // initialIndex: 0,
      child: Scaffold(
        appBar: AppBar(
          title: Text('Meals'),
          bottom: TabBar(
            tabs: <Widget>[
              Tab(
                icon: Icon(
                  Icons.category,
                ),
                text: 'Categories',
              ),
              Tab(
                icon: Icon(
                  Icons.star,
                ),
                text: 'Favorites',
              ),
            ],
          ),
        ),
        body: TabBarView(
          children: <Widget>[
            CategoriesScreen(),
            FavoritesScreen(),
          ],
        ),
      ),
    );
  }
}

```

# Bottom Navigation Bar
```dart
class TabsScreen extends StatefulWidget {
  @override
  _TabsScreenState createState() => _TabsScreenState();
}

class _TabsScreenState extends State<TabsScreen> {
  final List<Map<String, Object>> _pages = [
    {
      'page': CategoriesScreen(),
      'title': 'Categories',
    },
    {
      'page': FavoritesScreen(),
      'title': 'Your Favorite',
    },
  ];
  int _selectedPageIndex = 0;

  void _selectPage(int index) {
    setState(() {
      _selectedPageIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(_pages[_selectedPageIndex]['title']),
      ),
      body: _pages[_selectedPageIndex]['page'],
      bottomNavigationBar: BottomNavigationBar(
        onTap: _selectPage,
        backgroundColor: Theme.of(context).primaryColor,
        unselectedItemColor: Colors.white,
        selectedItemColor: Theme.of(context).accentColor,
        currentIndex: _selectedPageIndex,
        // type: BottomNavigationBarType.fixed,
        items: [
          BottomNavigationBarItem(
            backgroundColor: Theme.of(context).primaryColor,
            icon: Icon(Icons.category),
            title: Text('Categories'),
          ),
          BottomNavigationBarItem(
            backgroundColor: Theme.of(context).primaryColor,
            icon: Icon(Icons.star),
            title: Text('Favorites'),
          ),
        ],
      ),
    );
  }
}
```











