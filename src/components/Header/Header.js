import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
    },
});

const sections = [
    { name: 'HTML', slug: 'html' },
    { name: 'CSS', slug: 'css' },
    { name: 'JavaScript', slug: 'javascript' },
    { name: 'Algorithms', slug: 'algorithms' },
    { name: 'Data Structures', slug: 'data-structures' },
];

function Header(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbarMain}>
                <Typography
                    component="h2"
                    variant="headline"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    Codalley
                </Typography>
            </Toolbar>
        </React.Fragment>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);