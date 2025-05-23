import { ConfigProvider } from "antd";
import MainLayout from "./components/layout/MainLayout";
import { Link } from "react-router-dom";
import { Button } from "@components/ui/Button";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0D6EFD",
          colorTextBase: "#212529",
          colorBorder: "#DEE2E6",
          colorSuccess: "#198754",
          colorInfo: "#0DCAF0",
          colorWarning: "#FFC107",
        },
      }}
    >
      <MainLayout>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">T-LeaderHub Dashboard</h1>
          <p>Welcome to the T-LeaderHub web application.</p>

          <div className="mt-8">
            <h2 className="mb-4 text-xl font-semibold">Component Showcase</h2>
            <Link to="/button-demo">
              <Button variant="primary">View Button Demo</Button>
            </Link>
          </div>
        </div>
      </MainLayout>
    </ConfigProvider>
  );
}

export default App;
