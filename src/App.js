import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer } from "./components";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AllRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
