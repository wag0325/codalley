import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';

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
                {/* <Button size="small">Subscribe</Button> */}
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
                {/* <IconButton>
                    <SearchIcon />
                </IconButton>
                <Button variant="outlined" size="small">
                    Sign up
                </Button> */}
            </Toolbar>
            <Toolbar variant="dense" className={classes.toolbarSecondary}>
                {sections.map(section => (
                    <Link className={classes.menuItemLink} to={`/${section.slug}`} >
                        <Typography color="inherit" noWrap key={section.slug}>
                            {section.name}
                        </Typography>
                    </Link>
                ))}
            </Toolbar>
        </React.Fragment>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(Header));