import { fetchTravelPlotEntries } from "$lib/api/plots"
import { json } from "@sveltejs/kit"

export const GET = async () => {
  return json(await fetchTravelPlotEntries())
}
