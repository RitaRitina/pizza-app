import Button from './components/Button/Button';
import LoginForm from './components/Form/Form';

function App() {
   return (
      <>
         <LoginForm></LoginForm>
         <Button onClick={() => console.log('click')}>Click me</Button>
      </>
   );
}

export default App;
