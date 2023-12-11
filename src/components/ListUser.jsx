import { useEffect, useState } from "react";
import axios from "axios";
import CardUser from "./CardUser";
import SaveUser from "./SaveUser"
<<<<<<< HEAD
import CardUser from "./CardUser"
import { AnimatePresence } from "framer-motion"
=======

>>>>>>> 20f7900e9cd61ceaae617ee405758395ec038c14

const ListUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://users-crud.academlo.tech/users/")
      .then((users) => setUsers(users.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
<<<<<<< HEAD
    <article className="w-full grid grid-cols-3 gap-12 max-xl:grid-cols-2 max-lg:grid-cols-1 max-sm:gap-6">
        <AnimatePresence>
        {users?.map(user => (
          <CardUser currentUser={user} />
        ))}
        </AnimatePresence>
    </article>
  )
}
=======
    <section className="grid grid-cols-4">
      {users?.map((user) => (
        <CardUser key={user.id + user.email} currentUser={user} />
      ))}
    </section>
  );
};
>>>>>>> 20f7900e9cd61ceaae617ee405758395ec038c14

export default ListUser;
