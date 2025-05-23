import { Menu } from "antd";
import type { MenuProps } from "antd";
import "./sidebar.css";
import {
  Settings,
  House,
  ChartColumnIncreasing,
  Group,
  UsersRound,
  Command,
} from "lucide-react";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group",
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Home", "home", <House size={14} />),
  getItem("Dashboard", "dashboard", <ChartColumnIncreasing size={14} />),
  getItem("Group", "group", <Group size={14} />),
  getItem("People", "people", <UsersRound size={14} />, [
    getItem("Employees", "employees"),
    getItem("Skills", "skills"),
    getItem("Notes", "notes"),
    getItem("Organizations", "organizations"),
    getItem("Certifications", "certifications"),
    getItem("Incomes", "incomes"),
  ]),
  getItem("Projects", "projects", <Command size={14} />, [
    getItem("Customer", "customer"),
    getItem("My Projects", "my-projects"),
    getItem("Invoices", "invoices"),
    getItem("Invoices Processing", "invoices-processing"),
    getItem("Tasks", "tasks"),
  ]),
  getItem("Settings", "settings", <Settings size={14} />, [
    getItem("Invoices", "settings-invoices"),
    getItem("Skills", "settings-skills"),
    getItem("Employees", "settings-employees"),
    getItem("Exchange Rate", "exchange-rate"),
    getItem("Languages", "languages"),
  ]),
];

const Sidebar = () => {
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    console.log("Menu item clicked:", e.key);
    // Here you can add navigation logic
  };
  return (
    <div className="h-full w-full overflow-hidden bg-white">
      <Menu
        onClick={handleMenuClick}
        defaultSelectedKeys={["home"]}
        defaultOpenKeys={[]}
        mode="inline"
        items={items}
        theme="light"
        className="custom-sidebar w-full"
        style={{ padding: 0, margin: 0, width: "100%" }}
      />
    </div>
  );
};

export default Sidebar;
