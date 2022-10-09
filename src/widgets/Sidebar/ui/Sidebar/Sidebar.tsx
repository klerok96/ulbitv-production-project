import { PropsWithChildren, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "features/LangSwitcher";
import cls from "./Sidebar.module.scss";
import { ThemeSwitcher } from "features/ThemeSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<PropsWithChildren<SidebarProps>> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.langSwitcher} />
      </div>
    </div>
  );
};
