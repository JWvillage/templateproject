import {Paper, IconButton, InputBase, Select, FormControl} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import '../../css/common.css'
import {MemberMapStore} from "../../store";

// @ts-ignore
const SearchBar = ({search, searchOptions}) => {

  const [searchField, setSearchField] = useState('');
  const [searchWord, setSearchWord] = useState('');

  const searchSet = (event: any) => {
    const {value} = event.target;
    const {name} = event.target;
    if (name === 'searchWord') {
      setSearchWord(value);
    } else if (name === 'searchField') {
      setSearchField(value)
    }
  };

  const _search = () => {
    if (searchField === 'ID') {
     search(MemberMapStore.instance.search(searchWord));
    } else {
      alert('no Field Value!')
    }
  };

  return (
    <div style={{display: "flex"}}>
      <div className='searchField'>
        <FormControl fullWidth>
          <Select native name='searchField' onChange={searchSet}>
            <option value=''>전체</option>
            {searchOptions.map((content: string, i: number) => <option key={i} value={content}>{content}</option>) }
          </Select>
        </FormControl>
      </div>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 200,
          height: 30,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
          name='searchWord'
          onChange={searchSet}
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={_search}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchBar;
