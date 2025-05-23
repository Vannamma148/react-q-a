// import './App.css'

function React() {
    return (
        <>
            <h1>React JS Interview Questions and Answers for Beginners</h1>
            <div>

                <h2>1. What is React?</h2>
                <p>React is a JavaScript library for building user interfaces, mainly for single-page applications (SPAs). It lets you build UI components that manage their own state.</p>
            </div>
            <div className="q">
                <h2>2. What is JSX?</h2>
                <p>JSX stands for JavaScript XML. It allows you to write HTML-like code inside JavaScript:</p>
                <p>
                    example: const element = &lt;h1&gt;Hello, world!&lt;/h1&gt;;

                </p>
            </div>
            <div className="q">
                <h2>3. What is a component in React?</h2>
                <p>A component is a reusable piece of UI. There are two main types:</p>
                <ul>
                    <li>Functional components</li>

                    <li>Class components (less common now)</li>
                </ul>
            </div>
            <div className="q">
                <pre>
                    <code>
{`// Functional Component
function Welcome() {
  return <h1>Hello</h1>;
}`}
                    </code>
                </pre>
            </div>
            <div className="q"><h2>4. What is the difference between Functional and Class Components?</h2>
                <ol>
                    <li>Functional components are simpler and use hooks for state and lifecycle features.</li>

                    <li>Class components use this, state, and lifecycle methods like componentDidMount.

                    </li>
                </ol></div>
            <div className="q">
                <h2>5. What is State in React?</h2>
                <p>State is an object that determines how a component behaves and renders. It is managed within the component and can change over time.</p>
                `const [count, setCount] = useState(0);
                `
            </div>
            <div className="q">
                <h2>6. What is Props?</h2>
                <p>Props (short for “properties”) are read-only inputs passed from parent to child components.</p>
                <pre>
                    <code>
                        {
                            `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
`
                        }
                    </code>
                </pre>
            </div>

            <div className="q">
                <h2>7. What is useEffect used for?</h2>
                <p>useEffect is a hook used to run side effects in functional components, like data fetching, subscriptions, or manually changing the DOM.</p>
                <pre>
                    <code>
                        {
`useEffect(() => {
  console.log("Component mounted or updated");
}, []);
`
                        }
                    </code>
                </pre>
            </div>

            <div className="q">
                <h2>8. What is Virtual DOM?</h2>
                <p>Virtual DOM is a lightweight copy of the real DOM. React uses it to improve performance by only updating parts of the actual DOM that changed.</p>
            </div>
            <div className="q">
                <h2>9. What are Keys in React?</h2>
                <p>Keys help React identify which items in a list have changed. They should be unique among siblings. </p>
                <pre>
                    <code>
                        {
                            `{items.map(item => <li key={item.id}>{item.name}</li>)}
`
                        }
                    </code>
                </pre>
            </div>
            <div className="q">
                <h2>10. What is lifting state up in React?</h2>
                <p>It means moving state from a child component to a common parent, so that multiple components can share and sync the state.</p>
            </div>
        </>
    )
}
export default React