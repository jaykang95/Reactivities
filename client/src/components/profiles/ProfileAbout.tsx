import React from 'react'
import { Button, Grid, Header, Tab } from 'semantic-ui-react'
import ProfileEditForm from './ProfileEditForm'

const ProfileAbout = () => {
  return (
    <Tab.Pane>
        <Grid>
            <Grid.Column width={16}>
                <Header floated='left' icon='address card' content='About' />
                <Button basic floated='right' content='Edit Profile'/>
            </Grid.Column>
            <Grid.Column width={16}>
                <ProfileEditForm />
            </Grid.Column>
        </Grid>
    </Tab.Pane>
  )
}

export default ProfileAbout