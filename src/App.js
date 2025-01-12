import './App.css';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <h1>Welcome to React Router!</h1>
        <a href="/about">about</a>
          <BrowserRouter>
            <Switch>
              <Route path="/first" element={<About />} />
              <Route path="about" element={<About />} />
            </Switch>
          </BrowserRouter>
      </div>
  );
}

// function Home() {
//   return (
//       <>
//         <main>
//           <h2>Welcome to the homepage!</h2>
//           <p>You can do this, I believe in you.</p>
//         </main>
//         <nav>
//           <Link to="/about">About</Link>
//         </nav>
//       </>
//   );
// }

function About() {
  return (
      <>
        <main>
          <h2>Who are we?</h2>
          <p>
            That feels like an existential question, don't you
            think?
          </p>
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </>
  );
}
export default App;
