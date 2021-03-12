import React, {Component} from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import EnhancedTable from './EnhancedTable';
import Toolbar from './Toolbar';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.background.dark,
    // minHeight: '100%',
    // paddingBottom: theme.spacing(3),
    // paddingTop: theme.spacing(3)
  }
}));

const mapStateToProps = state => {
  return {
    customers: state.customers
  }
}

class CustomerListView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div title="Customers">
        <Container maxWidth={false}>
          <Toolbar />
          <Box mt={3}>
            <EnhancedTable customers={this.props.customers} />
            {/* <CollapsibleTable /> */}
          </Box>
        </Container>
      </div>
    );
  }
};

export default withRouter(connect(mapStateToProps)(CustomerListView));
