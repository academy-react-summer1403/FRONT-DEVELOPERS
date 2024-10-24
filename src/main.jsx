import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { store } from "./core/redux/store.js";
import App from "./App.jsx";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
// import i18n from "./components/Translate/i18n.js";



const queryClient = new   QueryClient({
  defaultOptions:{queries:{retry:3 , retryDelay:1000}}
})



createRoot(document.getElementById("root")).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
      <Provider store={store}>
          <App/>
          <ToastContainer />
      </Provider>
    {/* <ReactQueryDevtools/> */}
    </QueryClientProvider>
  </StrictMode>
);

