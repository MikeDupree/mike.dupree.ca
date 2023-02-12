import { Button, Card, Col, Text } from "@nextui-org/react";
import Link from 'next/link';

interface Project {
  title: string,
  description: string,
  image: string,
  git: string,
  download: string,
}

type Props = {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  const { title, description, image, git, download } = project;
  return (
    <Card>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text h4 color="white">
            {title}
          </Text>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          {description}
          </Text>
        </Col>
      </Card.Header>

      {(project.git || project.download) && (
        <Card.Body css={{ position: "absolute", zIndex: 1, bottom: 5 }}>

          <Link href={project.git}> <Button color='secondary'>Git Repo</Button> </Link>

        </Card.Body>
      )}
      <Card.Image
        src={image != '' ? image : "https://nextui.org/images/card-example-4.jpeg"}
        objectFit="cover"
        width="100%"
        height={340}
        alt={title}
        css={{ opacity: 0.3 }}
      />
    </Card>
  )
}

export default ProjectCard
