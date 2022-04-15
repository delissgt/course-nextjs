import {useRef} from 'react';

import Button from "../ui/button";

// import classes from "./events-search.modules.css";
// import classes from "./events-search.module.css";
// import "./events-search.modules.css";

function EventsSearch (props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function submitHandler(event) {
    console.log("submit handler")
    console.log("submit handler props", props)
    event.preventDefault();

    const selectYear = yearInputRef.current.value;
    const selectMonth = monthInputRef.current.value;


    // props.newOnSearch();
    props.onSearch(selectYear, selectMonth);

  }


  return (
      <form
          className={"form"}
          // className={classes.form}
          onSubmit={submitHandler}
      >
        <div
            className={"controls"}
            // className={classes.controls}
        >
          <div className={"control"}>
            <label htmlFor={"year"}>Year</label>
            <select id={"year"} ref={yearInputRef}>
              <option value={"2021"}>2021</option>
              <option value={"2022"}>2022</option>
            </select>
          </div>
          <div className={"control"}>
            <label htmlFor={"month"}>Month</label>
            <select id={"month"} ref={monthInputRef}>
              <option value={"1"}>January</option>
              <option value={"2"}>February</option>
              <option value={"3"}>March</option>
              <option value={"4"}>April</option>
              <option value={"5"}>May</option>
              <option value={"6"}>June</option>
              <option value={"7"}>July</option>
              <option value={"8"}>August</option>
              <option value={"9"}>September</option>
              <option value={"10"}>October</option>
              <option value={"11"}>November</option>
              <option value={"12"}>December</option>
            </select>
          </div>
        </div>
        <Button>Find events</Button>
      </form>
  )
}
export default EventsSearch;