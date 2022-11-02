import { useState } from 'react';
import { cube, square } from './Slice';
import store from './Store';
const App=()=>{
  store.subscribe(()=>console.log(store.getState()))
  let[st,updatest]=useState(store.getState());
  return(<>
  <h1>{st} App Cpomponent is running</h1>
  <button onClick={()=>{
    store.dispatch(square())
    updatest(store.getState())
  }}>Square</button>
  <button onClick={()=>{
    store.dispatch(cube())
    updatest(store.getState())
  }}>Cube</button>
  <input type="number" value={st} />
  </>
  )
}
export default App;
