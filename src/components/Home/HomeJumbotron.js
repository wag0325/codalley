import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    mainFeaturedPost: {
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing.unit * 4,
    },
    mainFeaturedPostContent: {
        padding: `${theme.spacing.unit * 6}px`,
        [theme.breakpoints.up('md')]: {
            paddingRight: 0,
        },
    },
});

function HomeJumbotron(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            {/* Main featured post */}
            <Paper className={classes.mainFeaturedPost}>
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturedPostContent}>
                            <Typography variant="display2" color="inherit" gutterBottom>
                                Title of a longer featured blog post
            </Typography>
                            <Typography variant="headline" color="inherit" paragraph>
                                Multiple lines of text that form the lede, informing new readers quickly and
                                efficiently about what&apos;s most interesting in this post&apos;s contents…
            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
            {/* End main featured post */}
        </React.Fragment>
    );
}

HomeJumbotron.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeJumbotron);