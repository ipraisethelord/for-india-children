export const NaviMenu = [
    {     
      title: "Home",    
      to:"/"
    },
    {
     
      title: "About",
      items: [
        {
          title: "About Us",
          to: "/about"
        },
        {
          title: "History",
          to: "/about/history"
        },
        {
          title: "A Miracle Well",
          to: "/about/well"
        }
      ]
    },
    {
      title: "Project",
      to: "/project"
    },
    {
      
      title: "Faq",
      to: "/faq"
    },
    { 
        title: "Contact",
        to: "/contact"
        },
       { title: "Donate",
       to: "/donate"
    },
  ];
  export function hasChildren(item) {
    const { items: children } = item;
  
    if (children === undefined) {
      return false;
    }
  
    if (children.constructor !== Array) {
      return false;
    }
  
    if (children.length === 0) {
      return false;
    }
  
    return true;
  }
  