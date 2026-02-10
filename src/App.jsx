import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header.jsx";
import ProfileCard from "./ProflieCard.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <ProfileCard
        name="Momo Multiply"
        src="public\image profile.jpg"
        description="lorem15  jpuj  ih oioiuh ouh ugouc guedsbvc edwb uweg uje foiewu fkjag ficewb fiywg jewg fiu;oiwyq [r0pwfg owifj eof hwsoguhs irhg isugoe hfeu h;sk vfsubv ;oeiifr ehf euh fue i e fih fpufjzlc gyo iuyfgug fuh fygf uat f 9 ;978 y98 k8y8-77-70-70976875 o ufhoiwyf ij  sifh "
        prfType="student"
      />
      <ProfileCard
        name="Bogi Halery"
        src="public\vite.svg"
        description="lorem15  jpuj  ih oioiuh ouh ugouc guedsbvc edwb uweg uje foiewu fkjag ficewb fiywg jewg fiu;oiwyq [r0pwfg owifj eof hwsoguhs irhg isugoe hfeu h;sk vfsubv ;oeiifr ehf euh fue i e fih fpufjzlc gyo iuyfgug fuh fygf uat f 9 ;978 y98 k8y8-77-70-70976875 o ufhoiwyf ij  sifh "
        prfType="friend"
      />
      <ProfileCard
        name="Fady Guarra"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&s"
        description="lorem15  jpuj  ih oioiuh ouh ugouc guedsbvc edwb uweg uje foiewu fkjag ficewb fiywg jewg fiu;oiwyq [r0pwfg owifj eof hwsoguhs irhg isugoe hfeu h;sk vfsubv ;oeiifr ehf euh fue i e fih fpufjzlc gyo iuyfgug fuh fygf uat f 9 ;978 y98 k8y8-77-70-70976875 o ufhoiwyf ij  sifh "
        prfType="teacher"
      />
    </>
  );
}

export default App;
