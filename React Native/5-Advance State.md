# ADVANCE STATE MANAGEMENT

- GLOBAL STATE MANAGEMENT
- CONTEXT
- REBUILD REDUX FROM SCRATCH

## Props
1. Communicate infromation from a parent directly down to a child
2. Easy to setup
3. To Communicate data down multiple layers, We have to write a lot of code

## Context
* Moves infromation from a parent to some deeply nested child
* Complicated to setup,lots of special nested child
* Easy to communicate data from a parent to a super nested child

# Context
Steps for Creating a Context

1.Create Context Provider
``` javascript
import React from 'react'
const BlogContext = React.createContext(); 

export const BlogProvide = ({ children }) => {
    return <BlogContext.Provider
    value={10}>
        {children}
    </BlogContext.Provider>
};
export default BlogContext;
```

2.Create Pipeline from index
``` javascript
import { BlogProvide } from './src/context/BlogContext'

export default () => {
  return <BlogProvide>
    <App />
  </BlogProvide>
}
```

3.Use Context on Deeply nested Child
``` javascript
import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BlogContext from '../context/BlogContext'

const indexScreen = () => {
    const value = useContext(BlogContext);
    return (
        <View>
            <Text>Index Screen : {value}</Text>
        </View>
    )
}
export default indexScreen
const styles = StyleSheet.create({})
```

# Context & State

``` javascript
import React, { useReducer,useState } from 'react'

const BlogContext = React.createContext();

export const BlogProvide = ({ children }) => {
    const [blogPosts,setBlogPosts] = useState([]);
    
    const addBlogPost = () => {
        setBlogPosts([
            ...blogPosts,
            { title:`Blog Post ${blogposts.length+1}` }
        ]);
    };

    // BLOG PROVIDER
    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>
        {children}
    </BlogContext.Provider>
};

export default BlogContext;
```


# Reducer & Context
``` javascript
import React, { useReducer } from 'react'

// REDUCER
const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: `BLOG POST #${state.length * 10}` }];
        default:
            return state;
    }
};

const BlogContext = React.createContext();

export const BlogProvide = ({ children }) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, []);

    // DISPATCH [ACTION(TYPE,PAYLOAD)]
    const addBlogPost = () => {
        dispatch({ type: 'add_blogpost' })

    };

    // BLOG PROVIDER
    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>
        {children}
    </BlogContext.Provider>
};

export default BlogContext;
```

