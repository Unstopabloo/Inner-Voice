import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell
} from '@nextui-org/react'
import { useEffect } from 'react'

export default function AsmrPage() {
  const API_URL =
    'https://pabloyarce.laboratoriodiseno.cl/blog/wp-json/wp/v2/posts?_embed'

  const items = []

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        console.log(data)

        data.forEach(item => {
          const post = {
            title: item.title.rendered,
            excerpt: item.excerpt.rendered,
            image:
              item._embedded && item._embedded['wp:featuredmedia']
                ? item._embedded['wp:featuredmedia'][0].source_url
                : null,
            queHice: item.acf.contenido_que_hice,
            queAprendi: item.acf.contenido_que_aprendi
          }

          items.push(post)
        })

        console.log(items)
      })
  }, [])

  return (
    <section>
      <div
        id="asmrPlaylistInner"
        className="p-7 flex flex-col justify-between"
      ></div>
      <Table aria-label="ASMR table">
        <TableHeader>
          <TableColumn>Nombre</TableColumn>
          <TableColumn></TableColumn>
        </TableHeader>
        <TableBody>
          {items.map(item => (
            <TableRow key={item.title}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.excerpt}</TableCell>
              <TableCell>
                <img src={item.image} alt={item.title} />
              </TableCell>
              <TableCell>{item.queHice}</TableCell>
              <TableCell>{item.queAprendi}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  )
}
