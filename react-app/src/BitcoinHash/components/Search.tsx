import * as React from 'react'
// import {SearchShape} from '../types'
import {
  styled, 
  useTheme,
  alpha,
  Box,
  IconButton,
  Grid,
  InputBase,
  FormControl,
  RadioGroup,
  FormControlLabel,
  LinearProgress,
  Radio,
  Link,
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

const SearchBox = styled('div')(({ theme }) => ({
  position: 'relative',
  color: theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.secondary.main, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.secondary.main, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(2),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

export default function Search() {  
  const pwa = usePwaSelect(selectPWA)
  const dispatch = usePwaDispatch()
  const theme = useTheme()
  const linkCol = theme.palette.secondary.main
  const {searchMode, searchStr, searching} = pwa
  
  const onSearchClick = () => dispatch (search())
  const onCancelSearchClick = () => dispatch (cancelSearch())
  const onUpdateSearchStr = (searchStr: string) => {
    dispatch (updateSearchStr(searchStr))
  }
  const onRadioClick = (searchMode: string) => {
    dispatch (updateSearchMode(searchMode))
    dispatch (updateSearchStr(""))
  }
  
  const onTestClick = (payload: any) => {
    const {searchMode, searchStr} = payload
    dispatch (updateSearchMode(searchMode))
    dispatch (updateSearchStr(searchStr))
  }
  
  console.log("searchStr", searchStr)
  return (<>
                <Grid container>
                  

                  <Grid item>
                    <Box sx={{mx:2}}>
                      <FormControl>
                        <RadioGroup row value={searchMode}>
                          <FormControlLabel 
                            label={<>
                              <Font variant="small">
                                <Link
                                  sx={{cursor: "pointer", color: linkCol}}
                                  onClick={() => onTestClick({
                                    searchMode: "address",
                                    searchStr: "bc1qgyrmw4ncp2rgkatz8p8uq86pls3xpk6u9kzmc7",
                                  })}>
                                  Test
                                </Link> Addresses
                              </Font></>}
                            value="address" 
                            onClick={() => onRadioClick("address")}
                            control={<Radio color="secondary"/>} 
                          />
                          <FormControlLabel 
                            label={<>
                              <Font variant="small">
                                <Link
                                  sx={{cursor: "pointer", color: linkCol}}
                                  onClick={() => onTestClick({
                                    searchMode: "transaction",
                                    searchStr: "2892bc7fb0c2efe34f655f659bffb4d694ffc33f824cb0752da5ecb2d2ff39dc",
                                  })}>
                                  Test
                                </Link> Transactions
                              </Font></>}
                          
                            value="transaction" 
                            onClick={() => onRadioClick("transaction")}
                            control={<Radio color="secondary"/>}
                          />
                        </RadioGroup>
                      </FormControl>
                    </Box>
                  </Grid>

                  <Grid item sx={{flexGrow:1}} >
                    <SearchBox>
                      <SearchIconWrapper>
                        <Icon icon="hash" color="secondary" />
                      </SearchIconWrapper>
                      <StyledInputBase
                        placeholder={`Search ${searchMode === "address" 
                        ? "addresses" : "transactions"}...`}
                        value={searchStr}
                        onChange={(e: any) => onUpdateSearchStr(e.target.value)}
                      />
                    </SearchBox>
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

                  <Grid item xs={12}>
                    <Box sx={{mt:2}} />
                    { searching ? 
                      <LinearProgress 
                        color="secondary" 
                        sx={{mx:2}}
                      /> : 
                      <Box sx={{height: 4}} /> }
                    
                  </Grid>
                  
                  <Grid item xs={12}>
                    Results
                  </Grid>

                </Grid>
                
          </>
  )
}

/*
<span style={{marginLeft:8, marginRight:8}}>
                        <Font>Search</Font>
                      </span>
*/