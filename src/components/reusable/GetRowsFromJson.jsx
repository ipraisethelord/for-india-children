import Classroom from "../../assets/data/classroom.json";
import Building from "../../assets/data/building.json";
import Lab from "../../assets/data/lab.json";
import Transportation from "../../assets/data/transportation.json";

const GetRowsfromJson = (category) => {
  let rows = [];
console.log(category.toLowerCase());
  if (category.toLowerCase().startsWith("classroom")) {
    rows = Classroom.map((i) => {
      const { id, item, price, quantity, total } = i;
      return { id, item, price, quantity, total };
    });
  } else if (category.toLowerCase().startsWith("lab")) {
    rows = Lab.map((i) => {
      const { id, item, price, quantity, total } = i;
      return { id, item, price, quantity, total };
    });
  } else if (category.toLowerCase().startsWith("school bus")) {
    rows = Transportation.map((i) => {
      const { id, item, price, quantity, total } = i;
      return { id, item, price, quantity, total };
    });
  } else {
    rows = Building.map((i) => {
      const { id, item, price, quantity, total } = i;
      return { id, item, price, quantity, total };
    });
  }

  return rows;
};

export default GetRowsfromJson;
