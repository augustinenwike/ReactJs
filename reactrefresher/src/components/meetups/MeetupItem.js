import Card from '../UI/Card';
import classes from './MeetupItem.module.css';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props) {
      const favoritesCtx = useContext(FavoritesContext);
      const itemIsFavourite = favoritesCtx.itemIsFavourite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavourite) {
      favoritesCtx.removeFavorite(props.id);
    }else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>{itemIsFavourite ? 'Remove from Favorites' : 'Add To Favorites'}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
