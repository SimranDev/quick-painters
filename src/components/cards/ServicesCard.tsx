import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

export type ServicesCardProps = {
  title: string
  services: string[]
  img: string
}

const ContentItem = (title: string) => (
  <Box borderBottom="1px solid #EAECEE" paddingY={2}>
    <Typography>{title}</Typography>
  </Box>
)

export default function ServicesCard({ title, services, img }: ServicesCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={title} />
      <CardMedia component="img" height="194" image={img} alt="Paella dish" />
      <CardContent>
        {services.map((service) => (
          <Box key={service}>{ContentItem(service)}</Box>
        ))}
      </CardContent>
    </Card>
  )
}
