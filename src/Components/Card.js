import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MyCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{width:'130%' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            M
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Manshi"
        subheader="December 22, 2023"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1545494980i/40916679.jpg"
        alt="A Good Girl's Guide to Murder"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        The case is closed. Five years ago, schoolgirl Andie Bell
        was murdered by Sal Singh. The police know he did it. Everyone in town knows he did it.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="comment">
          <CommentIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Content</Typography>
          <Typography paragraph>
          A Good Girl’s Guide to Murder is a novel for young adults with elements of mystery and crime.
          </Typography>
          <Typography paragraph>
          Pippa “Pip” Fitz-Amobi is a teenager in Fairview, Connecticut. In the summer before her
          senior year of high school, she is starting to work on her senior capstone proposal project,
          an investigatory attempt to prove Salil “Sal” Singh’s innocence in the accusation that he murdered 
          Andrea “Andie” Bell and disposed of her body five years prior. Pip teams up with Sal’s younger 
          brother Ravi in her investigation. The book includes periodic capstone log entries that Pip uses 
          to keep track of information relating to the case. She determines that, based on the known facts
           of the case, whatever happened to Andie occurred Friday, April 18, 2014, between 10:40pm. and 12:45am.
          A few days later, after much police scrutiny, Sal was found dead in the woods, presumably having died by 
          suicide—especially after he sent a confession by text, which solidified his guilt in seemingly everyone’s mind but Pip’s.
          </Typography>
          <Typography paragraph>
          Through interviews with various people in Andie’s life, Pip learns several facts relating to Andie: 
          She was involved with a secret older man, she bought drugs from a man named Howie Bowers and sold them 
           house parties, and she bullied a girl named Nat da Silva into dropping out of school. Several suspects 
           also begin to emerge, and all seem interconnected in complex ways. For example, Mr. Ward, Pip’s best 
           friend’s dad and her history teacher, had a tense relationship with Andie; Max has a naked photograph of 
           Andie; and Andie’s car was discovered on Howie Bowers’s street. All the players in the story had opportunity 
           and motive to be involved in Andie’s disappearance.
          </Typography>
          <Typography>
            Read more to find more.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}