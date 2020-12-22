import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {exampleModel} from "src/example/serviceCenter/example/model/exampleModel";
import {publish, useResetWithKey, useSubscribe} from "@react-model";

const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home - @react-model 範例</Link>
      </li>
    </ul>
  );
}

const onValueChange: <K extends keyof typeof exampleModel.input>(key: K, value: typeof exampleModel.input[K]) => void = (key, value) => {
  exampleModel.input[key] = value
  publish(RENDER_SEARCH_CONTROL)
}

const onSubmit = () => {
  exampleModel.input.account = ''
  exampleModel.input.password = ''
  publish(RENDER_SEARCH_CONTROL)
}

const RENDER_SEARCH_CONTROL = 'RENDER_SEARCH_CONTROL'

const SearchControl = () => {
  console.log('RENDER SearchControl')

  const input = exampleModel.input;
  const [state, setState] = useState(input)
  useSubscribe(RENDER_SEARCH_CONTROL, () => setState({...input}))
  // useSubscribe(RENDER_SEARCH_CONTROL)
  // equal ↓
  // useSubscribe(RENDER_SEARCH_CONTROL, ({action, render, pop}) => {
  //   console.log(action) // hello action
  //   render()
  // })
  return <div>
    <h3>SearchControl</h3>
    <input type="text" placeholder={'account'} value={state.account} onChange={ev => onValueChange('account', ev.target.value)}/>
    <input type="text" placeholder={'password'} value={state.password} onChange={ev => onValueChange('password', ev.target.value)} onKeyDown={ev => ev.key === 'Enter' && onSubmit()}/>
    <button onClick={onSubmit}>submit</button>
    <div>your info: {input.account}, {input.password}</div>
  </div>
}

const onValueChange2: <K extends keyof typeof exampleModel.input2>(key: K, value: typeof exampleModel.input2[K]) => void = (key, value) => {
  exampleModel.input2[key] = value
}

const onSubmit2 = () => {
  publish(RENDER_SEARCH_CONTROL2, 'SUBMIT')
}

const RENDER_SEARCH_CONTROL2 = 'RENDER_SEARCH_CONTROL2'

const SearchControl2 = () => {
  console.log('RENDER SearchControl2')

  const input = exampleModel.input2;
  const [rk, reset] = useResetWithKey()
  useSubscribe(RENDER_SEARCH_CONTROL2, ({action, render}) => {
    if (action === 'INPUT') render()
    else if (action === 'SUBMIT') reset()
  })

  return <div key={rk}>
    <h3>SearchControl2</h3>
    <input type="text" placeholder={'account'} onChange={ev => onValueChange2('account', ev.target.value)}/>
    <input type="text" placeholder={'password'} onChange={ev => onValueChange2('password', ev.target.value)} onKeyDown={ev => ev.key === 'Enter' && onSubmit2()}/>
    <button onClick={onSubmit2}>submit</button>
    <div>your info: {input.account}, {input.password}</div>
  </div>
}

const Example = () => {
  return <div>
    <h1>example</h1>
    <SearchControl />
    <SearchControl2 />
  </div>
}

const App = () => {
  return (
    <Router>
      <Header/>
      <Route path="/" exact={true} component={Example}/>
    </Router>
  );
}

export default App;
