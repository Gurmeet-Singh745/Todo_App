import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';

function Infobox({ title, cases ,total }) {
    return (
        <Card className="infoBox_title">
            <CardContent>
                {/*Title i.e Corona Virus Cases*/}
                <Typography color="textSecondary">
                    {title}
                </Typography>
                {/* +120k number of cases */}
                <h2 className="infoBox">{cases}</h2>
                {/* 1.2M Total */}
                <Typography className="infoBox" color="textSecondary">
                    {total}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Infobox
