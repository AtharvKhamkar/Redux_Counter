import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrementValue, incrementValue } from './features/countSlicer';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(incrementValue())}>Increment</button>
      <p>{count}</p>
      <button onClick={() => dispatch(decrementValue())}>Decrement</button>
    </div>
  );
}

export default App;
