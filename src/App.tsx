import RecursiveComponent from "./components/RecursiveComponent";
import { FileTree } from "./data/FileTree";

function App() {
  return (
    <div className="mt-5">
      <RecursiveComponent fileTree={FileTree} />
    </div>
  );
}

export default App;
