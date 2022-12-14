import React, { useEffect } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Avatar,
  Stack,
  useTheme,
  CircularProgress,
} from "@mui/material";
import { getTableDataThunk } from "modules/process/processThunk";
import { useAppDispatch } from "redux/reduxType";
import { useAppSelector } from "redux/reduxType";

export const ProcessItemTable = () => {
  const { tableData, loadingTableData } = useAppSelector(
    (state) => state.pages
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTableDataThunk());
  }, [dispatch]);
  const { palette } = useTheme();

  const styles = {
    tableContainer: { boxShadow: "none" },
    row: {
      "& td, & th": {
        borderTop: "1px solid #EAEAEC",
        borderRight: "2px solid #EAEAEC",
        lineHeight: "18px",
        padding: "9px 6px",
      },
    },
    cellOne: { width: 64 },
    cellTwo: { width: 310 },
    avatar: {
      width: 24,
      height: 24,
      backgroundColor: palette.info.main,
      fontSize: 8,
      marginRight: 1,
    },
    circularProgress: { marginLeft: 80, marginTop: 30 },
  };

  return (
    <>
      {loadingTableData ? (
        <CircularProgress sx={styles.circularProgress} />
      ) : (
        <TableContainer component={Paper} sx={styles.tableContainer}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {tableData.map((user) => (
                <TableRow key={user.serie} sx={styles.row}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={styles.cellOne}
                  ></TableCell>
                  <TableCell align="left"> {user.code}</TableCell>
                  <TableCell align="left" sx={styles.cellTwo}>
                    {user.name}
                  </TableCell>
                  <TableCell align="left">{user.phoneNumber}</TableCell>
                  <TableCell align="left">{user.serie}</TableCell>
                  <TableCell>
                    <Stack flexDirection="row" alignItems="center">
                      <Avatar sx={styles.avatar}>PL</Avatar>
                      {user.venditore}
                    </Stack>
                  </TableCell>

                  <TableCell align="left">{user.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};
