import { useObserveElement } from './hooks/useObserveElement'
import './App.css';

function App() {
  const [ containerRef, isVisible ] = useObserveElement({
    root: null,
    rootMargin: "0px",
    threshold: 0.3
  })


  return (
    <div className="App">
      <div className="isVisible">{isVisible ? "IN VIEWPORT" : "NOT IN VIEWPORT"}</div>
      <div className="section"></div>
      <div className="box" ref={containerRef}>Observe me</div>
    </div>
  );
}

export default App;
