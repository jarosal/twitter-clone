import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import { handleClerk } from 'clerk-sveltekit/server';
import { CLERK_SECRET_KEY } from '$env/static/private';
import { Telemetry } from "$lib/telemetry/telemetry";

export const handle: Handle = sequence(
  handleClerk(CLERK_SECRET_KEY, {}),
  async ({ event, resolve }) => {
    Telemetry.getInstance().start();
    return resolve(event);
  }
)