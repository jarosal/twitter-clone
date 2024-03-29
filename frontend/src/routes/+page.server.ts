import { env } from '$env/dynamic/private';

export async function load( event) {
  const url = env['services__hello-world__0'] ?? '';

  console.log(url);

  const response = await event.fetch(url)
  const data = await response.text();

  return { data: data };
}