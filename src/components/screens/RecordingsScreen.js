import React, {useEffect, useState} from 'react';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../layout/NavBar';
import RecordingTile from './recordings/RecordingTile';
import { BASE_URL } from '../../globals';

const useStyles = makeStyles((theme) => ({}));
  
  export default function RecordingsScreen() {
    const classes = useStyles();

    const [isLoading, setIsLoading] = useState(true);

    const [recordingsList, setRecordingsList] = useState([]);

    useEffect(() => {
      fetch(BASE_URL + '/api/recordings')
      .then((response) => response.json())
      .then((recordings) => setRecordingsList(recordings))
    }, []);

  
    return (
      <div>
        <NavBar title="Recordings" />

        <List>
          {recordingsList.map((r) => 
            <RecordingTile key={r['name']} fileName={r['name']} fileSize={r['size']} />
          )}
        </List>
      </div>
    );
  }