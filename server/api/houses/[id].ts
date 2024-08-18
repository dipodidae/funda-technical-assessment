import { fundaApiEndpoint } from '~/constants'

export default defineEventHandler(async (event) => {
  const { fundaApiKey } = useRuntimeConfig(event)
  const id = getRouterParam(event, 'id')
  const result = await $fetch<FundaObjectDetail>(`${fundaApiEndpoint}/json/detail/${fundaApiKey}/koop/${id}/`)

  return result
})
