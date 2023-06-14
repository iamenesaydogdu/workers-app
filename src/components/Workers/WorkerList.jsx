import React from "react";
import Card from "../UI/Card";

const WorkerList = (props) => {

  const { workers, setWorkers } = props;

  if(workers.length <1){
    return;
  }

  console.log(workers);

  const deleteHandler = (id) => {
    setWorkers(workers.filter((item) => item.id !== id));
  };

  return (
    <Card className="mt-10">
      <ul>
        <li className="flex justify-between p-2">
          <span className="font-bold">Isim</span>
          <span className="font-bold">Maas</span>
        </li>
        {workers.map((worker) => (
          <li
            className="flex justify-between p-2 cursor-pointer hover:shadow-xl transition-all"
            key={worker.id}
            onClick={() => deleteHandler(worker.id)}
          >
            <span>{worker.name}</span>
            <span className="text-teal-700 font-medium">{worker.wage}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default WorkerList;
