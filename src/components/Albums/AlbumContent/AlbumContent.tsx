import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import './AlbumContent.css'

type Props = {}

function AlbumContent({}: Props) {
  return (
    <div className='album-content'>

        
          <Grid container spacing={2}>

          {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={12} sm={4} md={3} lg={3} xl={3} key={index}>
          <Card sx={{ minWidth: 275 }}>
              <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Word of the Day
                  </Typography>
                  <Typography variant="h5" component="div">
                      be{"bull"}nev{"bull"}o{"bull"}lent
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      adjective
                  </Typography>
                  <Typography variant="body2">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="small">Learn More</Button>
              </CardActions>
          </Card>
      </Grid>
        ))}
              {/* <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                  <Card sx={{ minWidth: 275 }}>
                      <CardContent>
                          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                              Word of the Day
                          </Typography>
                          <Typography variant="h5" component="div">
                              be{"bull"}nev{"bull"}o{"bull"}lent
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color="text.secondary">
                              adjective
                          </Typography>
                          <Typography variant="body2">
                              well meaning and kindly.
                              <br />
                              {'"a benevolent smile"'}
                          </Typography>
                      </CardContent>
                      <CardActions>
                          <Button size="small">Learn More</Button>
                      </CardActions>
                  </Card>
              </Grid>
              <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
              <div>card two</div>
              </Grid>
              <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
              <div>card three</div>
              </Grid>
              <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
              <div>card Four</div>
              </Grid> */}
          </Grid>
    </div>
  )
}

export default AlbumContent