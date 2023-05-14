export const menu = [
    {     
      title: "Home",
      items: []
    },
    {
     
      title: "About",
      items: [
        {
          title: "About",
          to: "/About"
        },
        {
          title: "History",
          to: "/About/History"
        },
        {
          title: "A Miracle Well",
          to: "/About/Well"
        }
      ]
    },
    {
      title: "Project",
      to: "/Project"
    },
    {
      
      title: "Faq",
      to: "/Faq"
    },
    { 
        title: "Contact",
        to: "/Contact"
        },
       { title: "Donate",
       to: "/Donate"
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
  