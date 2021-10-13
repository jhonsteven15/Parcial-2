import React from 'react';
import PinCard from './PinCard';
import { useMediaQuery } from 'react-responsive'

const PinterestLayout = () => {
  return (
    <div className="containerprincipal" style={_stylesLayout.pin_container}>
      <PinCard size='small' image='https://picsum.photos//300/500'></PinCard>
      <PinCard size='medium' image='https://picsum.photos//300/450'></PinCard>
      <PinCard size='medium' image='https://picsum.photos//300/450' ></PinCard>
      <PinCard size='large' image='https://picsum.photos//300/500'> </PinCard>
      <PinCard size='small' image='https://picsum.photos//300/450'></PinCard>
      <PinCard size='medium' image='https://picsum.photos//300/450'> </PinCard>
      <PinCard size='large' image='https://picsum.photos//300/230'></PinCard> 
      <PinCard size='small' image='https://picsum.photos//300/450'></PinCard>
      <PinCard size='medium' image='https://picsum.photos//300/450'></PinCard> 
      <PinCard size='large' image='https://picsum.photos//300/450'></PinCard> 
      <PinCard size='small'image='https://picsum.photos//300/230' ></PinCard> 
      <PinCard size='medium'image='https://picsum.photos//300/230' ></PinCard> 
      <PinCard size='large'image='https://picsum.photos//300/450' ></PinCard> 
      <PinCard size='small' image='https://picsum.photos//300/450'></PinCard> 
      <PinCard size='medium' image='https://picsum.photos//300/450'></PinCard> 
      <PinCard size='large' image='https://picsum.photos//300/230'></PinCard> 
      <PinCard size='small'image='https://picsum.photos//300/450' ></PinCard> 
      <PinCard size='medium' image='https://picsum.photos//300/230'></PinCard> 
      <PinCard size='large' image='https://picsum.photos//300/450'></PinCard>
      <PinCard size='medium' image='https://picsum.photos//300/230'></PinCard> 
      <PinCard size='small' image='https://picsum.photos//300/450'> </PinCard> 
    </div>
  );
};

const _stylesLayout = {
  pin_container: {
    margin: 0,
    padding: 0,
    width: '100vw',
    backgroundColor: 'white',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    /*display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 250px)',
    gridAutoRows: '10px',*/
    justifyContent: 'center',
  },
};

export default PinterestLayout;
