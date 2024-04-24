const Home = () => {
  return (
    <div>
      <header>
        <div className="container">
          <h1 className="text-center">E-COMMERCE PRODUCT PAGE</h1>
        </div>
      </header>

      <main className="container my-5">
        <h2 className="text-center">Welcome to Our E-Commerce Store</h2>
        <p className="lead text-center">
          Browse through our collection of amazing products.
        </p>
      </main>

      <footer className="bg-dark text-light py-4 position-absolute bottom-0 w-100">
        <div className="container text-center">
          <p>&copy; 2024 E-Commerce Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
