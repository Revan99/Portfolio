import React from "react";
import myImage from "./../images/lightmode/revan.png";
import PersonalInfo from "./../personalInfo/PersonalInfo.json";
export default function Home() {
  console.log(PersonalInfo);
  const [them, setThem] = useState(()=>false);
    return (
        <div className={`flex flex-row items-center justify-between h-screen border-8 xl:justify-around ${theme? }`}>
      <div className="flex flex-col border xl:-ml-64 h-1/2">
        <h1 className="text-6xl">{PersonalInfo.name}</h1>
        <h1>{PersonalInfo.jobTitle}</h1>
        <button className="mt-32 rounded">Hire me</button>
      </div>

      <div className={`flex justify-center border ${primarry}`}>
        <img src={myImage} alt="my" className="border" />
      </div>
    </div>
  );
}
