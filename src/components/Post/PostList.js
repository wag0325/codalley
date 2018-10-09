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

import Post from './Post';

import post1 from '../../contents/programming/algorithms/algorithms.md';
import post2 from '../../contents/programming/data-structures/data-structures.md';
import post3 from '../../contents/programming/js/js-array.md';
import post4 from '../../contents/programming/interview/javascript.md';

const styles = theme => ({
});


const posts = [post1, post2, post3, post4];

function PostList(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            {/* Main content */}
            <Grid item xs={12} md={8}>
                <Typography variant="title" gutterBottom>
                    Tutorials
                </Typography>
                <Divider />
                {posts.map((post, i) => (
                    <Post post={post} key={i} />
                ))}
            </Grid>
            {/* End main content */}
        </React.Fragment>
    );
}

PostList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostList);