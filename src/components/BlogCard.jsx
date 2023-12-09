import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button
} from '@nextui-org/react'
import PropTypes from 'prop-types'
import { useBlogStore } from '../store/blogStore'

export default function BlogCard({
  author,
  username,
  title,
  followers,
  avatar_url,
  id
}) {
  const { currentPostId } = useBlogStore(state => state)
  const { setCurrentPostId, currentPostInfo } = useBlogStore(state => state)

  return (
    <Card className="min-w-[310px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={avatar_url} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {author ? author : 'Yogi Bear'}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @{username ? username : 'yogi_bear'}
            </h5>
          </div>
        </div>
        <Button
          className={
            currentPostId === id
              ? 'bg-transparent text-foreground border-default-200'
              : ''
          }
          color="primary"
          radius="full"
          size="sm"
          variant={currentPostId === id ? 'bordered' : 'solid'}
          onClick={() => setCurrentPostId(id)}
          onMouseEnter={() => console.log(currentPostId)}
          onMouseOut={() => console.log(currentPostInfo)}
        >
          {currentPostId === id ? 'Viendo' : 'Ver'}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>{title ? title : 'Contenido fantastico'}</p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">
            {followers ? followers : '97.1K'}
          </p>
          <p className="text-default-400 text-small">Seguidores</p>
        </div>
      </CardFooter>
    </Card>
  )
}

BlogCard.propTypes = {
  author: PropTypes.string,
  username: PropTypes.string,
  title: PropTypes.string,
  followers: PropTypes.string,
  avatar_url: PropTypes.string,
  id: PropTypes.string
}
