
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ListItem = ({ item, onClick}) => {
    const handleClick=()=>{
        onClick(item)
    }
    return (
        <li onClick={handleClick} key={item.value} className={`flex flex-row gap-2 px-4 py-2 cursor-pointer`} >
            {item.iconLeft &&
                <FontAwesomeIcon className='group-focus-within:drop-shadow-glow group-hover:drop-shadow-glow fill-primary-400 shadow-primary-300' color='#7F22F1' size='16' width='1rem' height='1rem' icon={item.iconLeft} />
            }
            <span>{item.label}</span><span>{item.secondaryLabel}</span> 
            {item.iconRight &&
                <FontAwesomeIcon className='group-focus-within:drop-shadow-glow group-hover:drop-shadow-glow fill-primary-400 shadow-primary-300' color='#7F22F1' size='16' width='1rem' height='1rem' icon={item.iconRight} />
            }
            {item.image && 
                <img className='h-6' src={item.image} height={24}></img>
            }
        </li>

    );

};

export default ListItem;