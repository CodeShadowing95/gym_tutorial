import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{mt: { lg: '100px', xs: '0' }}} p="20px">
      <Typography variant="h3" mb={5}>
        Exercises that target the same <span style={{color: '#ff2625', textTransform: 'capitalize'}}>muscle group</span>
      </Typography>
      <Stack direction="row" sx={{p: '2px', position: 'relative'}}>
        {/* && means if the 1st expression is True, then proceed to the 2nd expression */}
        {targetMuscleExercises.length ?
          <HorizontalScrollbar data={targetMuscleExercises} />
          : <Loader />}
      </Stack>

      <Typography variant="h3" mb={5} mt={10}>
        Exercises that use the same <span style={{color: '#ff2625', textTransform: 'capitalize'}}>equipment</span>
      </Typography>
      <Stack direction="row" sx={{p: '2px', position: 'relative'}}>
        {/* && means if the 1st expression is True, then proceed to the 2nd expression */}
        {equipmentExercises.length ?
          <HorizontalScrollbar data={equipmentExercises} />
          : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises