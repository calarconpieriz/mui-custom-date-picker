import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { styled } from "@material-ui/core/styles";

const DateInput = styled(KeyboardDatePicker)({
  border: "solid 1px #666666",
  borderRadius: 4,
  color: "white",
  padding: "7px 0px 7px 16px"
});

function App() {
  const [selectedDate, handleDateChange] = useState(null);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateInput
        InputProps={{
          disableUnderline: true
        }}
        views={["year", "month"]}
        format={"MMM yyyy"}
        disableToolbar
        variant="inline"
        margin="normal"
        id="date-picker-inline"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date"
        }}
        placeholder="Select a date"
      />
    </MuiPickersUtilsProvider>
  );
}

export default App;
