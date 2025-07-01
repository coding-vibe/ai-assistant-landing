import Typography from '@mui/material/Typography';
import DoneIcon from '@mui/icons-material/Done';

import * as classes from './styles';

interface Props {
  className?: string;
  items: string[];
}
const Advantages = ({ items, className }: Props) => {
  return (
    <ul css={classes.advantages} className={className}>
      {items.map((advantage) => (
        <Typography variant="body1" key={advantage} css={classes.advantage} component="li">
          <DoneIcon css={classes.icon} />
          {advantage}
        </Typography>
      ))}
    </ul>
  );
};

export default Advantages;
