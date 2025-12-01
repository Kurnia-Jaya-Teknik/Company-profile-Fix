import { useState } from "react";
import { MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderItem } from "../../../../types/menu";

const MobileHeaderLink: React.FC<{ item: HeaderItem; onClick?: (e?: MouseEvent) => void }> = ({ item, onClick }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };
  //
  // Check if current path matches item href
  const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
  
  // Check if any submenu item is active
  const hasActiveSubmenu = item.submenu?.some(
    (subItem) => pathname === subItem.href || pathname?.startsWith(subItem.href + "/")
  );

  return (
    <div className="relative w-full">
      <Link
        href={item.href}
        onClick={onClick}
        className={`flex items-center justify-between w-full py-3.5 px-4 rounded-xl transition-all duration-200 font-medium group ${
          isActive || hasActiveSubmenu
            ? "bg-gradient-to-r from-primary to-primary/80 text-white shadow-md"
            : "text-midnight_text dark:text-white hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5"
        }`}
      >
        <span className="group-hover:translate-x-1 transition-transform duration-200">{item.label}</span>
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className={`transition-transform duration-300 ${
              submenuOpen ? 'rotate-180' : ''
            } ${isActive || hasActiveSubmenu ? 'text-white' : ''}`}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>
      {submenuOpen && item.submenu && (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl mt-2 ml-4 overflow-hidden border border-gray-200 dark:border-gray-700">
          {item.submenu.map((subItem, index) => {
            const isSubItemActive = pathname === subItem.href || pathname?.startsWith(subItem.href + "/");
            return (
              <Link
                key={index}
                href={subItem.href}
                onClick={onClick}
                className={`flex items-center py-3 px-4 text-sm transition-all duration-200 border-b border-gray-200 dark:border-gray-700 last:border-b-0 group ${
                  isSubItemActive
                    ? "bg-primary text-white font-semibold"
                    : "text-midnight_text dark:text-white hover:bg-primary hover:text-white"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full mr-3 transition-colors ${
                  isSubItemActive
                    ? "bg-white"
                    : "bg-gray-400 dark:bg-gray-600 group-hover:bg-white"
                }`}></span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">{subItem.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;
