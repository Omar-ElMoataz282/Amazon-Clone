import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./i18n/Trans.js"; // Import i18n configuration
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for routing
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./index.css"; // Import custom CSS
import MediaContext from "./Contexts/Media.tsx";
import StorageDataContext from "./Contexts/RefreshData.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <MediaContext>
      <StorageDataContext>
        <App />
      </StorageDataContext>
    </MediaContext>
  </BrowserRouter>
);
