import { Grid } from '@mui/material';
import React from 'react';

const OderCard = () => {
    return (
        <div>
            <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
                <Grid item xs={6}>
                    <div className="flex cursor-pointer">
                        <img
                            className="w-[5rem] h-[5rem] object-cover object-top"
                            src="https://pubcdn.ivymoda.com/files/product/thumab/400/2024/01/06/35f641c25195dae6173ce5fb6d80ac75.jpg"
                            alt=""
                        ></img>
                        <div className="ml-5 space-y-2">
                            <p className="mb-2">Classic Bomber - Áo khoác Thu Đông MS 70E4232</p>
                            <p className="opacity-50 text-xs font-semibold">Size: M</p>
                            <p className="opacity-50 text-xs font-semibold">Color: Black</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={}></Grid>
            </Grid>
        </div>
    );
};

export default OderCard;
