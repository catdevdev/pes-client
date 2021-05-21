import { baseServerUrl } from "../redux/api";

export function resolveLocation(relativeLocation: string) {
  return baseServerUrl + relativeLocation;
}