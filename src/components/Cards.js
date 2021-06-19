import React from 'react'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import './Cards.css'


function BeerSection(props){

    const {
        item,
    } = props

    return(
        <div className="cards">
            <h2 className="beer-title">Beer Section</h2>
            <ul className="beer-menu">
                {item.map((it) => (
                    <Card style={{width: '200px', margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                        <li className="card" key={it.id}>
                                <CardMedia>
                                    <img alt="items" src={it.image_url} />
                                </CardMedia>
                                <h4>{it.name}</h4>
                                <Divider style={{marginTop: '1rem'}} variant={'middle'} />
                                <CardContent>
                                    <Typography component="p">
                                        {it.tagline}
                                    </Typography>
                                    <Typography component="p" style={{fontSize: "1rem", fontWeight: '600'}}>
                                        Brewed {it.first_brewed}
                                    </Typography>
                                    <Button style={{color: 'white', marginTop: '1rem', fontWeight: '600'}} variant="contained" color="primary">BUY</Button>
                                </CardContent>
                        </li>
                    </Card>
                ))}
            </ul>
        </div>
    )
}

export default BeerSection