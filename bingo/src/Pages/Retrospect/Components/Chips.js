import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { ChipData, UserList } from "../../../Contexts/Atom";
import { useRecoilState } from "recoil";

const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

// 실제 칩에 들어갈 내용
export default function Chips({ isFilled, setIsFilled }) {
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
        const newChipData = chipData.map((chip, i) =>
            i === index
                ? { ...chip, flag: !chip.flag }
                : { ...chip, flag: false }
        );
        setChipData(newChipData);
        const isAnyChipSelected = newChipData.some((chip) => chip.flag);
        setIsFilled(isAnyChipSelected);
    };
    React.useEffect(() => {
        console.log("chipData", chipData);
    }, [chipData]);
    // //flag가 잘 바뀌는지 확인
    // React.useEffect(() => {
    //   console.log(chipData[1].flag);
    // }, [chipData[1].flag]);

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) =>
            chips.filter((chip) => chip.key !== chipToDelete.key)
        );
    };

    return (
        <Paper
            sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                listStyle: "none",
                p: 0.5,
                m: 0,
                boxShadow: "none",
                background: "#F3F3F3",
            }}
            component="ul"
        >
            {chipData.map((data, index) => {
                const chipBackgroundColor = data.flag ? "#F8F0EF" : "#F3F3F3";
                const chipTextColor = data.flag ? "#EA4336" : "#222222";
                const ChipBorder = data.flag
                    ? "2px solid var(--main_red, #EA4336)"
                    : "2px solid var(--sec_grey, #222)";

                return (
                    <ListItem key={data.key}>
                        <Chip
                            label={data.label}
                            onClick={() => handleClick(index)}
                            sx={{
                                fontSize: "18px",
                                margin: "0.2vw",
                                padding: "1.5vh 1.8vw",
                                height: "5.5vh",
                                borderRadius: "40px",
                                backgroundColor: chipBackgroundColor,
                                color: chipTextColor,
                                border: ChipBorder,
                            }}
                        />
                    </ListItem>
                );
            })}
        </Paper>
    );
}
