# app-features-js

An in-app feature system

- link features to business reqs
- provide redundancy to mitigate features that are not implemented or that are broken
- keep track of feature dependencies

Definitions: 

## Requirements

A *requirement* is the natural language description of a behavior that the app should have. 
It is numbered and may have child requirements. 

## Features

A *feature* is a piece of functionality that the app has access to. 

Features can depend on other features, for instance: a login modal window feature would typically depend on a) a user authentication feature and b) a modal window feature. Some of those dependencies can be more lax than others. 


