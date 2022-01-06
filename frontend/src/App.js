import logo from './logo.svg';
import './App.css';
import data from './data';


function App() {
  return (
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="index.html">Plant Website</a>
            </div>
        </header>
        <main>
            <div className="row center">
                {data.products.map((product) => (
                  <div className="card">
                      <a href="product.html">
                          <img className="medium" src="./images/p1.jpg" alt="product" />
                      </a>
                      <div className="card-body">
                          <h4>{product.item_name}</h4>
                          <p>{product.description}</p>
                      </div>
                  </div>
                ))}
            </div>
        </main>
        <footer className="row center">
            All rights reserved
        </footer>
    </div>
  );
}

export default App;
