import Routers from './Router';
import { EditorProvider } from './Contexts/EditorContext';

function App() {
  return (
    <>
      <EditorProvider>
        <Routers />
      </EditorProvider>
    </>
  );
}

export default App;