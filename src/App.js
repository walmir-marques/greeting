import students from "./data/students";
import React from "react";

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl mb-5">Lista de Estudantes: </h1>
      <StudentsTable students={students} />
    </div>
  );
}

function StudentsTable({ students }) {
  return (
    <table className="w-full border border-gray-600 rounded-md overflow-hidden">
      <thead>
        <tr className="text-left border-b border-gray-600 bg-gray-800 text-white">
          <th className="p-3">Name</th>
          <th className="p-3">Status</th>
          <th className="p-3"> Grade1</th>
          <th className="p-3">Grade2</th>
          <th className="p-3">Final Grade </th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr
            key={student.id}
            className="text-gray-800 bg-gray-400 border-b border-gray-600"
          >
            <td className="p-3 flex items-center  ">
              <img
                src={student.avatar}
                alt={student.name}
                className="w-10 h-10 rounded-full m-3"
              />
              <div>
                <div className="font-bold">{student.name}</div>
                <div>{student.email}</div>
              </div>
            </td>
            <td className="p-3">
              {student.active ? (
                <div className="px-2 py-1 inline-block rounded-md border border-green-800 bg-green-600 text-white">
                  Active
                </div>
              ) : (
                <div className="px-2 py-1 inline-block rounded-md border border-red-800 bg-red-600 text-white">
                  Inactive
                </div>
              )}
            </td>
            <td className="p-3">{student.grade1}</td>
            <td className="p-3">{student.grade2}</td>
            <td className="p-3 font-bold">
              {student.active &&
                ((student.grade1 + student.grade2) / 2).toFixed(1)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
