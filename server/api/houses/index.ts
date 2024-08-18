import { fundaApiEndpoint } from '~/constants'
import parseXml from '~/utils/parseXml'

/**
 * I'd like to write better error handling and nicer normalizing of the data, but I'm running out of time.
 */
export default defineEventHandler(async (event) => {
  const { fundaApiKey } = useRuntimeConfig(event)

  const result = await $fetch<FundaApiHousesResponse>(`${fundaApiEndpoint}/${fundaApiKey}/?type=koop&zo=/amsterdam/tuin/video/`, {
    parseResponse: parseXml,
  })

  return result.LocatieFeed.Objects.Object
})
