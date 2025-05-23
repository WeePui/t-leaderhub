import { Avatar, Badge, theme } from "antd";
import { Bell, NotepadText } from "lucide-react";
import { UserOutlined } from "@ant-design/icons";
import headerLogo from "@assets/images/header-logo.png";

interface HeaderProps {
  notificationCount?: number;
  userName?: string;
  userAvatar?: string;
}

const Header = ({
  notificationCount = 0,
  userName = "User Name",
  userAvatar,
}: HeaderProps) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  return (
    <div className="flex w-full items-center justify-between bg-white px-4">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={headerLogo} alt="T-LeaderHub logo" className="mr-2" />
        <h1 className="text-xl font-bold">Leader Hub</h1>
      </div>
      {/* User Section with Icons */}
      <div className="flex items-center gap-3">
        {/* Notepad Icon */}
        <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-gray-100">
          <NotepadText size={20} />
        </div>
        {/* Bell with Notification Count */}
        <div className="relative flex cursor-pointer">
          <Badge
            count={notificationCount}
            size="default"
            offset={[2, -1]}
            color={colorPrimary}
            overflowCount={99}
            showZero={false}
          >
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-gray-100">
              <Bell size={20} />
            </div>
          </Badge>
        </div>{" "}
        {/* User Avatar & Name */}
        <div className="ml-1 flex cursor-pointer items-center gap-2 border-gray-200 pl-3">
          <Avatar
            size={32}
            src={userAvatar}
            icon={<UserOutlined />}
            style={{ backgroundColor: "#1677ff" }}
          />
          <span className="hidden text-sm md:inline">{userName}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
