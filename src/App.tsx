import OpenFileBar from "./components/OpenFileBar";
import RecursiveComponent from "./components/RecursiveComponent";
import { FileTree } from "./data/FileTree";

function App() {
  return (
    <div>
      <div className="flex items-start h-screen">
        <div className="w-64 border-r border-white mr-3 mt-5">
          <RecursiveComponent fileTree={FileTree} />
        </div>
        <OpenFileBar />
      </div>
    </div>
  );
}

export default App;
