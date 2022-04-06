# Function

A function is a set of statements that take inputs, do some specific computation and produces output.

The idea is to put some commonly or repeatedly done task together and make a function so that instead of writing the same code again and again for different inputs, we can call the function.

```c++
int max(int x, int y)
{
	if (x > y)
	return x;
	else
	return y;
}

int main() {
	int a = 10, b = 20;

	// Calling above function to find max of 'a' and 'b'
	int m = max(a, b);

	cout << "m is " << m;
	return 0;
}
```

## Why do we need functions?
1. Functions help us in reducing code redundancy. If functionality is performed at multiple places in software, then rather than writing the same code, again and again, we create a function and call it everywhere. This also helps in maintenance as we have to change at one place if we make future changes to the functionality.

2. Functions make code modular. Consider a big file having many lines of codes. It becomes really simple to read and use the code if the code is divided into functions.

3. Functions provide abstraction. For example, we can use library functions without worrying about their internal working.

# Parameter Passing to functions

1. Pass by Value: In this parameter passing method, values of actual parameters are copied to function’s formal parameters and the two types of parameters are stored in different memory locations. So any changes made inside functions are not reflected in actual parameters of caller.

2. Pass by Reference Both actual and formal parameters refer to same locations, so any changes made inside the function are actually reflected in actual parameters of caller.

```c++
// Pass by Value
void fun(int x) {
	x = 30;
}

int main() {
	int x = 20;
	fun(x);
	cout << "x = " << x;
	return 0;
}
```

```c++
// Pass by Reference
void fun(int *ptr)
{
	*ptr = 30;
}

int main() {
	int x = 20;
	fun(&x);
	cout << "x = " << x;

	return 0;
}
```

# Parameters and Arguments

Information can be passed to functions as a parameter. Parameters act as variables inside the function.

```c++
void myFunction(string fname) {
  cout << fname << " Refsnes\n";
}

int main() {
  myFunction("Liam");
  myFunction("Jenny");
  myFunction("Anja");
  return 0;
}
```

## Default Parameters

You can also use a default parameter value, by using the equals sign (=).

```c++
void myFunction(string country = "Norway") {
  cout << country << "\n";
}

int main() {
  myFunction("Sweden");
  myFunction("India");
  myFunction();
  myFunction("USA");
  return 0;
}

// Sweden
// India
// Norway
// USA
```

## Multiple Parameters

Inside the function, you can add as many parameters as you want:

```c++
void myFunction(string fname, int age) {
  cout << fname << " Refsnes. " << age << " years old. \n";
}

int main() {
  myFunction("Liam", 3);
  myFunction("Jenny", 14);
  myFunction("Anja", 30);
  return 0;
}
```

# Inline Function

C++ provides an inline functions to reduce the function call overhead. Inline function is a function that is expanded in line when it is called. When the inline function is called whole code of the inline function gets inserted or substituted at the point of inline function call. This substitution is performed by the C++ compiler at compile time. Inline function may increase efficiency if it is small.

```c++
inline int cube(int s)
{
	return s*s*s;
}
int main()
{
	cout << "The cube of 3 is: " << cube(3) << "\n";
	return 0;
} //Output: The cube of 3 is: 27
```

## Inline functions provide following advantages:

1. Function call overhead doesn’t occur.
2. It also saves the overhead of push/pop variables on the stack when function is called.
3. It also saves overhead of a return call from a function.
4. When you inline a function, you may enable compiler to perform context specific optimization on the body of function. Such optimizations are not possible for normal function calls. Other optimizations can be obtained by considering the flows of calling context and the called context.
5. Inline function may be useful (if it is small) for embedded systems because inline can yield less code than the function call preamble and return.

## Inline function disadvantages:

1. The added variables from the inlined function consumes additional registers, After in-lining function if variables number which are going to use register increases than they may create overhead on register variable resource utilization. This means that when inline function body is substituted at the point of function call, total number of variables used by the function also gets inserted. So the number of register going to be used for the variables will also get increased. So if after function inlining variable numbers increase drastically then it would surely cause an overhead on register utilization.

2.If you use too many inline functions then the size of the binary executable file will be large, because of the duplication of same code.

3. Too much inlining can also reduce your instruction cache hit rate, thus reducing the speed of instruction fetch from that of cache memory to that of primary memory.

4. Inline function may increase compile time overhead if someone changes the code inside the inline function then all the calling location has to be recompiled because compiler would require to replace all the code once again to reflect the changes, otherwise it will continue with old functionality.

5. Inline functions may not be useful for many embedded systems. Because in embedded systems code size is more important than speed.

# Functors

Functors are objects that can be treated as though they are a function or function pointer. Functors are most commonly used along with STLs in a scenario like following:

```c++
// A C++ program uses transform() in STL to add
// 1 to all elements of arr[]
#include <bits/stdc++.h>
using namespace std;

int increment(int x) { return (x+1); }

int main()
{
	int arr[] = {1, 2, 3, 4, 5};
	int n = sizeof(arr)/sizeof(arr[0]);

	// Apply increment to all elements of
	// arr[] and store the modified elements
	// back in arr[]
	transform(arr, arr+n, arr, increment);

	for (int i=0; i<n; i++)
		cout << arr[i] <<" ";

	return 0;
}

```
