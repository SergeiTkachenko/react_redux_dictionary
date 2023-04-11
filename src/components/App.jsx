import { Route, Routes } from 'react-router-dom';
import { Container } from './style/Container';
import { GlobalStyle } from './style/GlobalStyle';
import Navigation from './Navigation/Navigation';
import { Home } from 'pages/Home';
import { Learn } from 'pages/Learn';

export default function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigation></Navigation>}>
          <Route index element={<Home></Home>} />
          <Route path="learn" element={<Learn></Learn>} />
        </Route>
      </Routes>
      <GlobalStyle />
    </Container>
  );
}
