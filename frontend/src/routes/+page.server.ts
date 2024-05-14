import { env } from '$env/dynamic/private';

export async function load( event) {
  const url = env.HELLO_WORLD_API ?? '';

  const response = await event.fetch(url)
  const data = await response.text();

  return { data: data };
}