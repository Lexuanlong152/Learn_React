import { useState } from 'react';
import Button from 'react-bootstrap/Button';



function ChooseGift() {
    const gifts = [
        'Iphone14 256Gb',
        'Iphone14 Promax',
        'SamSung Galaxy Note 20',
        'Nokia N7 Plus'
    ]
    const [gift, setGift] = useState();
    const RandomGift = () => {
        const index = Math.floor(Math.random() * gifts.length)
        console.log(gifts[index]);
        setGift(gifts[index]);
    }
    return (
        <div style={{ padding: 30 }}>
            <h1>{gift || 'Chưa có thưởng'}</h1>
            <Button variant='outline-primary' onClick={RandomGift}>Random</Button>{''}
        </div>
    );
}
export default ChooseGift;