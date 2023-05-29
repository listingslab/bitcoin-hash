import * as React from "react"
import {
  styled,
  alpha,
  Box,
  IconButton,
  Grid,
  InputBase,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material"
import {
  usePwaSelect,
  usePwaDispatch,
  search,
  cancelSearch,
  updateSearchMode,
  updateSearchStr,
  selectPWA,
  Icon,
  Font,
} from "../"

const SearchBox = styled("div")(({ theme }) => ({
  position: "relative",
  color: theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.secondary.main, 0.25),
  "&:hover": {
    backgroundColor: alpha(theme.palette.secondary.main, 0.15),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(2),
    width: "auto",
  },
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    // transition: theme.transitions.create("width"),

    [theme.breakpoints.up("md")]: {
    },
  },
}))

export default function Search() {  
  const pwa = usePwaSelect(selectPWA)
  const dispatch = usePwaDispatch()
  const {searchMode, searchStr, searching, searchResults} = pwa
  const onSearchClick = () => dispatch (search())
  const onCancelSearchClick = () => dispatch (cancelSearch())
  const onUpdateSearchStr = (searchStr: string) => {
    dispatch (updateSearchStr(searchStr))
  }
  const onRadioClick = (searchMode: string) => {
    dispatch (updateSearchMode(searchMode))
  }
  
  return (<>
            <Grid container>
              <Grid item sx={{flexGrow:1}} >
                <Box sx={{mx: 2}}>
                  <SearchBox>
                    <SearchIconWrapper>
                      <Icon icon="hash" color="secondary" />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder={`Search ${searchMode === "address" 
                      ? "address hashes" : "transaction hashes"}...`}
                      value={searchStr}
                      onChange={(e: any) => onUpdateSearchStr(e.target.value)}
                    />
                  </SearchBox>
                </Box>
              </Grid>

              <Grid item>
                <Box sx={{mx: 2}}>
                  { !searching ? <IconButton
                    color="secondary"
                    disabled={searchStr === "" ? true : false}
                    onClick={() => onSearchClick()}>
                    <Icon icon="search"/>
                  </IconButton> : <IconButton
                    color="secondary"
                    onClick={() => onCancelSearchClick()}>
                    <Icon icon="close"/>
                  </IconButton> }
                </Box>
              </Grid>

              <Grid item>
                <Box sx={{mx:2.5}}>
                  <FormControl>
                    <RadioGroup row value={searchMode}>
                      <FormControlLabel 
                        label={<>
                          <Font variant="small">
                            Addresses
                          </Font></>}
                        value="address" 
                        onClick={() => onRadioClick("address")}
                        control={<Radio size="small"/>} 
                      />
                      <FormControlLabel 
                        label={<>
                          <Font variant="small">
                            Transactions
                          </Font></>}
                        value="transaction" 
                        onClick={() => onRadioClick("transaction")}
                        control={<Radio size="small"/>}
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Grid>

              {searchResults ? <Grid item xs={12}>
                <pre>
                  {JSON.stringify(searchResults, null, 2)}  
                </pre>
              </Grid> : null }
              
            </Grid>
      </>
  )
}

/*
<span style={{marginLeft:8, marginRight:8}}>
  <Font>Search</Font>
</span>
*/