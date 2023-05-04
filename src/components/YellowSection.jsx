import me from '../assets/img/me.jpg'
import { Typography, Box, Avatar, List, ListItem, ListItemText, ListItemIcon, Stack } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CodeIcon from '@mui/icons-material/Code';
import CollectionsIcon from '@mui/icons-material/Collections';

export default function YellowSection() {

  const listData = [
    {
      icon: <PhoneIcon />,
      text: '(514) 884-9516'
    },
    {
      icon: <AlternateEmailIcon />,
      text: 'jerome@jlaflamme.com'
    },
    {
      icon: <CodeIcon />,
      text: 'github.com/jerome-laflamme'
    },
    {
      icon: <CollectionsIcon />,
      text: 'croustine.xyz'
    },
  ]

  return (

    <Box sx={
      {
        display: 'flex',
        height: '100vh',
        width: '100%',
        backgroundColor: 'primary.main',
      }
    }>
      <Stack>
        <Avatar alt="Me" src={me} />
        <List dense={true}>
          {listData.map((item, index) => {
            return (
              <ListItem key={index}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
              )
            })
          }
        </List>
      </Stack >
      <Stack>
        <Box>
          <Typography>Profil</Typography >
          <Box>
            <Typography>
              Développeur full-stack de formation, je me passionne pour l’art et le design.
            </Typography >
            <Typography>
              J’aime toucher à plusieurs domaines tels que la musique, la photo, les
              arts visuels, la modélisation 3D, le UI/UX Design, et le motion
              design. Je porte un grand intérêt aux nouvelles technologies et j'ai
              une soif de les apprendre. Les défis sont de mises pour me garder
              stimulé et intéressé.
            </Typography>
            <Typography>
              Expérience : JS, TS, React, Vue, CSS, HMTL, Three.JS, C#, MySQL,
              MongoDB, Node.JS, Blender, Figma, Photoshop, Illustrator, After
              Effects, Premiere Pro
            </Typography>
            <Box>
              <Box />
              <Box />
              <Box />
              <Box />
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

