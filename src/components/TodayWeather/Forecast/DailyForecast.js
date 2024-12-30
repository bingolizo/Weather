import React from 'react';
import { Grid, Typography } from '@mui/material';
import DailyForecastItem from './DailyForecastItem';
import ErrorBox from '../../Reusable/ErrorBox';
import Layout from '../../Reusable/Layout';

const TodaysRecommendations = ({ data, forecastList }) => {
  const noDataProvided =
    !data ||
    !forecastList ||
    Object.keys(data).length === 0 ||
    data.cod === '404' ||
    forecastList.cod === '404';

  let subHeader;
  let content;

  if (noDataProvided) {
    content = <ErrorBox flex="1" type="error" />;
  } else {
    const weatherCondition = data?.weather?.[0]?.main?.toLowerCase();
    const temperature = data?.main?.temp; 

    let recommendations = [];

    if (weatherCondition) {
      if (weatherCondition.includes('rain') || weatherCondition.includes('drizzle')) {
        recommendations.push('Consider taking an umbrella or raincoat.');
      }
      if (weatherCondition.includes('snow')) {
        recommendations.push('Dress warmly and be cautious of slippery surfaces.');
      }
      if (weatherCondition.includes('thunderstorm')) {
        recommendations.push('Stay indoors and avoid open areas.');
      }
      if (temperature && temperature  > 295.15) { 
        recommendations.push('Wear light clothing and stay hydrated.');
      } else if (temperature && temperature < 283.15) { // Assuming below 10°C is cold
        recommendations.push('Bundle up in warm layers.');
      }
      if (weatherCondition.includes('clear')) {
        recommendations.push('Enjoy the clear skies!');
      }
      if (weatherCondition.includes('clouds')) {
        recommendations.push('Expect cloudy conditions.');
      }
    }

    if (recommendations.length > 0) {
      subHeader = (
        <Typography
          variant="h6"
          component="h6"
          sx={{
            fontSize: { xs: '12px', sm: '14px' },
            textAlign: 'center',
            lineHeight: 1.4,
            color: '#04C4E0',
            fontFamily: 'Roboto Condensed',
            marginBottom: '1rem',
          }}
        >
          {recommendations.map((rec, index) => (
            <React.Fragment key={index}>
              {rec}
              {index < recommendations.length - 1 && <br />}
            </React.Fragment>
          ))}
        </Typography>
      );
    } else {
      subHeader = (
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            fontStyle: 'italic',
            color: '#ccc',
            marginBottom: '1rem',
          }}
        >
          No specific recommendations based on the current conditions.
        </Typography>
      );
    }

    if (forecastList && forecastList.length > 0) {
      content = (
        <Grid
          item
          container
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: 'fit-content',
          }}
          spacing="4px"
        >
          {forecastList.map((item, idx) => (
            <Grid
              key={idx}
              item
              xs={4}
              sm={2}
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={{
                marginBottom: { xs: '1rem', sm: '0' },
              }}
            >
              <DailyForecastItem item={item} data={data} />
            </Grid>
          ))}
        </Grid>
      );
    } else if (forecastList && forecastList.length === 0) {
      content = (
        <ErrorBox
          flex="1"
          type="info"
          margin="2rem auto"
          errorMessage="No hourly recommendations available."
        />
      );
    }
  }

  return (
    <Layout
      title="TODAY'S RECOMMENDATIONS"
      content={content}
      sectionSubHeader={subHeader}
      sx={{ marginTop: '2.9rem' }}
      mb="0.3rem"
    />
  );
};

export default TodaysRecommendations;