import { useData } from "../ContextApi/ContextOne";
import Input from "../InputFolder/Input";
import "./FocusField.css";

function FocusField() {
  const inputArr = [1, 2, 3];
  const state = useData();
  const { setCount, progresStep } = state;
  return (
    <>
      <section className="focus_field">
        <div className="first_section">
          <p className="field_text">Today</p>
          <svg
            style={{ marginLeft: "0.6rem" }}
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M25.0012 15.6258C19.8349 15.6258 15.6258 19.8349 15.6258 25.0012C15.6258 30.1675 19.8349 34.3767 25.0012 34.3767C30.1675 34.3767 34.3767 30.1675 34.3767 25.0012C34.3767 19.8349 30.1675 15.6258 25.0012 15.6258ZM49.0649 23.4875L39.8164 18.8681L43.088 9.06294C43.5275 7.73475 42.2677 6.47492 40.9493 6.92416L31.1441 10.1958L26.515 0.937546C25.8899 -0.312515 24.1125 -0.312515 23.4875 0.937546L18.8681 10.186L9.05317 6.9144C7.72498 6.47492 6.46516 7.73475 6.9144 9.05317L10.186 18.8583L0.937546 23.4875C-0.312515 24.1125 -0.312515 25.8899 0.937546 26.515L10.186 31.1343L6.9144 40.9493C6.47492 42.2774 7.73475 43.5373 9.05317 43.088L18.8583 39.8164L23.4777 49.0649C24.1027 50.3149 25.8802 50.3149 26.5052 49.0649L31.1246 39.8164L40.9297 43.088C42.2579 43.5275 43.5177 42.2677 43.0685 40.9493L39.7969 31.1441L49.0453 26.5247C50.3149 25.8899 50.3149 24.1125 49.0649 23.4875ZM33.8395 33.8395C28.9662 38.7128 21.0362 38.7128 16.1629 33.8395C11.2896 28.9662 11.2896 21.0362 16.1629 16.1629C21.0362 11.2896 28.9662 11.2896 33.8395 16.1629C38.7128 21.0362 38.7128 28.9662 33.8395 33.8395Z"
              fill="#FED50D"
            />
            <circle cx="20.0389" cy="21.3317" r="0.646416" fill="#61481C" />
            <path
              d="M27.7958 27.7959C27.7958 28.4816 27.5234 29.1393 27.0385 29.6242C26.5536 30.1091 25.8959 30.3815 25.2102 30.3815C24.5244 30.3815 23.8667 30.1091 23.3818 29.6242C22.8969 29.1393 22.6245 28.4816 22.6245 27.7959L25.2102 27.7959H27.7958Z"
              fill="#61481C"
            />
            <circle cx="29.7352" cy="21.3317" r="0.646416" fill="#61481C" />
          </svg>
        </div>

        <section className="second_section">
          <p className="para">Raise the bar by completing your goals!</p>
        </section>

        {
          progresStep === 0 ? (<section className="progressBar">
          </section>) :
        (<section className="progressBar">
          <div className="progressBar_green" style={{width:`${33.33 * progresStep}%`}} >
                <p className="progress_text">{progresStep}/3 Completed</p>
          </div>
        </section>)
          }

        <section className="set_goal">
          <p className={setCount === 0 ? "goal_para para_green" : "goal_para"}>
            {setCount === 2
              ? `Now 🙂, set only ${setCount} goals!`
              : setCount === 1
              ? `Just set the only ${setCount} goals ☺️.`
              : setCount === 0 ? `You have been set the all goal successfully ☺️.` :`Please set all the ${setCount} goals!`}
          </p>
        </section>

        {inputArr.map((data) => (
          <Input key={data} data={data} length={inputArr.length} inputArr = {inputArr} />
        ))}

        <section>
          <p className="move_para">
            {
              inputArr.length - setCount === 1 ? "“You moved one step of progress!”" :
              inputArr.length - setCount === 2 ? "“Keep Going, You’re making great progress!”" :
              inputArr.length - setCount === 3 ? "“You fill the progress”" : 
              "“Move one step ahead, today!”"
            }
          </p>
        </section>

        <section>
          <p className="author_para">Made with ❤️ by Vanshaj Narayan</p>
        </section>
      </section>
    </>
  );
}

export default FocusField;
