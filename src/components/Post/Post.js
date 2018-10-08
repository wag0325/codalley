import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Markdown from '../Utils/Markdown';

const styles = theme => ({
    markdown: {
        padding: `${theme.spacing.unit * 3}px 0`,
    },
});

function Post(props) {
    const { classes, post } = props;

    return (
        <React.Fragment>
            <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                {post}
            </Markdown>
        </React.Fragment>
    );
}

Post.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Post);