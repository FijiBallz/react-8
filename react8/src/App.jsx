import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import ProductImage from './components/ProductImage.jsx';
import AvatarList from './components/AvatarList.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      zad2
      <ProductImage
        src="https://pbs.twimg.com/profile_images/1061027765154209792/BTYc67c7_400x400.jpg"
        alt="Major"
      />
      <ProductImage src={viteLogo} alt="logoVite" />
      <ProductImage src="src/assets/hero.png" alt="superman" />
      zad3
      <AvatarList
        users={[
          { id: 1, name: 'Jan', role: 'cos' },
          { id: 2, name: 'Michał', role: 'przedstawiciel' },
        ]}
      />
    </>
  );
}

export default App;
