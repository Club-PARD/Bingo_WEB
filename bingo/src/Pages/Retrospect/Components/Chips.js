import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { ChipData, UserList } from '../../../Contexts/Atom';
import { useRecoilState } from "recoil";

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

// 실제 칩에 들어갈 내용
export default function Chips() {
  const [chipData, setChipData] = useRecoilState(ChipData);
  const [usrList, setUserList] = useRecoilState(UserList);
  /*
  const [chipData, setChipData] = React.useState([
    { key: 0, label: '존중하는', flag: 'false'},
    { key: 1, label: '열정적인', flag: 'false' },
    { key: 2, label: '도전적인', flag: 'false' },
    { key: 3, label: '의사소통이 잘 되는', flag: 'false' },
    { key: 4, label: '성실한', flag: 'false' },
    { key: 5, label: '인내심있는', flag: 'false' },
    { key: 6, label: '화목한', flag: 'false' },
    { key: 7, label: '분위기 좋은', flag: 'false' },
    { key: 8, label: '칭찬하는', flag: 'false' },
  ]);
  */
  const handleClick = (index) => {
    setChipData(chipData.map((chip, i) => 
      i === index ? { ...chip, flag: chip.flag === 'true' ? 'false' : 'true' } : chip
    ));
  };  
  //flag가 잘 바뀌는지 확인
  React.useEffect(() => {
    console.log(chipData[1].flag);
  }, [chipData[1].flag]);

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
      {chipData.map((data, index) => {
        const chipBackgroundColor = data.flag === 'true' ? '#E7E7E7' : '#323232';
        const chipTextColor = data.flag === 'true' ? '#000000' : '#FFFFFF';

        return (
          <ListItem key={data.key}>
            <Chip
              label={data.label}
              onClick={() => handleClick(index)}
              sx={{ fontSize: '50px', margin: '0.5rem', height: '100%', borderRadius: '30px', backgroundColor: chipBackgroundColor, color: chipTextColor}}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}
