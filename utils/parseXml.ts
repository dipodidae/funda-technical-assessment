import { xml2json } from 'xml-js'

export default function (xml: string = ''): any {
  return JSON.parse(xml2json(xml, { compact: true, spaces: 2 }))
}
