import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TablePagination,
  TextField,
  Button,
} from "@mui/material";

class DynamicTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      rowsPerPage: 5, // Default rows per page
      searchQuery: "",
    };
  }

  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({
      rowsPerPage: parseInt(event.target.value, 10),
      page: 0,
    });
  };

  handleSearchChange = (event) => {
    this.setState({
      page: 0,
      searchQuery: event.target.value,
    });
  };

  handleView = (rowId) => {
    // Implement your view action here, e.g., show a modal or navigate to a details page
    console.log("Viewing row with ID:", rowId);
  };

  render() {
    const { headers, data } = this.props;
    const { page, rowsPerPage, searchQuery } = this.state;

    const filteredData = data.filter((item) => {
      const values = Object.values(item).join(" ").toLowerCase();
      return values.includes(searchQuery.toLowerCase());
    });

    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    return (
      <Paper>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchQuery}
          onChange={this.handleSearchChange}
        />
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header, index) => (
                <TableCell key={index}>{header}</TableCell>
              ))}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.slice(startIndex, endIndex).map((item, rowIndex) => (
              <TableRow key={rowIndex}>
                {headers.map((header, colIndex) => (
                  <TableCell key={colIndex}>{item[header]}</TableCell>
                ))}
                <TableCell>
                  <Button
                    style={{ fontSize: "10px" }}
                    variant="contained"
                    color="warning"
                    onClick={() => this.handleView(item.id)} // Assuming there's an 'id' property in your data
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={this.handleChangePage}
          onRowsPerPageChange={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

DynamicTable.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DynamicTable;
