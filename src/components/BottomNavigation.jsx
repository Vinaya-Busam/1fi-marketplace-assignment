import { NavLink, useLocation } from "react-router-dom";

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.5 10.5 12 3l8.5 7.5" />
      <path d="M5.5 9.5V21h13V9.5" />
      <path d="M9.5 21v-6h5v6" />
    </svg>
  );
}

function ShopIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 9h14v12H5z" />
      <path d="M7 9V6.5A5 5 0 0 1 17 6.5V9" />
      <path d="M8 13h8" />
    </svg>
  );
}

function EmiIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="3.5" width="14" height="17" rx="2" />
      <path d="M8.5 8h7" />
      <path d="M8.5 12h7" />
      <path d="M8.5 16h4" />
    </svg>
  );
}

function LimitIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 19V11" />
      <path d="M12 19V6" />
      <path d="M19 19V3" />
      <path d="M3 19h18" />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 21a7 7 0 0 1 14 0" />
    </svg>
  );
}

function BottomNavigation() {
  const location = useLocation();

  const navigationItems = [
    {
      label: "Home",
      path: "/home",
      icon: <HomeIcon />,
    },
    {
      label: "Shop",
      path: "/shop",
      icon: <ShopIcon />,
    },
    {
      label: "EMI Dues",
      path: "/emi-dues",
      icon: <EmiIcon />,
    },
    {
      label: "Limit",
      path: "/limit",
      icon: <LimitIcon />,
    },
    {
      label: "Profile",
      path: "/profile",
      icon: <ProfileIcon />,
    },
  ];

  function isItemActive(path) {
    if (path === "/shop") {
      return (
        location.pathname === "/shop" ||
        location.pathname.startsWith("/shop/") ||
        location.pathname.startsWith("/marketplace")
      );
    }

    return location.pathname === path;
  }

  return (
    <nav className="bottom-navigation">
      {navigationItems.map((item) => {
        const active = isItemActive(item.path);

        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={`bottom-nav-item ${active ? "active" : ""}`}
          >
            <span className="bottom-nav-icon">
              {item.icon}
            </span>

            <small>{item.label}</small>
          </NavLink>
        );
      })}
    </nav>
  );
}

export default BottomNavigation;