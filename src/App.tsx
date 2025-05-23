import { ConfigProvider } from "antd";
import MainLayout from "./components/layout/MainLayout";
import { Link } from "react-router-dom";
import Button from "@components/ui/Button";

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
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-bold">T-LeaderHub Dashboard</h1>
            <p className="mt-2 text-gray-600">
              Welcome to the T-LeaderHub web application UI component library.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="border-b pb-2 text-xl font-semibold">
              Available Components
            </h2>

            <div className="space-y-2">
              <h3 className="text-lg font-medium">Button Component</h3>
              <p className="text-gray-600">
                A versatile button component with 16 variants, 3 sizes, icon
                support, loading state, and animations.
              </p>
              <div className="mt-2">
                <Link to="/button-demo">
                  <Button variant="primary">View Button Demo</Button>
                </Link>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <h3 className="text-lg font-medium">Badge Component</h3>
              <p className="text-gray-600">
                A customizable badge component with 13 color variants, 3 sizes,
                and multiple icon options including dots, avatars, and country
                flags.
              </p>
              <div className="mt-2">
                <Link to="/badge-demo">
                  <Button variant="outline-primary">View Badge Demo</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </ConfigProvider>
  );
}

export default App;
