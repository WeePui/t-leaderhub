import { Layout } from "antd";
import CustomHeader from "@components/ui/Header";
import Sidebar from "@components/ui/Sidebar";

const { Header: AntHeader, Content, Sider } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AntHeader
        className="flex items-center bg-white"
        style={{
          backgroundColor: "#fff",
          padding: 0,
          boxShadow: "0px -1px 0px 0px #F0F0F0 inset",
        }}
      >
        <CustomHeader notificationCount={11} userName="John Smith" />
      </AntHeader>
      <Layout>
        <Sider className="w-52" theme="light" style={{ background: "#fff" }}>
          <Sidebar />
        </Sider>
        <Layout className="p-6">
          <Content className="bg-white p-6 shadow-sm">{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
