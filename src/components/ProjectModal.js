import React, { useState } from "react";

export default function ProjectModal({
  pName,
  pDesciption,
  techs,
  github,
  demo,
  them,
}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-xl m-5 p-5  ${
        them ? "bg-tertiaryLight" : " bg-7thColorDark"
      }`}
    >
      <img
        className="w-full rounded"
        src="https://tailwindcss.com/img/card-top.jpg"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div
          className={`${them ? "text-5thColorLight" : "text-6thColorDark"}
          font-extrabold text-xl mb-2`}
        >
          {" "}
          {pName}
        </div>
      </div>
      <div>
        <div className="px-6  pb-2">
          {techs.map((tech) => (
            <span
              class={`inline-block ${
                them
                  ? " bg-7thColorLight text-5thColorLight"
                  : "   bg-tertiaryDark  text-4thColorDark"
              } rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-end">
        <button
          className={`rounded border-4  font-bold border-primaryLights  border-primaryLight transition-all duration-150  w-40 ${
            them ? " hover:text-7thColorLight" : " hover:text-tertiaryDark"
          } text-primaryLight bg-transparent py-2 hover:bg-primaryLight `}
          type="button"
          style={{ transition: "all .15s ease" }}
          onClick={() => setShowModal(true)}
        >
          Detail
        </button>
        {showModal ? (
          <>
            <div className="justify-center items-center m-5 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                    <h3 className="text-3xl font-semibold">{pName}</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <spa
                        n
                        className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
                      >
                        ×
                      </spa>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-gray-600 text-lg leading-relaxed">
                      {pDesciption}
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={demo}
                      className={`font-bold transition-all duration-150 text-secondaryLight bg-primaryLight border-primaryLight hover:bg-transparent hover:text-primaryLight bg-transparent  rounded cursor-pointer border-solid border-2 py-2 px-8 flex justify-center mr-5`}
                    >
                      Demo
                    </a>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={github}
                      className={`font-bold transition-all duration-150 text-primaryLight border-primaryLight hover:bg-primaryLight hover:text-secondaryLight bg-transparent  rounded cursor-pointer border-solid border-2 py-2 px-8 flex justify-center `}
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </div>
  );
}
