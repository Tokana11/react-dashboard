import { AppBar, Paper, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import GaugeChart from 'react-gauge-chart';

const limit = 600
var current = 300

function FuelChartHeader() {
    return (
        <React.Fragment>
            <AppBar color='error' position="static" >
                <Toolbar>
                    <Typography align='center' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Гориво
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default function FuelChart() {
    return (
        <React.Fragment>
            <Paper elevation={4}>
                <FuelChartHeader />
                <GaugeChart
                    arcsLength={[ 0.33, 0.33, 0.33 ]}
                    colors={[ '#027d8a', '#e4b363', '#ef6461' ]}
                    percent={current / limit}
                    arcPadding={0.07}
                    arcWidth={0.3}
                    needleColor={"#829399"}
                    hideText
                />
                <Typography align='center' sx={{ mb: 1.5 }} color="text.secondary">
                    Заредено: {`${current} л. / ${limit} л.`}
                </Typography>
            </Paper>
        </React.Fragment>
    )
}
