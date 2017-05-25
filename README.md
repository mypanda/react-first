# react-first :panda_face:

### react

* Demo of React Official Website has bug by window,
* 函数是小写字母开头，大写字母开头的是组件

```
这里的小笔记在，react-remark.md
```

### redux

* redux 笔记
	* redux是一个状态管理树，就像react的componsnt一样，有一个根，向下分支，
	* redux和react的component是一一对应的

* 一句话
	* redux是react的状态管理机，
	* 结构上是一个根上面有很多状态，改变一个状态，需要遵循react的哲学，（哲学：通过函数改变状态，不能直接赋值...想到了在补充）


* 运行机制
	*  改变状态（state数据）只能通过函数（reducer）改变，
	*  这个函数（reducer）在createStore()创建的时候传入，
	*  传入函数了，那怎么触发这个函数，使这个函数的一个SAY_NAME动作，来改变状态（数据）?
	* 通过createStore()返回一个store，store.dispatch(fun) 触发函数改变状态（数据），这个fun是就是要返回一个对象，包含type:SAY_NAME，加上改变之后的状态（数据）


* example 例子 es6

```
import { createStore,combineReducers } from 'redux'

var reducer = combineReducers({
	speaker:function(state={},action){
		console.log('spearker was called with state',state,'and action',action);

		switch(action.type){
			case 'SAY':
				return {
					...state,
					message:action.message
				}
			default:
				return state;
		}
	}
})

var store = createStore(reducer)

var sayActionCreator = function(message){
	return {
		type:'SAY',
		message
	}
}

console.log("\n",'Running our normal action creator:',"\n");

console.log(new Date());
store.dispatch(sayActionCreator('Hi'))

console.log(new Date());
console.log('store store after action SAY',store.getState())

//输出
Sun Aug 02 2015 01:03:05 GMT+0200 (CEST)
speaker was called with state {} and action { type: 'SAY', message: 'Hi' }
Sun Aug 02 2015 01:03:05 GMT+0200 (CEST)
store_0 state after action SAY: { speaker: { message: 'Hi' } }
```

* 合并reducer

* example

```
var userReducer = function(state={},action){
	console.log('userReducer was called with state', state, 'and action', action);

	switch(action.type){
		//etc.
		default:
			return state;
	}
}
var itemsReducer = function(state={},action){
	console.log('itemsReducer was called with state', state, 'and action', action);

	switch(action.type){
		//etc.
		default:
			return state;
	}
}

import { createStore, combineReducers } from 'redux'

var reducer = combineReducers({
	user:userReducer,
	items:itemsReducer,
})

var store = create(reducer);

console.log('store state after initialization:', store_0.getState())


```

* 中间件middleware异步执行函数，处理异步 action




[react官网](https://facebook.github.io/react/docs/components-and-props.html)

[redux中文翻译](https://github.com/react-guide/redux-tutorial-cn)
