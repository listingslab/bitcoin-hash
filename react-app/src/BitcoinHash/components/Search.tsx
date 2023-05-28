import * as React from 'react'
// import {SearchShape} from '../types'
import {
  styled, 
  alpha,
  Box,
  Card,
  CardActions,
  Button,
  Grid,
  InputBase,
  FormControl,
  RadioGroup,
  FormControlLabel,
  LinearProgress,
  Radio,
} from "@mui/material"
import {
  usePwaSelect,
  usePwaDispatch,
  search,
  updateSearchMode,
  updateSearchStr,
  selectPWA,
  Icon,
} from "../"

const SearchBox = styled('div')(({ theme }) => ({
  position: 'relative',
  color: theme.palette.secondary.main,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.main, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.25),
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
  const {searchMode, searchStr, searching} = pwa
  // console.log("searching", searching)

  const onUpdateSearchStr = (searchStr: string) => {
    dispatch (updateSearchStr(searchStr))
  }

  const onRadioClick = (searchMode: string) => {
    dispatch (updateSearchMode(searchMode))
    dispatch (updateSearchStr(""))
  }


  const onSearchClick = () => dispatch (search())
  

  return (<>
            <Box sx={{my:1}}>
              <Card>

                { searching ? <LinearProgress /> : null }
                
                <Grid container>

                  <Grid item sx={{flexGrow:1, p:1.75}} >
                    <SearchBox>
                      <SearchIconWrapper>
                        <Icon icon="hash" color="primary" />
                      </SearchIconWrapper>
                      <StyledInputBase
                        placeholder={`Search…`}
                        value={searchStr}
                        onChange={(e: any) => onUpdateSearchStr(e.target.value)}
                      />
                    </SearchBox>
                  </Grid>


                  <Grid item sx={{p:1.5}}>
                    <Box sx={{mx:1}}>
                      <FormControl>
                        <RadioGroup row value={searchMode}>

                          <FormControlLabel 
                            label="Addresses" 
                            value="address" 
                            onClick={() => onRadioClick("address")}
                            control={<Radio />} 
                          />

                          <FormControlLabel 
                            label="Transactions"
                            value="transaction" 
                            onClick={() => onRadioClick("transaction")}
                            control={<Radio />}
                          />

                        </RadioGroup>
                      </FormControl>
                    </Box>
                  </Grid>

                </Grid>

                {searchStr !== "" && !searching ? <CardActions>
                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={() => onSearchClick()}>
                    <Icon icon="search"/>
                    <span style={{marginLeft:8, marginRight:8}}>
                    {searchMode} {searchStr}
                    </span>
                  </Button>
                </CardActions> : null }
                
              </Card>
            </Box>
          </>
  )
}
