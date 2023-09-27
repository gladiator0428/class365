import { GrAnnounce } from "react-icons/gr";
import { TbEdit } from "react-icons/tb";
import { IoSettingsOutline, IoSchoolOutline } from "react-icons/io5";
import { PiPresentation, PiToolbox } from "react-icons/pi";
import { CiDollar } from "react-icons/ci";
import { HiOutlineChip } from "react-icons/hi";
import { LuFileEdit } from "react-icons/lu";
import { GiWhiteBook } from "react-icons/gi";
import { FaChalkboardUser } from "react-icons/fa6";

export const headerLeftNavs = [
  {
    label: "Free Resources",
    to: "/free",
  },
  {
    label: "Solutions",
    to: "",
    subMenu: [
      {
        label: "Teams",
        to: "/",
        subMenu: [
          {
            label: "Marketing",
            to: "/solution/team/marketing",
            icon: <GrAnnounce />,
          },
          {
            label: "Registrar",
            to: "/solution/team/register",
            icon: <TbEdit />,
          },
          {
            label: "Administrator",
            to: "/solution/team/administrator",
            icon: <IoSettingsOutline />,
          },
          {
            label: "Teachers",
            to: "/solution/team/teachers",
            icon: <PiPresentation />,
          },
          {
            label: "CFO",
            to: "/solution/team/cfo",
            icon: <CiDollar />,
          },
          {
            label: "IT Leaders",
            to: "/solution/team/it",
            icon: <HiOutlineChip />,
          },
          {
            label: "Business Leaders",
            to: "/solution/team/business",
            icon: <PiToolbox />,
          },
        ],
      },
      {
        label: "Organizations",
        to: "/",
        subMenu: [
          {
            label: "Academies",
            to: "/solution/institutes/academies",
            icon: <LuFileEdit />,
          },
          {
            label: "Schools",
            to: "/solution/institutes/schools",
            icon: <GiWhiteBook />,
          },
          {
            label: "Universities & Higher Education",
            to: "/solution/institutes/universities",
            icon: <IoSchoolOutline />,
          },
          {
            label: "Corporate Learining",
            to: "/solution/institutes/corporate",
            icon: <FaChalkboardUser />,
          },
        ],
      },
      {
        label: "Features",
        to: "",
        subMenu: [
          {
            label: "Pre-Adminssion & Enrolment",
            to: "/solution/features/pre-admission",
            image: "/assets/images/shapes/pre-admission.png",
          },
          {
            label: "Customer Relationship Management",
            to: "/solution/features/customer",
            image: "/assets/images/shapes/CRM.png",
          },
          {
            label: "Learning Management System",
            to: "/solution/features/learning",
            image: "/assets/images/shapes/LMS.png",
          },
          {
            label: "Finance & Accounting",
            to: "/solution/features/finance",
            image: "/assets/images/shapes/Finance.png",
          },
          {
            label: "Alumni Module",
            to: "/solution/features/alumni",
            image: "/assets/images/shapes/Alumni.png",
          },
          {
            label: "Apps & Integrations",
            to: "/solution/features/apps",
            image: "/assets/images/shapes/Integrations.png",
          },
          {
            label: "Student Information System",
            to: "/solution/features/student",
            image: "/assets/images/shapes/SIS.png",
          },
          {
            label: "Analytics",
            to: "/solution/features/analytics",
            image: "/assets/images/shapes/Analytics.png",
          },
          {
            label: "White Label Module",
            to: "/solution/features/white",
            image: "/assets/images/shapes/White label.png",
          },
          {
            label: "E-commerce Module",
            to: "/solution/features/ecommerce",
            image: "/assets/images/shapes/E-commerce.png",
          },
          {
            label: "Fee & Donation Module",
            to: "/solution/features/fee",
            image: "/assets/images/shapes/Fees_invoicing.png",
          },
        ],
      },
    ],
  },
  {
    label: "Pricing",
    to: "/pricing",
  },
  {
    label: "More",
    to: "/",
    subMenu: [
      {
        label: "Demo",
        to: "/demo",
      },
      {
        label: "ROI Calculator",
        to: "/roi",
      },
    ],
  },
];

export const headerRightNavs = [
  {
    label: "Contact Sales",
    to: "/contact",
  },
  {
    label: "Log in",
    to: "/login",
  },
];
