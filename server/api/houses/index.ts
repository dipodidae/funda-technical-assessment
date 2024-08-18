import { fundaApiEndpoint } from '~/constants'
import parseXml from '~/utils/parseXml'

export default defineEventHandler(async (event) => {
  const { fundaApiKey } = useRuntimeConfig(event)

  const result = await $fetch<FundaApiHousesResponse>(`${fundaApiEndpoint}/${fundaApiKey}/?type=koop&zo=/amsterdam/tuin/video/`, {
    parseResponse: parseXml,
  })

  return result.LocatieFeed.Objects.Object
})
