import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import PostSidebar from './PostSidebar';
import PostList from './PostList';

const styles = theme => ({
    mainGrid: {
        marginTop: theme.spacing.unit * 3,
    },
});

function PostContainer(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <Grid container spacing={40} className={classes.mainGrid}>
                <PostList />
                {/* <PostSidebar /> */}
            </Grid>
        </React.Fragment>
    );
}

PostContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostContainer);