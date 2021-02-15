import React from 'react';
import {Grid, FormControl,FormLabel,RadioGroup,FormControlLabel,Radio} from '@material-ui/core'
import makeStyles from './styles'

export default function RadioGender({ half ,value,handleChange,name, labelName, value1,value2,label1,label2}) {
  const classes = makeStyles()
  return (
    <Grid item xs={12} sm={half ? 6 : 12} md={half ? 4 : 6}>
      <FormControl className={classes.root}>
        <FormLabel component='legend' className={classes.FormLabel}>
          Gender
        </FormLabel>
        <RadioGroup
          className={classes.RadioGroup}
          aria-label={labelName}
          name={name}
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value={value1} control={<Radio />} label={label1} />
          <FormControlLabel value={value2} control={<Radio />} label={label2} />
        </RadioGroup>
      </FormControl>
    </Grid>
  );
}
