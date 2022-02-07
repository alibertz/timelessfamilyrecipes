import styles from "../styles/Components/Sort/Sort.module.scss";

import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function Tags() {
  const [selectedTags, setSelectedTag] = React.useState();
  return (
    <div className={styles.sort}>
      <h2>What are you looking for?</h2>
      <Stack spacing={3}>
        <Autocomplete
          onChange={(event, newValue) => {
            setSelectedTag(newValue);
          }}
          multiple
          id="tags-outlined"
          options={recipeTags}
          getOptionLabel={(option) => option}
          defaultValue={[]}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="Cusine, food type, etc..."
              // placeholder="Favorites"
            />
          )}
        />
      </Stack>
    </div>
  );
}

const recipeTags = [
  "Italian",
  "Chinese",
  "Breakfast",
  "American",
  "Fast Food",
  "Mexican",
  "Sandwiches",
  "Chicken",
];
