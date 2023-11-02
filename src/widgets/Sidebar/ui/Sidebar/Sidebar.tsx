import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed( prev => !prev);
    };

    return (
        <div className={classNames(cls.sidebar, {[cls.sidebarCollapsed]: collapsed}, [className])}>
            <button className={cls.button} onClick={onToggle}>Toggle</button>
            <div className='switchers'>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};
