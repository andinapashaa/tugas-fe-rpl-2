const BASE_ASSET_URL = "https://tugas2-fe.labse.id/assets";

export function getAssetUrl(path: string) {
  return `${BASE_ASSET_URL}/${path}`;
}
