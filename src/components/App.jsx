import { WordForm } from './WordForm/WordForm';
import { WordsList } from './WordsList/WordsList';
import { Container } from './style/Container';
import { GlobalStyle } from './style/GlobalStyle';

export default function App() {
  return (
    <Container>
      <WordForm />
      <WordsList />
      <GlobalStyle />
    </Container>
  );
}
