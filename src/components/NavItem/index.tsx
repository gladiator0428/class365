import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import * as Styled from "./navItem.styles";
import type * as Type from "../../types";

export const NavItem: React.FC<Type.INavItemProps> = ({
  label,
  to,
  subMenu,
}) => {
  const router = useNavigate();
  const [isActive, setIsActive] = useState("no-submenu");
  const [width, setWidth] = useState(window.innerWidth);
  const [isSubActive, setIsSubActive] = useState("no-submenu");
  const wrapperRef = useRef<any>(null);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsSubActive("no-submenu");
        setIsActive("no-submenu");
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const handleNavClick = () => {
    if (subMenu) {
      setIsActive((prev) => {
        setIsSubActive("no-submenu");
        return prev === label ? "no-submenu" : label;
      });
    } else {
      setIsActive("no-submenu");
      setIsSubActive("no-submenu");
      router(to);
    }
  };

  return (
    <Styled.NavItemWrapper ref={wrapperRef}>
      <Styled.NavLabel onClick={handleNavClick}>
        <span>{label}</span>
        {subMenu && <BsChevronDown size={11} />}
      </Styled.NavLabel>
      <Styled.SubMenuWrapper active={isActive === label ? "true" : undefined}>
        {subMenu?.map((item, key) => (
          <Styled.SubMenuItemWrapper
            key={key}
            onMouseEnter={() =>
              width > 1024
                ? item.subMenu
                  ? setIsSubActive(item.label)
                  : null
                : null
            }
            onMouseLeave={() => setIsSubActive("no-submenu")}
            onClick={() =>
              item.subMenu
                ? width > 1024
                  ? {}
                  : setIsSubActive((prev) =>
                      prev === item.label ? "no-submenu" : item.label
                    )
                : router(item.to)
            }
          >
            <span>{item.label}</span>
            {item.subMenu ? <BsChevronRight size={11} /> : null}
            <Styled.SubMenuWrapper
              active={isSubActive === item.label ? "true" : undefined}
              className="sub-menu"
            >
              {item?.subMenu?.map((item1: any, key1: number) => (
                <Styled.SubMenuItemWrapper
                  key={key1}
                  onClick={() => (item1.subMenu ? {} : router(item1.to))}
                >
                  {item1.label}
                </Styled.SubMenuItemWrapper>
              ))}
            </Styled.SubMenuWrapper>
          </Styled.SubMenuItemWrapper>
        ))}
      </Styled.SubMenuWrapper>
    </Styled.NavItemWrapper>
  );
};
