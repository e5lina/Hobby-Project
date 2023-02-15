import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main></Main>}></Route>
    </Routes>
  );
}

export default App;
