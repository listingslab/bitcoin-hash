import * as React from "react"
import {
  styled,
  alpha,
  Box,
  IconButton,
  Grid,
  InputBase,
} from "@mui/material"
import {
  usePwaSelect,
  usePwaDispatch,
  searchTransactions,
  searchAddresses,
  updateSearchStrA,
  updateSearchStrT,
  selectPWA,
  Icon,
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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    [theme.breakpoints.up("md")]: {
    },
  },
}))

export default function Search() {  
  const pwa = usePwaSelect(selectPWA)
  const dispatch = usePwaDispatch()
  const {searchStrT, searchResultsT, searchStrA, searchResultsA, searching} = pwa
  return (<>

<Grid container>
  <Grid item xs={12} md={6}>
  <Grid container>
      <Grid item sx={{flexGrow:1}}>
        <Box sx={{mx: 1, pl:1}}>
        <SearchBox>
          <SearchIconWrapper>
            <Icon icon="transaction" color="secondary" />
          </SearchIconWrapper>
          <StyledInputBase
            disabled={!searching ? false : true}
            fullWidth
            placeholder={`Search transactions...`}
            value={searchStrT}
            onChange={(e: any) => dispatch (updateSearchStrT(e.target.value))}
          />
        </SearchBox>
        </Box>
      </Grid>
      <Grid item>
        <Box sx={{mx: 0}}>
          <IconButton
            color="secondary"
            disabled={searchStrT !== "" || searching ? false : true}
            onClick={() => {
              dispatch (updateSearchStrT(""))
            }}>
            <Icon icon="close"/>
          </IconButton>
          <IconButton
              sx={{mr: 2}}
            color="secondary"
            disabled={searchStrT === "" || searching ? true : false}
            onClick={() => dispatch (searchTransactions(searchStrT))}>
            <Icon icon="search"/>
          </IconButton>
        </Box>

        
        
      </Grid>
      
      <pre>searchResultsT {JSON.stringify(searchResultsT, null, 2)}</pre>
    </Grid>
  </Grid>

  <Grid item xs={12} md={6}>
    <Grid container>
            <Grid item sx={{flexGrow:1}}>
              <Box sx={{mx: 1, pl:1}}>
              <SearchBox>
                <SearchIconWrapper>
                  <Icon icon="address" color="secondary" />
                </SearchIconWrapper>
                <StyledInputBase
                  disabled={!searching ? false : true}
                  fullWidth
                  placeholder={`Search addresses...`}
                  value={searchStrA}
                  onChange={(e: any) => dispatch (updateSearchStrA(e.target.value))}
                />
              </SearchBox>
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{mx: 0}}>
                <IconButton
                  color="secondary"
                  disabled={searchStrA !== "" || searching ? false : true}
                  onClick={() => {
                    dispatch (updateSearchStrA(""))
                  }}>
                  <Icon icon="close"/>
                </IconButton>
                <IconButton
                    sx={{mr: 2}}
                  color="secondary"
                  disabled={searchStrA === "" || searching ? true : false}
                  onClick={() => dispatch (searchAddresses(searchStrA))}>
                  <Icon icon="search"/>
                </IconButton>
              </Box>
            </Grid>
            
          </Grid>
          
          <pre>searchResultsA {JSON.stringify(searchResultsA, null, 2)}</pre>
        </Grid>
        
      </Grid>
          
    </>
  )
}

/*
*/