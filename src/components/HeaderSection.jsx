import { Box } from "@mui/material";
export default function HeaderSection() {

  return (
    <Box sx={{
      display: 'flex',
      py: 5,
      alignItems: 'center',
    }}>
      <h1>JEROME</h1>
      <h1>LAFLAMME</h1>
      <div>
        <svg
          width="15"
          height="15"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="50" fill="var(--grey)" />
        </svg>
      </div>
      <h1>portfolio</h1>
    </Box>


  )
}
