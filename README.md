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

The ```createClass``` needs a requirement that is an objet that at least defines a ```render function```.
Within the render function you need to ```return``` some markup (for this reason you use ```jsx```).

Now you need to ```render``` your React component (in this case ```Hello```) by using the ```renderComponent```
function and passing the needed parameters (in this case ```now```).
This creates the markups and insert it into the DOM

The second argument to the renderComponent is the DOM element to render our component into and to specify that you need to use plain JS.