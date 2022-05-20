import "./App.css";
import Characters from "./component/charactor";
import {QueryClientProvider,QueryClient} from "react-query"
import {ReactQueryDevtools}from "react-query/devtools"
const queryClient = new QueryClient()
function App() {
  return <div className="App">
   
    <QueryClientProvider client={queryClient}>
    <Characters/>
    <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"}/>
    </QueryClientProvider>
  </div>;
}

export default App;
