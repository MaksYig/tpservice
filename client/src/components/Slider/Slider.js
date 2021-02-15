import React, { useState } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y,EffectFade,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Paper,
  Button,
  Grid,
  CardMedia,
  Typography,
  Box,
  CardActionArea,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]);
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    // height: '60%',
    paddingTop: '56.25%', // 16:9
  },
  SlideTextBox: {
    transform: 'translateX(-50%)',
  },
}));
export const MainSlider = () => {
  const classes = useStyles();
  return (
    <Swiper
      spaceBetween={2}
      slidesPerView={1}
      autoplay={{ delay: 6000 }}
      loop={true}
      // navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      height='90vh'
      // effect='fade'
    >
      <SwiperSlide>
        <Grid item>
          <CardActionArea style={{ opacity: 0.7 }}>
            <CardMedia
              style={{ height: '90vh' }}
              className={classes.media}
              image='https://pix10.agoda.net/hotelImages/1199068/-1/09cb9a2780bf41ad1e8f8a3d2e074754.jpg?s=1024x768'
              title='Paella dish'
            />
          </CardActionArea>
          <Box
            position='absolute'
            top={'10%'}
            left={'50%'}
            className={classes.SlideTextBox}
          >
            <Paper
              elevation={3}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                padding: '15px 25px',
              }}
            >
              <Typography variant='h2'>Welcome</Typography>
              <Typography variant='body1'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
                consequatur perferendis cumque voluptatum ea ducimus itaque nam
                maiores dolores corporis dolorum sapiente ab, nisi non officia,
                ipsa obcaecati quis assumenda.
              </Typography>
              <Button>Check it...</Button>
            </Paper>
          </Box>
        </Grid>
      </SwiperSlide>
      <SwiperSlide>
        <Grid item>
          <CardActionArea style={{ opacity: 0.8 }}>
            <CardMedia
              style={{ height: '90vh' }}
              className={classes.media}
              image='https://c.pxhere.com/images/87/31/d43f9e1c93e29e2827fbfeeac08e-1450369.jpg!d'
              title='Paella dish'
            />
          </CardActionArea>
          <Box
            position='absolute'
            top={'10%'}
            left={'50%'}
            className={classes.SlideTextBox}
          >
            <Paper
              elevation={3}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                padding: '15px 25px',
              }}
            >
              <Typography variant='h2'>Welcome</Typography>
              <Typography variant='body1'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
                consequatur perferendis cumque voluptatum ea ducimus itaque nam
                maiores dolores corporis dolorum sapiente ab, nisi non officia,
                ipsa obcaecati quis assumenda.
              </Typography>
              <Button>Check it...</Button>
            </Paper>
          </Box>
        </Grid>
      </SwiperSlide>
      <SwiperSlide>
        {' '}
        <Grid item>
          <CardActionArea style={{ opacity: 0.8 }}>
            <CardMedia
              style={{ height: '90vh' }}
              className={classes.media}
              image='https://strollinggreece.com/wp-content/uploads/2019/08/Orlias-waterfall-northern-Greece.jpg'
              title='Paella dish'
            />
          </CardActionArea>
          <Box
            position='absolute'
            top={'10%'}
            left={'50%'}
            className={classes.SlideTextBox}
          >
            <Paper
              elevation={3}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                padding: '15px 25px',
              }}
            >
              <Typography variant='h2'>Welcome</Typography>
              <Typography variant='body1'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
                consequatur perferendis cumque voluptatum ea ducimus itaque nam
                maiores dolores corporis dolorum sapiente ab, nisi non officia,
                ipsa obcaecati quis assumenda.
              </Typography>
              <Button>Check it...</Button>
            </Paper>
          </Box>
        </Grid>
      </SwiperSlide>
      <SwiperSlide>
        {' '}
        <Grid item>
          <CardActionArea style={{ opacity: 0.7 }}>
            <CardMedia
              style={{ height: '90vh' }}
              className={classes.media}
              image='https://www.travel-zone-greece.com/blog/wp-content/uploads/2016/06/lake-vouliagmeni-e1465301018607.jpg'
              title='Paella dish'
            />
          </CardActionArea>
          <Box
            position='absolute'
            top={'10%'}
            left={'50%'}
            className={classes.SlideTextBox}
          >
            <Paper
              elevation={3}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                padding: '15px 25px',
              }}
            >
              <Typography variant='h2'>Welcome</Typography>
              <Typography variant='body1'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
                consequatur perferendis cumque voluptatum ea ducimus itaque nam
                maiores dolores corporis dolorum sapiente ab, nisi non officia,
                ipsa obcaecati quis assumenda.
              </Typography>
              <Button>Check it...</Button>
            </Paper>
          </Box>
        </Grid>
      </SwiperSlide>
    </Swiper>
  );
};
