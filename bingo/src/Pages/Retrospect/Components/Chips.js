import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

// 실제 칩에 들어갈 내용
export default function Chips() {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: '존중하는' },
    { key: 1, label: '열정적인' },
    { key: 2, label: '도전적인' },
    { key: 3, label: '의사소통이 잘 되는' },
    { key: 4, label: '성실한' },
    { key: 5, label: '인내심있는' },
    { key: 6, label: '화목한' },
    { key: 7, label: '분위기 좋은' },
    { key: 8, label: '칭찬하는' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
        boxShadow: 'none',
      }}
      component="ul"
    >
      {chipData.map((data) => {
        return (
          <ListItem key={data.key}>
            <Chip
              label={data.label}
              color="primary"
              sx={{ fontSize: '50px', margin: '0.5rem', height: '100%', borderRadius: '30px'}}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}
