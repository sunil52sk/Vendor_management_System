import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Display.css';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Home from './Home';

function Display(props) {
  const { notes } = props;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`Copied to clipboard: ${text}`);
    }).catch((err) => {
      console.error('Failed to copy: ', err);
    });
  };

  const displayNotes = () => {
    if (notes.length > 0) {
      return (
        <Row md={4}>
          {notes.map((note) => (
            <Col md={6} key={note.vendorId}>
              <Card className="vendor-card">
                <Card.Header style={{ textAlign: "left", fontFamily: "monospace" }}>{note.name}</Card.Header>
                <Card.Body>
                  <Card.Title style={{ textAlign: "left", fontFamily: "monospace" }}>Vendor Details</Card.Title>
                  <Card.Text>
                    <Box sx={{ my: 3, mx: 2 }}>
                      <Grid container alignItems="center">
                        <Grid item xs>
                          <Typography gutterBottom variant="h4" component="div" style={{ fontSize: "20px", fontFamily: "monospace", textAlign: "revert-layer" }}>
                            Domain: {note.domainofwork}
                          </Typography>
                        </Grid>
                        
                        <Grid item>
                          <Typography gutterBottom variant="h6" component="div">
                            <OverlayTrigger
                              placement="bottom"
                              delay={{ show: 250, hide: 400 }}
                              overlay={<Tooltip id="button-tooltip">
                                $ {note.spent}
                              </Tooltip>}
                            >
                              <Button variant="outline-dark">spent</Button>
                            </OverlayTrigger>
                          </Typography>
                        </Grid>
                      </Grid>
                      <Typography color="text.secondary" variant="body2" style={{ fontFamily: "monospace" }}>
                        This particular contingent worker is specialized in {note.specialization} and working in a project {note.pm.title} from {note.pm.startDate} to {note.pm.endDate}
                      </Typography>
                      <div>
                        <Grid container alignItems="center">
                          <Col md={6}>
                            <Typography style={{ fontSize: "15px", fontFamily: "monospace", paddingTop: "2%" }}>
                              Companies involved:
                              {note.pm.com.map((mp) => (
                                <h5 key={mp.companyName} onClick={() => copyToClipboard(note.vendorId)}>
                                  {mp.companyName}
                                </h5>
                              ))}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                              <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={<Tooltip id="button-tooltip">
                                  $ {note.pm.budget}
                                </Tooltip>}
                              >
                                <Button variant="outline-dark">budget</Button>
                              </OverlayTrigger>
                            </Typography>
                          </Col>
                          <Divider orientation="vertical" variant="middle"/>
                          <Col md={6}>
                            <Typography color="text.secondary" variant="body2" style={{ fontFamily: "monospace" }}>
                              Employee Details:
                              <br />
                              Email: {note.email}<br />
                              Address: {note.address}<br />
                              Contact: {note.contact}<br />
                            </Typography>
                          </Col>
                        </Grid>
                      </div>
                    </Box>
                    <Divider variant="middle" />
                    <Box sx={{ m: 2 }}>
                      <Typography gutterBottom variant="body1">
                        Get id to manage the data
                      </Typography>
                      <Button variant='outline-dark' onClick={() => copyToClipboard(note.vendorId)}>Fetch Id</Button>
                    </Box>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      );
    } else {
      return (
        <h3 style={{ textAlign: "center" }}>No notes yet, wait until notes get added</h3>
      );
    }
  };

  return (
    <>
      <Home />
      {displayNotes()}
    </>
  );
}

export default Display;
