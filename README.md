#React.js
##Basic tutorial with explanation


###Aim of this project

I am gonna reproduce a catalogue ordered by Author. For each of the authors you will have a list of books to choose from. This simple project will allow me to understand React's functionality and how it differs from an MVC.


###General taste of the syntax.

The following snippet is the React version of "Hello world":

```javascript
		var Hello = React.createClass ({
			render: function(){
				return <div>
						<h1> Now is {this.props.now}</h1>
						</div>;
			}
		});
		React.renderComponent(<Hello now={new Date().toString()} />,
		document.getElementById('container'));

```

####**Explanation:**

```
var Hello

```

You are declaring a ```React Component```.

```
React.createClass
```
You access and invoke the function createClass.

The ```createClass``` needs a requirement that is an object that at least defines a ```render function```.
Within the render function you need to ```return``` some markup (for this reason you use ```jsx```).

Now you need to ```render``` your React component (in this case ```Hello```) by using the ```renderComponent```
function and passing the needed parameters (in this case ```now```).
This creates the markups and insert it into the DOM

The second argument to the renderComponent is the DOM element to render our component into and to specify that you need to use plain JS.

When you compile the code in plain JS from JSX, it will look like this:

```javascript
		var Hello = React.createClass ({
			render: function(){
				return React.DOM.div(null, 
									React.DOM.h1(
									null, "Now is " this.prop.now)
				);
			}
		});

```
##Nesting Components
```
var Inner = React.createClass({
	render: function(){
	return <h3> Inner </h3>
}
});

var Outer = React.createClass({
	render: function(){
	return <div>
						<h1> Outer </h1>
						<Inner />
					</div>
}
});

React.renderComponent(<Outer />, document.body);
