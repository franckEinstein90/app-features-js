/******************************************************************************
 * app-feature-js by FranckEinstein90
 * 0000000000300000000000200000000000
 *
 * A management system for app features
 ******************************************************************************/
"use strict"
/******************************************************************************/
require('module-alias/register')


const app = {}

//add hello world feature to the app
require('@features').addFeatureSystem(app)
app.addFeature({
    label: 'helloWorld', 
    method: x => console.log('hello world')
})
app.helloWorld()
