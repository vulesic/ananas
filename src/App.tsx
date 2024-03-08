import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GlobalStateProvider } from "./context/GlobalState";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App flex flex-col h-screen">
      <Header  />
      <main className="flex-grow bg-white">
        <GlobalStateProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Posts />} />
              <Route path="/post/:id" element={<Post />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </BrowserRouter>
        </GlobalStateProvider>
      </main>
      <Footer />
    </div>
  );
}

export default App;
